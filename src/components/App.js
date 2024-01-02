import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Instruction from "./Instruction";
import SettingsList from "./SettingsList";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const App = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <Router>
      <>
        <Sidebar setActiveSection={setActiveSection} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/settingsList" element={<SettingsList />} />
        </Routes>
        {/* <Header /> */}
      </>
    </Router>
  );
};

export default App;
