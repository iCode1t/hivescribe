#  HIVESCRIBE
A single-player quiz game built on **Solana** using the **Honeycomb Protocol**.  
Play, Learn, Earn, and Evolve — one stage at a time.

![HIVESCRIBE Banner](./HIVESCRIBE.png)

---

### **Built And Submitted for the Superteam Nigeria x Honeycomb Protocol Bounty**

---

## 🎮 Game Concept

**HiveScribe** is a replayable, progression-based single-player quiz game inspired by the **bee lifecycle**.  
Players grow from **Larva → Hive → Honey**, answering questions, earning XP, and unlocking stages.

It uses the **Honeycomb Protocol** to:
- Track player **traits** (XP, mission status)
- Reward **on-chain mission** completions
- Store identity and progress on Solana

---
##  Lifecycle Stages

| Stage        | Required XP |
|--------------|-------------|
| Larva        | 0 XP        |
| Pupa         | 8 XP        |
| Worker Bee   | 16 XP       |
| Hive         | 30 XP       |
| Honey      | Final competitive stage (uses Nectar & Honey jars) |

---

##  Core Features (at the time of this MVP Submission)

✅ Solana **Wallet Connection**  
✅ Functional **Dashboard** with stage unlocks and XP/Nectar display  
✅ **Mission System** powered by Honeycomb Protocol  
✅ **Profile Page** with XP progress bar  
✅ **Mission Page** showing completed missions  

---
##  Features Planned but Not Yet Implemented

- XP-to-Nectar and Nectar-to-Honey conversion  
- Competitive “Honey” stage with head-to-head battles that will either cost you your honeyjar or win you one. 
- Full XP and mission reward logic per question  
- Leaderboard system and multiplayer logic  

---


## Why This Project Matters

HiveScribe shows how **Honeycomb Protocol** can be used beyond simplifying  backend tracking for games on the solana blockchain, it becomes a *core part of game mechanics*:
- Missions define progress
- Traits power stage evolution
- All actions can be linked to player identity on-chain.

---
##  Tech Stack used

-  React + Vite (Frontend)  
-  Honeycomb Protocol (Missions, Traits)  
-  Phantom Wallet Adapter (Solana Devnet)  
-  LocalStorage caching (Dev mode)

---
##  Submission Note

> The bounty page is unclear — it says *"Winners announced July 30"*, but still shows *20+ days left*.  
To avoid missing the judging deadline, I’m submitting this MVP now so that the **core concept and Honeycomb integration** can be reviewed.

---
## 🚀 Getting Started (Dev Mode)

```bash
git clone https://github.com/iCode1t/hivescribe.git
cd hivescribe
npm install
npm run dev
```
Make sure to have and  connect a solana wallet(preferably Phantom) on DEVNET
---
## 🕹️ How to Play

1. **Connect Wallet** — Login using Phantom Wallet  
2. **Play Quizzes** — Answer questions to earn XP  
3. **Complete Missions** — Unlock Nectar and track mission rewards  
4. **Evolve** — Reach new lifecycle stages as XP increases  
5. *Coming Soon:*
   - XP → Nectar → Honey  
   - Battle with Honey jars in PvP mode  
   - Mint Honey Scroll NFTs  
   - Daily Verxio XP streaks  

---


##  Project Structure


hivescribe/

├── src/

│ ├── components/

│ ├── context/

│ ├── data/

│ ├── pages/

│ ├── Utils/

│ ├── honeycombStuff/

│ ├── App.jsx

│ ├── main.jsx

│ └── index.css

├── public/

│ └── HIVESCRIBE.png

├── README.md

├── package.json

└── vite.config.js


## 💬 Contact

**Built by [@icode1t](https://x.com/big_ola_?s=21)**  
GitHub: [github.com/iCode1t/hivescribe](https://github.com/iCode1t/hivescribe)
