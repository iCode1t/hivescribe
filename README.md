# HIVESCRIBE

![HIVESCRIBE Banner](./HIVESCRIBE.png)

## **A Progressive On-Chain Quiz Game Built for the Superteam Nigeria Bounty**

**HIVESCRIBE** is a replayable, single-player quiz game that leverages the Honeycomb Protocol to create a replayable, progression-based gameplay loop built around the
**bee lifecycle**. By integrating on-chain traits, missions, and player evolution, we demonstrate how the Honeycomb Protocol can be used as the **core engine for game mechanics and player identity on Solana**.

## 🐝 The Gameplay Loop: Larva to Hive

Players evolve through the stages of a bee's lifecycle by answering blockchain-themed questions. The game tracks their progress entirely on-chain.

- Larva (0 XP): The starting stage.

- Pupa (8 XP): Players begin to form their identity.

- Worker Bee (16 XP): Ready to collect resources.

- Hive (30 XP): The final stage, where players can mint their earned Honey.

---

## Core progression:

**Earn XP:** Players gain **XP** for each correct answer. This XP is stored on-chain using the Honeycomb Protocol and determines their current stage.

**Complete Missions:** Answering all questions in a given mission rewards players with Nectar.

**Convert XP to Nectar:** Once a player reaches the Hive stage, they can convert their earned XP into Nectar.

**Mint Honey:** With enough Nectar, players can mint a final, collectible Honey NFT, signifying their completion of the lifecycle and unlocking competitive features.

---

## ✨ Implemented Features (MVP)

- ✅ Solana Wallet Connection: Seamlessly connect with Phantom Wallet on Solana Devnet.
- ✅ On-chain Trait Tracking: Uses Honeycomb Protocol to store and display player XP and mission completion status.
- ✅ Dynamic Progression Bar: A visual progress bar on the profile page reflects the player's XP and evolution stage.
- ✅ Interactive Missions: A dedicated mission page displays completed and upcoming missions.
- ✅ XP to Nectar Conversion: A functional mock-up on the profile page allows players at the Hive stage to convert XP to Nectar.
- ✅ Mock NFT Minting: A mock-up of the "Mint Honey" feature demonstrates the final reward loop, complete with loading and success states.
- ✅ Mock Duel page

## 🚀 Future Roadmap

- Competitive duel with various games for players to battle with their minted Honey NFTs
- Full mission reward logic tied to the Honeycomb Protocol's on-chain data.
- Global leaderboards and multiplayer mechanics.

## Why This Project Matters

HiveScribe shows how **Honeycomb Protocol** can be used beyond simplifying backend tracking for games on the solana blockchain, it becomes a core part of game mechanics:

- Missions define progress
- All actions can be linked to player identity on-chain.

---

## 🔧 Tech Stack so far

- Frontend: React + Vite
- Blockchain: Solana
- Protocol: Honeycomb Protocol for on-chain traits and missions
- Wallets: Solana Wallet Adapter (Phantom)
- Styling: Custom CSS and modern React components

---

## 🎬 Demo

![Demo of My Project](src/assets/HiveScribeDemoo.mp4)

This video shows a quick demo of some of the features.

## 💻 Getting Started (For Developers)

To run HiveScribe locally, follow these steps:

```bash
git clone https://github.com/iCode1t/hivescribe.git
cd hivescribe
npm install
npm run dev

```

---

## 🎮 **How to Play**

1.  **Connect Wallet**: Start by connecting your Phantom Wallet on Solana Devnet.
2.  **Answer Questions**: Navigate to the missions page and answer the questions to earn XP.
3.  **Evolve**: Watch your stage evolve as your XP increases.
4.  **Mint Honey**: Once you reach the Hive stage, go to your profile page to mint your exclusive Honey NFT.

---

## 👨‍💻Created by icode1t

- iCode1t
- Twitter: https://x.com/big_ola_?s=21
