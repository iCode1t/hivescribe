const questions = [
  {
    id: 1,
    type: "mcq",
    question: "What does NFT stand for?",
    options: ["No Food Today", "Non Fungible Token", "Never Forget This"],
    correctIndex: 1,
  },
  {
    id: 2,
    type: "text",
    question: "What network does HiveScribe run on?",
    answer: "solana",
  },
  {
    id: 3,
    type: "mcq",
    question: "Which of these is NOT a Solana wallet?",
    options: ["Phantom", "Solflare", "MetaFire", "Backpack"],
    correctIndex: 2,
  },

  {
    type: "mcq",
    question: "What is a blockchain?",
    options: [
      "A sandwich with digital layers",
      "A chain of computers for gaming",
      "A decentralized digital ledger",
      "An encrypted VPN router",
    ],
    correctIndex: 2,
  },
  {
    type: "mcq",
    question: "Which of these is native to the Solana blockchain?",
    options: ["Ether", "Bitcoin", "SOL", "DOGE"],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "What does NFT stand for?",
    answer: "Non-Fungible Token",
  },
  {
    type: "mcq",
    question: "What's special about Solana's speed?",
    options: [
      "It uses horse-drawn ledgers",
      "It's slower than Ethereum",
      "It's fast and low-cost",
      "It uses proof-of-sleep",
    ],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "What is the smallest unit of SOL called?",
    answer: "Lamport",
  },
  {
    type: "mcq",
    question: "Who created Solana?",
    options: [
      "Satoshi Nakamoto",
      "Vitalik Buterin",
      "Anatoly Yakovenko",
      "Elon Musk",
    ],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "Which Solana wallet starts with 'P' and ends in 'et'?",
    answer: "Phantom",
  },
  {
    type: "mcq",
    question: "What is 'staking' in crypto?",
    options: [
      "Grilling coins on a fire",
      "Locking coins to support the network",
      "Sending tokens to space",
      "Airdropping food tokens",
    ],
    correctIndex: 1,
  },
  {
    type: "text",
    question: "What is the command to check your SOL balance using Solana CLI?",
    answer: "solana balance",
  },
  {
    type: "mcq",
    question:
      "Which programming language is commonly used for Solana smart contracts?",
    options: ["Python", "Rust", "Solidity", "Go"],
    correctIndex: 1,
  },
  {
    type: "text",
    question: "What is the name of Solana’s virtual machine (SVM)?",
    answer: "Sealevel",
  },
  {
    type: "mcq",
    question: "Which of these is a Solana-based NFT marketplace?",
    options: ["Uniswap", "OpenSea", "Magic Eden", "SushiSwap"],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "What does DeFi stand for?",
    answer: "Decentralized Finance",
  },
  {
    type: "mcq",
    question: "Which network is faster for transactions?",
    options: ["Bitcoin", "Ethereum", "Solana", "Polygon"],
    correctIndex: 2,
  },
  {
    type: "mcq",
    question: "What is a DAO?",
    options: [
      "Digital Asset Officer",
      "Decentralized Autonomous Organization",
      "Data Algorithm Output",
      "Airdrop Distribution App",
    ],
    correctIndex: 1,
  },
  {
    type: "text",
    question: "Solana stores time using Proof of _____?",
    answer: "History",
  },
  {
    type: "mcq",
    question: "What's the purpose of a wallet seed phrase?",
    options: [
      "To grow SOL tokens in your garden",
      "To log in faster",
      "To recover your wallet",
      "To share your balance with friends",
    ],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "Name one use case of NFTs beyond art.",
    answer: "gaming",
  },
  {
    type: "mcq",
    question: "Which is a real Solana devnet RPC URL?",
    options: [
      "https://solana.fake.net",
      "https://api.devnet.solana.com",
      "https://localhost:4200",
      "https://solwallet.net",
    ],
    correctIndex: 1,
  },
  {
    type: "text",
    question: "What is the Solana command to create a new keypair?",
    answer: "solana-keygen new",
  },
  {
    type: "mcq",
    question: "What's the typical block time on Solana?",
    options: ["30 seconds", "10 seconds", "0.4 seconds", "5 minutes"],
    correctIndex: 2,
  },
  {
    type: "mcq",
    question: "Which of these is a layer 1 blockchain?",
    options: ["Polygon", "Arbitrum", "Solana", "Optimism"],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "What is an airdrop in Web3?",
    answer: "Free token distribution",
  },
  {
    type: "mcq",
    question:
      "Which tool is used to interact with the Solana blockchain via terminal?",
    options: ["Web3.js", "Cargo", "Solana CLI", "Geth"],
    correctIndex: 2,
  },
  {
    type: "text",
    question: "Name one Solana dev tool that starts with ‘A’.",
    answer: "Anchor",
  },
];

export default questions;
