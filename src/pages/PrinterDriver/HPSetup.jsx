import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SetupWizard from "../../components/SetupWizard";

import hpLogo from "./hp-logo.png";
import hpPrinter from "./hp-printer.png";
import hpModel from "./hp-model.png";

function HPSetup() {
  const [modelNumber, setModelNumber] = useState("");
  const [showWizard, setShowWizard] = useState(false);
  const [wizardInitialStep, setWizardInitialStep] = useState("start");

  useEffect(() => {
    document.title = "HP Printer Setup";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Download free drivers, software utility packages, and setup guidelines to configure your HP printer and scanner devices.",
    );
  }, []);

  const handleDownloadMain = (e) => {
    e.preventDefault();
    if (!modelNumber.trim()) {
      alert(
        "Please enter your printer model number (e.g. OfficeJet Pro 9015).",
      );
      return;
    }
    // Launch directly to loading details verification screen
    setWizardInitialStep("model-loading");
    setShowWizard(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between antialiased font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1">
            <img
              src={hpLogo}
              alt="HP Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-semibold text-slate-600 hover:text-[#0096d2] transition"
            >
              Printers & All-In-One
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-slate-600 hover:text-[#0096d2] transition"
            >
              Smart Tank Printers
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-slate-600 hover:text-[#0096d2] transition"
            >
              LaserJet Printers
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-slate-600 hover:text-[#0096d2] transition"
            >
              OfficeJet Printers
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-slate-600 hover:text-[#0096d2] transition"
            >
              Envy Photo Printers
            </a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="bg-[#0096d2] text-white py-12 md:py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Text and CTA */}
            <div className="md:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Download Free HP Printer Drivers
              </h1>

              <ul className="space-y-3 text-lg text-sky-100 font-medium">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-200 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Make sure your HP printer is powered on</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-200 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Click on Download to install the latest drivers</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setWizardInitialStep("start");
                    setShowWizard(true);
                  }}
                  className="px-8 cursor-pointer py-3.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-bold rounded-full shadow-lg shadow-sky-900/30 flex items-center gap-2 transition duration-200"
                >
                  <span>Download Now</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Visual Realistic Printer */}
            <div className="md:col-span-5 flex justify-center relative">
              {/* Radial gradient glow behind printer */}
              <div className="absolute inset-0 bg-sky-300/20 blur-3xl rounded-full scale-75" />

              <img
                src={hpPrinter}
                alt="HP Realistic Printer"
                className="relative w-80 h-auto drop-shadow-2xl object-contain transform hover:scale-103 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Quick Download Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Input Form Column */}
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold text-[#0096d2]">
                Quick Download Free HP Drivers
              </h2>
              <p className="text-slate-600 font-medium">
                Fill the form and download your HP printer driver
              </p>

              <form
                onSubmit={handleDownloadMain}
                className="space-y-5 max-w-xl"
              >
                <div>
                  <label
                    htmlFor="modelNumber"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Model Number:
                  </label>
                  <input
                    type="text"
                    id="modelNumber"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                    placeholder="Enter model number (e.g. OfficeJet Pro 9015)"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0096d2] text-slate-800 font-medium transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0096d2] hover:bg-[#0085bd] disabled:bg-slate-400 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>Quick Download & Install Drivers!</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Helper Column */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  How to find HP printer model number?
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  The product name and model number are usually found on the
                  front, top, or back of your device.
                </p>
              </div>

              {/* Realistic Printer with Callout */}
              <div className="relative flex items-center justify-center overflow-hidden h-55 w-full">
                <img
                  src={hpModel}
                  alt="HP Model Helper"
                  className="w-160 h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Blue Footer */}
      <footer className="bg-[#003b64] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-xs font-semibold">
          <div className="space-y-4">
            <h4 className="text-sm font-bold border-b border-sky-800 pb-2">
              Business Solutions
            </h4>
            <ul className="space-y-2 text-sky-200">
              <li>
                <a href="#" className="hover:text-white transition">
                  Products for Business →
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Products for Home →
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h4 className="text-sm font-bold border-b border-sky-800 pb-2">
              Product Support
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sky-200">
              <a href="#" className="hover:text-white transition">
                HP Support Center
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Sale
              </a>
              <a href="#" className="hover:text-white transition">
                Register Your HP Product
              </a>
              <a href="#" className="hover:text-white transition">
                Ink & Toner Supplies
              </a>
              <a href="#" className="hover:text-white transition">
                Shipping & Delivery Info
              </a>
              <a href="#" className="hover:text-white transition">
                HP Ordering FAQs
              </a>
              <a href="#" className="hover:text-white transition">
                Check Order Status
              </a>
              <a href="#" className="hover:text-white transition">
                HP Warranty Details
              </a>
              <a href="#" className="hover:text-white transition">
                Recall & Safety Info
              </a>
              <a href="#" className="hover:text-white transition">
                Return & Refund Policy
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold border-b border-sky-800 pb-2">
              Corporate
            </h4>
            <ul className="space-y-2 text-sky-200">
              <li>
                <a href="#" className="hover:text-white transition">
                  About HP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sustainable Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HP Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers at HP
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold border-b border-sky-800 pb-2">
              Partners
            </h4>
            <ul className="space-y-2 text-sky-200">
              <li>
                <a href="#" className="hover:text-white transition">
                  HP Partner Connect
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HP Developer Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="max-w-6xl mx-auto border-t border-sky-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sky-300 gap-4">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition">
              Site Map
            </a>
            <a href="#" className="hover:text-white transition">
              Accessibility Statement
            </a>
          </div>
          <div>
            <p>
              © {new Date().getFullYear()} HP Development Company, L.P. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Wizard Modal Overlay Component */}
      <SetupWizard
        showWizard={showWizard}
        setShowWizard={setShowWizard}
        modelNumber={modelNumber}
        setModelNumber={setModelNumber}
        initialStep={wizardInitialStep}
        brand="hp"
      />
    </div>
  );
}

export default HPSetup;
