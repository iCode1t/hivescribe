import React from "react";
import { useNavigate } from "react-router-dom";
export default function Guides() {
  const navigate = useNavigate();
  return (
    <div className="floating-wrapper">
      <button className="nav-button" onClick={() => navigate("/dashboard")}>
        🏠 Home
      </button>
      <div>
        <h1 className="hh1">ℹ️ How to Play HiveScribe</h1>
      </div>

      <main className="guide-main">
        <section className="guide-section">
          <h2 className="section-title">Overview</h2>
          <p>
            <strong>HiveScribe </strong>
            is a replayable, progression based single-player quiz game built on
            Solana using the <strong>Honeycomb Protocol</strong>. Climb the bee
            lifecycle stages, complete on-chain missions, and convert earned
            Nectar into <strong>Honey NFTs</strong> for competitive knowledge
            duels. All progress, missions, and traits are verifiable and
            portable on-chain.
          </p>
        </section>

        <section className="guide-section">
          <h2 className="section-title">How to Play</h2>
          <ol className="ordered-list">
            <li>
              <strong>Connect Your Wallet</strong> — Link your Solana wallet,
              then click <em>Enter Game</em> to open the Dashboard.
            </li>
            <li>
              <strong>Dashboard Overview</strong> — Your Progression Ladder,
              Buttons to navigate to Profile, Leaderboard, Guides and other
              parts of the game. Click <em>Quiz</em> to start.
            </li>
            <li>
              <strong>Answer Questions</strong> — Choose or type your answer.
              Submit to check correctness, or skip to move on.
            </li>
            <li>
              <strong>Earn XP & Nectar</strong> — Correct answers grant{" "}
              <strong>3 XP</strong>. Complete missions for Nectar. Convert XP to
              Nectar at <strong>10 XP = 1 Nectar</strong>.
            </li>
            <li>
              <strong>Progress & Mint Honey</strong> — At Hive stage, convert{" "}
              <strong>3 Nectar = 1 Honey NFT</strong> and stake them in PvP
              duels.
            </li>
          </ol>

          <div className="info-grid">
            <div className="info-box">
              <h3 className="hh3">Quick Controls</h3>
              <ul>
                <li>Submit Answer — checks correctness & awards XP</li>
                <li>Skip Question — no reward</li>
                <li>Home — return to Dashboard</li>
              </ul>
            </div>
            <div className="info-box">
              <h3 className="hh3">Key Conversions</h3>
              <p>
                <strong>3 XP</strong> per correct answer
              </p>
              <p>
                <strong>10 XP = 1 Nectar</strong>
              </p>
              <p>
                <strong>3 Nectar = 1 Honey NFT</strong> (
                <em>only possibe at Hive stage</em>)
              </p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Missions & Progression</h2>
          <div className="missions-progress-grid">
            <div>
              <h3 className="hh3">On-Chain Missions</h3>
              <ul>
                <li>
                  <strong>Hatched</strong> — 1 Nectar
                </li>
                <li>
                  <strong>Hot Streak</strong> — 1 Nectar
                </li>
                <li>
                  <strong>Loyal Bee</strong> — 1 Nectar
                </li>
                <li>
                  <strong>True Bee</strong> — 1 Nectar
                </li>
              </ul>
            </div>
            <div>
              <h3 className="h3">Progression Ladder</h3>
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Min XP</th>
                    <th>Unlocked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Larva</td>
                    <td>0</td>
                    <td>Starting stage</td>
                  </tr>
                  <tr>
                    <td>Pupa</td>
                    <td>8</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Worker Bee</td>
                    <td>16</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Hive</td>
                    <td>30</td>
                    <td>Mint Honey NFTs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Game Rules</h2>
          <ul>
            <li>No cheating, exploiting, or toxic behavior.</li>
            <li>Skipped questions yield no XP or Nectar.</li>
            <li>Missions award Nectar only when fully completed.</li>
            <li>Honey NFT minting and staking are only at Hive stage.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Features</h2>
          <ul>
            <li>Honeycomb-powered on chain </li>
            <li>XP → Nectar → Honey NFT economy</li>
            <li>Progression visualization</li>
            <li>Wallet-integrated leaderboards</li>
            <li>PvP duels with NFT staking</li>
            <li>Exportable on-chain traits</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Tips for Success</h2>
          <ul>
            <li>Complete missions early to boost Nectar.</li>
            <li>Plan XP-to-Nectar conversions to reach Hive quickly.</li>
            <li>Practice for PvP by improving speed and accuracy.</li>
            <li>Check leaderboards regularly.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Community & Support</h2>
          <div className="community-links">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </section>
      </main>

      <footer className="guide-footer">
        © {new Date().getFullYear()} HiveScribe — Built with Honeycomb Protocol
        on Solana
      </footer>
    </div>
  );
}
