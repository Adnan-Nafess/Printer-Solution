import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

const pageTitles = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms & Conditions",
  "/refund-policy": "Refund Policy",
};

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || "Home";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

const App = () => {
  return <AppContent />;
};

export default App;