import { client } from "./honeycombClient";
import { PublicKey } from "@solana/web3.js";
import { sendClientTransactions } from "@honeycomb-protocol/edge-client/client/walletHelpers";
import base58 from "bs58";

const projectAddress = new PublicKey(
  "A5uyuzk52rT8D78JMZmJApW7MHPZXrtVQpP8xXxusHb"
);
const LOCAL_STORAGE_KEY = "honeycombUserCache";

function getCachedUser(walletAddress) {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) return null;

  const cache = JSON.parse(raw);
  return cache[walletAddress] || null;
}

function setCachedUser(walletAddress, data) {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  const cache = raw ? JSON.parse(raw) : {};

  cache[walletAddress] = data;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cache));
}

export async function ensureUserProfile(wallet, connection) {
  try {
    const userWalletStr = wallet.publicKey.toBase58();

    const cached = getCachedUser(userWalletStr);
    if (cached?.profileExists) {
      console.log("User/profile found in localStorage cache.");
      return { created: false, profile: "cached" };
    }

    const { user } = await client.findUsers({ wallets: [userWalletStr] });

    if (!user || user.length === 0) {
      console.log(" No existing user. Creating user & profile...");

      const { createNewUserWithProfileTransaction: txResponse } =
        await client.createNewUserWithProfileTransaction({
          project: projectAddress.toString(),
          wallet: userWalletStr,
          payer: userWalletStr,
          profileIdentity: "main",
          userInfo: {
            name: "New Hivescribe Player",
            bio: "Created on first task start",
            pfp: "https://example.com/default-avatar.png",
          },
        });

      await sendClientTransactions(client, wallet, txResponse);

      setCachedUser(userWalletStr, {
        userId: "created",
        profileExists: true,
      });

      console.log(" User and profile created.");
      return { created: true, profile: null };
    }

    const existingUser = user[0];
    console.log(" User exists:", existingUser.id);

    const { profile } = await client.findProfiles({
      userIds: [existingUser.id],
      projects: [projectAddress.toString()],
      identities: ["main"],
    });

    if (!profile || profile.length === 0) {
      console.log(" No profile found. Authenticating user...");

      const {
        authRequest: { message: authMessage },
      } = await client.authRequest(userWalletStr);

      const encodedMessage = new TextEncoder().encode(authMessage);
      const signedMessage = await wallet.signMessage(encodedMessage);
      const signature = base58.encode(signedMessage);

      const {
        authConfirm: { accessToken },
      } = await client.authConfirm({
        wallet: userWalletStr,
        signature,
      });

      console.log(" Authenticated. Creating profile...");

      const { createNewProfileTransaction: txResponse } =
        await client.createNewProfileTransaction(
          {
            project: projectAddress.toString(),
            payer: userWalletStr,
            identity: "main",
            info: {
              name: "Hivescribe Player",
              bio: "Auto-created profile",
              pfp: "https://example.com/default-avatar.png",
            },
          },
          {
            fetchOptions: {
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
            },
          }
        );

      await sendClientTransactions(client, wallet, txResponse);

      setCachedUser(userWalletStr, {
        userId: existingUser.id,
        profileExists: true,
      });

      console.log(" Profile created.");
      return { created: true, profile: null };
    }

    setCachedUser(userWalletStr, {
      userId: existingUser.id,
      profileExists: true,
    });

    console.log(" User and profile already exist.");
    return { created: false, profile: profile[0] };
  } catch (err) {
    console.error("❌ Error checking/creating profile:", err);
    return { created: false, error: err };
  }
}
