import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import { WalletConnector } from "../components/WalletConnector";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import HiveScribeLogo from "../assets/HIVESCRIBE.png";

const LoginPage = () => {
  const { publicKey, connected } = useWallet();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && publicKey) {
      navigate("/dashboard");
    }
  }, [loading, publicKey, navigate]);

  return (
    <WalletConnector>
      <div className="loginPage">
        <img className="logo" src={HiveScribeLogo} alt="HiveScribe" />
        <h1 className="instruction">Connect your wallet to continue</h1>
        <WalletMultiButton />

        <div className="fallback-message">
          <p>
            If you're not redirected after connecting your wallet, don't worry!
            Sometimes your wallet needs a little nudge.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="refresh-button"
          >
            🔄 Try Again / Go to Dashboard
          </button>
        </div>
      </div>
    </WalletConnector>
  );
};

export default LoginPage;
