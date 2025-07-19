import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FAQsPage from "./pages/FAQsPage";
import MembersPage from "./pages/MembersPage";
import Navbar
 from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}

        {/* Page Content */}
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/members" element={<MembersPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-50 text-center p-4 text-gray-500 text-sm">
          &copy; 2025 Smart Hotels
        </footer>
      </div>
    </Router>
  );
};

export default App;
