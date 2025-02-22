import React from 'react';
import { Routes, Route, } from "react-router-dom";

import LandingPage from "./pages/landingPage";

export default function App() {

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}
