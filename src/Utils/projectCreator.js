import { client } from "./honeycombClient";
import { sendClientTransactions } from "@honeycomb-protocol/edge-client/client/walletHelpers";
export async function createProject(wallet) {
  const {
    createCreateProjectTransaction: { project: projectAddress, tx: txResponse },
  } = await client.createCreateProjectTransaction({
    name: "HiveScribe",
    authority: wallet.publicKey.toBase58(),
  });

  console.log("🟩 Project address:", projectAddress); // 👈 ADD THIS LINE

  const result = await sendClientTransactions(client, wallet, txResponse);
  console.log("✅ Project created on-chain:", result);

  return projectAddress;
}
