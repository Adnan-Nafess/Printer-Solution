import { useState, useEffect } from "react";

export default function SetupWizard({
  showWizard,
  setShowWizard,
  modelNumber,
  setModelNumber,
  initialStep = "start",
  brand = "brother",
}) {
  const [wizardStep, setWizardStep] = useState(initialStep);
  const [loadingText, setLoadingText] = useState("");
  const [connectionType, setConnectionType] = useState("usb");

  // Diagnostic State variables
  const [diagnosticText, setDiagnosticText] = useState("");
  const [diagnosticProgress, setDiagnosticProgress] = useState(0);

  const triggerLiveChat = () => {
    if (window.jivo_api && typeof window.jivo_api.open === "function") {
      window.jivo_api.open();
    } else {
      alert(
        "Connecting you to a specialized support assistant... Please keep this page open.",
      );
    }
  };

  const isHp = brand === "hp";
  const isEpson = brand === "epson";
  const isCanon = brand === "canon";
  const isOther = brand === "other";

  const btnBg = isHp
    ? "bg-sky-600 hover:bg-sky-700"
    : isEpson
      ? "bg-[#003399] hover:bg-[#002780]"
      : isCanon
        ? "bg-red-600 hover:bg-red-700"
        : isOther
          ? "bg-slate-600 hover:bg-slate-700"
          : "bg-blue-600 hover:bg-blue-700";

  const btnShadow = isHp
    ? "hover:shadow-sky-500/20"
    : isEpson
      ? "hover:shadow-blue-500/20"
      : isCanon
        ? "hover:shadow-red-500/20"
        : isOther
          ? "hover:shadow-slate-500/20"
          : "hover:shadow-blue-500/20";

  const textBrand = isHp
    ? "text-sky-600"
    : isEpson
      ? "text-[#003399]"
      : isCanon
        ? "text-red-600"
        : isOther
          ? "text-slate-600"
          : "text-blue-600";

  const textBrandHover = isHp
    ? "text-sky-600 hover:text-sky-700"
    : isEpson
      ? "text-[#003399] hover:text-[#002780]"
      : isCanon
        ? "text-red-600 hover:text-red-700"
        : isOther
          ? "text-slate-600 hover:text-slate-700"
          : "text-blue-600 hover:text-blue-700";

  const ringBrand = isHp
    ? "focus:ring-sky-500"
    : isEpson
      ? "focus:ring-[#003399]"
      : isCanon
        ? "focus:ring-red-500"
        : isOther
          ? "focus:ring-slate-500"
          : "focus:ring-blue-500";

  const strokeColor = isHp
    ? "#0284c7"
    : isEpson
      ? "#003399"
      : isCanon
        ? "#dc2626"
        : isOther
          ? "#475569"
          : "#3b82f6";

  const placeholderText = isHp
    ? "e.g. OfficeJet Pro 9015"
    : isEpson
      ? "e.g. EcoTank ET-2800"
      : isCanon
        ? "e.g. Pixma TS3520"
        : isOther
          ? "e.g. Printer Model"
          : "e.g. MFC-L2710DW";

  const hoverBorder = isHp
    ? "hover:border-sky-500/40 hover:bg-sky-50/10"
    : isEpson
      ? "hover:border-[#003399]/40 hover:bg-blue-50/10"
      : isCanon
        ? "hover:border-red-500/40 hover:bg-red-50/10"
        : isOther
          ? "hover:border-slate-500/40 hover:bg-slate-50/10"
          : "hover:border-blue-500/40 hover:bg-blue-50/10";

  // Sync step state when modal opens
  useEffect(() => {
    if (showWizard) {
      setWizardStep(initialStep);
    }
  }, [showWizard, initialStep]);

  // Handle auto-progress for model-loading verification screen
  useEffect(() => {
    if (showWizard && wizardStep === "model-loading") {
      const timer = setTimeout(() => {
        setWizardStep("connection");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showWizard, wizardStep]);

  const startVerifyingSequence = (type) => {
    setConnectionType(type);
    setWizardStep("loading");
    const texts =
      type === "usb"
        ? [
            "Searching for USB ports...",
            "Checking Printer Spooler...",
            "Checking Printer Drivers...",
            "Checking Installation Files...",
          ]
        : [
            "Searching for Wifi Network...",
            "Checking Printer Spooler...",
            "Checking Printer Drivers...",
            "Checking Installation Files...",
          ];

    let index = 0;
    setLoadingText(texts[0]);

    const interval = setInterval(() => {
      index++;
      if (index < texts.length) {
        setLoadingText(texts[index]);
      } else {
        clearInterval(interval);
        setWizardStep("error");
      }
    }, 1800);

    return () => clearInterval(interval);
  };

  const startDiagnosing = () => {
    setWizardStep("diagnosing");
    const stages = [
      { text: "Gathering information about your devices...", progress: 20 },
      { text: "Checking the spooler service...", progress: 45 },
      { text: "Checking network printer connectivity...", progress: 70 },
      { text: "Checking for a default printer...", progress: 90 },
    ];

    let index = 0;
    setDiagnosticText(stages[0].text);
    setDiagnosticProgress(stages[0].progress);

    const interval = setInterval(() => {
      index++;
      if (index < stages.length) {
        setDiagnosticText(stages[index].text);
        setDiagnosticProgress(stages[index].progress);
      } else {
        clearInterval(interval);
        setWizardStep("registry-error");
      }
    }, 1800);

    return () => clearInterval(interval);
  };

  if (!showWizard) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative border border-slate-200 flex flex-col justify-between min-h-[500px] md:min-h-[600px] max-h-[calc(100vh-2rem)] transition-all duration-300">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
          <h3 className="text-xl font-extrabold text-slate-800">
            Quick Download Free Drivers
          </h3>
          <button
            onClick={() => setShowWizard(false)}
            className="text-slate-400 hover:text-slate-600 transition p-1 hover:bg-slate-100 rounded-full cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-6 flex flex-col justify-center overflow-y-auto min-h-0">
          {/* Step 1: Start */}
          {wizardStep === "start" && (
            <div className="text-center space-y-6 py-4">
              <button
                onClick={() => setWizardStep("model")}
                className={`px-6 py-2.5 ${btnBg} active:scale-95 text-white font-bold rounded-lg shadow-md ${btnShadow} transition flex items-center gap-2 mx-auto cursor-pointer`}
              >
                <span>Let's Start</span>
                <span className="text-sm">➔</span>
              </button>
              <p className="text-slate-600 font-bold text-lg">
                Start Printer Setup Wizard
              </p>
              <div className="flex justify-center max-w-xs mx-auto">
                <img
                  src="/img.png"
                  alt="Printer Setup"
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
          )}

          {/* Step 2: Enter Model */}
          {wizardStep === "model" && (
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <p className="text-slate-700 font-bold text-base mb-6">
                Fill the form and download your printer driver
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!modelNumber.trim()) {
                    alert("Please enter your printer model number.");
                    return;
                  }
                  setWizardStep("model-loading");
                }}
                className="space-y-4 max-w-sm mx-auto text-left"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Model Number:
                  </label>
                  <input
                    type="text"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                    placeholder={placeholderText}
                    className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 ${ringBrand} text-slate-800 font-medium transition text-center`}
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 ${btnBg} active:scale-98 text-white font-bold rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2`}
                >
                  <span>Quick Download & Install Drivers!</span>
                  <svg
                    className="w-4 h-4"
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
          )}

          {/* Step 2.5: Model Loading */}
          {wizardStep === "model-loading" && (
            <div className="text-center py-12 space-y-6">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <svg
                  className={`animate-spin h-12 w-12 ${textBrand}`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-800 font-bold text-lg">
                  Verifying Model Details
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  Checking database for "{modelNumber}"...
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Connection */}
          {wizardStep === "connection" && (
            <div className="space-y-6 py-2">
              <h4 className="text-slate-700 font-bold text-base text-center">
                Select Wi-Fi or USB connection?
              </h4>
              <div className="space-y-4">
                {/* USB Option */}
                <div
                  className={`border border-slate-200 rounded-xl p-4 flex items-center justify-between ${hoverBorder} transition`}
                >
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-16 h-12 text-slate-500"
                      viewBox="0 0 100 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="35"
                        width="25"
                        height="18"
                        rx="2"
                        fill="#94a3b8"
                      />
                      <path d="M5 53H40L36 56H9L5 53Z" fill="#64748b" />
                      <rect
                        x="70"
                        y="30"
                        width="25"
                        height="24"
                        rx="2"
                        fill="#cbd5e1"
                      />
                      <path
                        d="M35 44C50 44 50 42 70 42"
                        stroke={strokeColor}
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">
                        USB: Connect via USB
                      </h5>
                    </div>
                  </div>
                  <button
                    onClick={() => startVerifyingSequence("usb")}
                    className={`px-4 py-2 ${btnBg} text-white font-bold text-xs rounded-lg shadow transition flex items-center gap-1 cursor-pointer`}
                  >
                    <span>Let's Start</span>
                    <span className="text-xs">➔</span>
                  </button>
                </div>

                {/* Wifi Option */}
                <div
                  className={`border border-slate-200 rounded-xl p-4 flex items-center justify-between ${hoverBorder} transition`}
                >
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-16 h-12 text-slate-500"
                      viewBox="0 0 100 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="45"
                        width="25"
                        height="10"
                        rx="2"
                        fill="#94a3b8"
                      />
                      <line
                        x1="22"
                        y1="45"
                        x2="22"
                        y2="30"
                        stroke="#475569"
                        strokeWidth="2"
                      />
                      <rect
                        x="70"
                        y="30"
                        width="25"
                        height="24"
                        rx="2"
                        fill="#cbd5e1"
                      />
                      <path
                        d="M35 38C45 33 55 33 65 38"
                        stroke={strokeColor}
                        strokeWidth="1.5"
                      />
                      <path
                        d="M40 43C47 39 53 39 60 43"
                        stroke={strokeColor}
                        strokeWidth="1.5"
                      />
                    </svg>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">
                        WIFI: Connect via Wifi.
                      </h5>
                    </div>
                  </div>
                  <button
                    onClick={() => startVerifyingSequence("wifi")}
                    className={`px-4 py-2 ${btnBg} text-white font-bold text-xs rounded-lg shadow transition flex items-center gap-1 cursor-pointer`}
                  >
                    <span>Let's Start</span>
                    <span className="text-xs">➔</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Loading */}
          {wizardStep === "loading" && (
            <div className="text-center space-y-6">
              <h4 className="text-slate-700 font-medium text-sm">
                Verify your printer's{" "}
                {connectionType === "usb" ? "USB" : "Wi-Fi"} connection for a
                seamless setup process.
              </h4>
              <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
                Please wait...
              </p>

              {/* Connection Graphic */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex justify-center max-w-sm mx-auto">
                {connectionType === "usb" ? (
                  <svg
                    className="w-48 h-24"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="20"
                      y="45"
                      width="40"
                      height="26"
                      rx="3"
                      fill="#94a3b8"
                    />
                    <rect x="24" y="49" width="32" height="18" fill="#1e293b" />
                    <path d="M12 71H68L62 76H18L12 71Z" fill="#64748b" />
                    <rect
                      x="130"
                      y="40"
                      width="50"
                      height="32"
                      rx="4"
                      fill="#cbd5e1"
                    />
                    <rect
                      x="138"
                      y="32"
                      width="34"
                      height="8"
                      rx="2"
                      fill="#94a3b8"
                    />
                    <rect x="140" y="72" width="30" height="8" fill="#475569" />
                    <path
                      d="M68 71C90 71 90 56 130 56"
                      stroke={strokeColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    />
                    <circle cx="68" cy="71" r="2.5" fill={strokeColor} />
                    <circle cx="130" cy="56" r="2.5" fill={strokeColor} />
                  </svg>
                ) : (
                  <svg
                    className="w-48 h-24"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="25"
                      y="55"
                      width="40"
                      height="15"
                      rx="3"
                      fill="#94a3b8"
                    />
                    <line
                      x1="45"
                      y1="55"
                      x2="45"
                      y2="30"
                      stroke="#475569"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="33" cy="62" r="2" fill="#10b981" />
                    <circle cx="41" cy="62" r="2" fill="#10b981" />
                    <circle cx="49" cy="62" r="2" fill="#10b981" />
                    <rect
                      x="130"
                      y="40"
                      width="50"
                      height="32"
                      rx="4"
                      fill="#cbd5e1"
                    />
                    <rect
                      x="138"
                      y="32"
                      width="34"
                      height="8"
                      rx="2"
                      fill="#94a3b8"
                    />
                    <rect x="140" y="72" width="30" height="8" fill="#475569" />
                    <path
                      d="M70 42C75 47 75 53 70 58"
                      stroke={strokeColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M80 37C88 45 88 55 80 63"
                      stroke={strokeColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M90 32C101 43 101 57 90 68"
                      stroke={strokeColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-3 bg-slate-50 py-3 px-4 rounded-xl border border-slate-100 max-w-sm mx-auto min-h-[50px]">
                <svg
                  className={`animate-spin h-5 w-5 ${textBrand} flex-shrink-0`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="text-slate-700 font-bold text-sm text-left">
                  {loadingText}
                </span>
              </div>
            </div>
          )}

          {/* Step 5: Error (Initial) */}
          {wizardStep === "error" && (
            <div className="text-center space-y-6">
              <h4 className="text-slate-700 font-medium text-sm px-6">
                Verify your printer's{" "}
                {connectionType === "usb" ? "USB" : "Wi-Fi"} connection for a
                seamless setup process.
              </h4>

              {/* Graphic */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex justify-center max-w-sm mx-auto">
                {connectionType === "usb" ? (
                  <svg
                    className="w-48 h-24 opacity-60"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="20"
                      y="45"
                      width="40"
                      height="26"
                      rx="3"
                      fill="#ef4444"
                      fillOpacity="0.2"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                    <rect x="24" y="49" width="32" height="18" fill="#1e293b" />
                    <path d="M12 71H68L62 76H18L12 71Z" fill="#64748b" />
                    <rect
                      x="130"
                      y="40"
                      width="50"
                      height="32"
                      rx="4"
                      fill="#cbd5e1"
                    />
                    <rect
                      x="138"
                      y="32"
                      width="34"
                      height="8"
                      rx="2"
                      fill="#94a3b8"
                    />
                    <rect x="140" y="72" width="30" height="8" fill="#475569" />
                    <path
                      d="M68 71C90 71 90 56 130 56"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    />
                    <circle cx="68" cy="71" r="2.5" fill="#ef4444" />
                    <circle cx="130" cy="56" r="2.5" fill="#ef4444" />
                  </svg>
                ) : (
                  <svg
                    className="w-48 h-24 opacity-60"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="25"
                      y="55"
                      width="40"
                      height="15"
                      rx="3"
                      fill="#ef4444"
                      fillOpacity="0.2"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                    <line
                      x1="45"
                      y1="55"
                      x2="45"
                      y2="30"
                      stroke="#ef4444"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="33" cy="62" r="2" fill="#ef4444" />
                    <circle cx="41" cy="62" r="2" fill="#ef4444" />
                    <circle cx="49" cy="62" r="2" fill="#ef4444" />
                    <rect
                      x="130"
                      y="40"
                      width="50"
                      height="32"
                      rx="4"
                      fill="#cbd5e1"
                    />
                    <rect
                      x="138"
                      y="32"
                      width="34"
                      height="8"
                      rx="2"
                      fill="#94a3b8"
                    />
                    <rect x="140" y="72" width="30" height="8" fill="#475569" />
                    <path
                      d="M70 42C75 47 75 53 70 58"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M80 37C88 45 88 55 80 63"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>

              <h5 className="text-xl font-bold text-slate-800 text-center">
                {connectionType === "usb"
                  ? "USB connection failed."
                  : "Wi-Fi connection failed."}
              </h5>

              {/* Actions checklist */}
              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 max-w-sm mx-auto text-left text-xs bg-slate-50 font-bold overflow-hidden shadow-sm">
                <div className="p-4 flex items-center justify-between">
                  <span className="text-slate-700">
                    Check {connectionType === "usb" ? "USB cable" : "Wifi"} on
                    both ends.
                  </span>
                  <button
                    onClick={() => startVerifyingSequence(connectionType)}
                    className={`${textBrandHover} font-extrabold cursor-pointer`}
                  >
                    Retry
                  </button>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-slate-700">
                    Check {connectionType === "usb" ? "USB port" : "Wifi"}{" "}
                    drivers.
                  </span>
                  <button
                    onClick={startDiagnosing}
                    className={`${textBrandHover} font-extrabold cursor-pointer`}
                  >
                    Check Drivers
                  </button>
                </div>
              </div>

              {/* Bottom Action buttons */}
              <div className="flex gap-4 justify-center max-w-sm mx-auto pt-2">
                <button
                  onClick={startDiagnosing}
                  className={`px-6 py-2.5 ${btnBg} active:scale-95 text-white font-bold text-xs rounded-lg shadow-md cursor-pointer`}
                >
                  Fix Issue
                </button>
                <button
                  onClick={triggerLiveChat}
                  className={`px-6 py-2.5 ${btnBg} active:scale-95 text-white font-bold text-xs rounded-lg shadow-md cursor-pointer`}
                >
                  Need Assistance?
                </button>
              </div>
            </div>
          )}

          {/* Diagnostic Loading Step */}
          {wizardStep === "diagnosing" && (
            <div className="text-left space-y-8 px-6 py-4">
              <h4
                className={`text-3xl font-extrabold ${textBrand} tracking-tight`}
              >
                Detecting problems
              </h4>

              {/* Animated Progress Bar */}
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden relative border border-slate-200">
                <div
                  className={`${btnBg} h-full rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${diagnosticProgress}%` }}
                />
              </div>

              <div className="text-slate-500 font-medium text-sm">
                {diagnosticText}
              </div>
            </div>
          )}

          {/* Final Registry Error Step */}
          {wizardStep === "registry-error" && (
            <div className="text-center space-y-6 px-6 py-8 flex flex-col items-center justify-center">
              {/* Error Icon */}
              <div className="flex justify-center">
                <svg
                  className="w-24 h-24 text-slate-500"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Printer outer shape */}
                  <rect
                    x="20"
                    y="38"
                    width="60"
                    height="42"
                    rx="4"
                    stroke="#475569"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 38V22H68V38"
                    stroke="#475569"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="30"
                    y="58"
                    width="40"
                    height="30"
                    fill="#ffffff"
                    stroke="#475569"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Paper sheets details */}
                  <line
                    x1="38"
                    y1="68"
                    x2="62"
                    y2="68"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                  />
                  <line
                    x1="38"
                    y1="76"
                    x2="54"
                    y2="76"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                  />

                  <circle
                    cx="75"
                    cy="75"
                    r="16"
                    fill="#ef4444"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                  />
                  <line
                    x1="69"
                    y1="69"
                    x2="81"
                    y2="81"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="81"
                    y1="69"
                    x2="69"
                    y2="81"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Description */}
              <p className="text-slate-800 font-medium text-lg leading-relaxed max-w-md">
                Printer Driver installation has been failed due to fatal error
                "C0000022" preventing product driver installation.
              </p>

              {/* Action Link: Please Chat with Our Support Team */}
              <div className="pt-2">
                <button
                  onClick={triggerLiveChat}
                  className="text-lg font-bold text-slate-900 hover:underline cursor-pointer block mx-auto focus:outline-none"
                >
                  Please Chat with Our Support Team
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
