import React from 'react';
import { Routes, Route, } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import InvitationPage from "./pages/InvitionPage";

export default function App() {

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/invite" element={<InvitationPage />} />
        </Routes>
      </main>
    </div>
  );
}
