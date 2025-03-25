import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter here

import "./App.css";
import Sidebar from "./pages/Sidebar";
import Header from "./pages/Header";
import Services from "./component/services/Services";
import ServicePackage from "./component/services/ServicePackage";
import Slot from "./component/services/Slot";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes> 
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<ServicePackage />} />
            <Route path="/slot" element={<Slot />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
