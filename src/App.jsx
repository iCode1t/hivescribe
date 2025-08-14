import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletConnector } from "./components/WalletConnector";
import { TraitProvider } from "./context/Traitcontext";
import BeeBackground from "./components/h3DBackground";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/dashboard";
import TaskPage from "./pages/taskPage";
import ProfilePage from "./pages/profilepage";
import MissionsPage from "./pages/MissionsPage";
import PlayerGuide from "./pages/playerGuidesPage";
import Leaderboard from "./pages/leaderboard";
import PvPduel from "./pages/pvpDuel";
import "./index.css";

const App = () => {
  return (
    <WalletConnector>
      <TraitProvider>
        <BrowserRouter>
          <BeeBackground />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/taskPage" element={<TaskPage />} />
            <Route path="/playerguide" element={<PlayerGuide />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/pvpduel" element={<PvPduel />} />
          </Routes>
        </BrowserRouter>
      </TraitProvider>
    </WalletConnector>
  );
};

export default App;
