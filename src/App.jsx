import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletConnector } from "./components/WalletConnector";
import { TraitProvider } from "./context/Traitcontext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/dashboard";
import TaskPage from "./pages/taskPage";
import ProfilePage from "./pages/profilepage";
import MissionsPage from "./pages/MissionsPage";
import "./index.css";

const App = () => {
  return (
    <WalletConnector>
      <TraitProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/taskPage" element={<TaskPage />} />
          </Routes>
        </BrowserRouter>
      </TraitProvider>
    </WalletConnector>
  );
};

export default App;
