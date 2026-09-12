import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToGuides = () => {
    if (location.pathname === "/") {
      // Already on Home
      document.getElementById("guides")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Go to Home first
      navigate("/#guides");

      // Wait for Home to render, then scroll
      setTimeout(() => {
        document.getElementById("guides")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* =========================
              ABOUT / DESCRIPTION
          ========================== */}
          <div>
            <p className="max-w-md text-[15px] leading-7 text-slate-600">
              An educational resource featuring easy-to-understand
              information about everyday printer use, common printing
              problems, setup, connections, paper handling, ink and
              toner, and useful printer guides.
            </p>

            <div className="mt-6 flex max-w-md items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
              <ShieldCheck
                size={18}
                className="shrink-0 text-blue-600"
              />

              <span className="text-sm text-slate-500">
                Free Educational Information • Easy-to-Follow Guides
              </span>
            </div>
          </div>

          {/* =========================
              EDUCATIONAL TOPICS
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Educational Topics
            </h3>

            <ul className="mt-5 space-y-3 text-[15px]">

              <li>
                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="text-left text-slate-600 transition-colors hover:text-blue-600"
                >
                  Printer Setup & Installation
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="text-left text-slate-600 transition-colors hover:text-blue-600"
                >
                  Wireless Printer Connections
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="text-left text-slate-600 transition-colors hover:text-blue-600"
                >
                  Printing & Print Jobs
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="text-left text-slate-600 transition-colors hover:text-blue-600"
                >
                  Paper & Feeding Problems
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="text-left text-slate-600 transition-colors hover:text-blue-600"
                >
                  Ink, Toner & Print Quality
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="text-left text-slate-600 transition-colors hover:text-blue-600"
                >
                  Printer Warnings & Errors
                </button>
              </li>

            </ul>
          </div>

          {/* =========================
              WEBSITE LINKS
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Website Links
            </h3>

            <ul className="mt-5 space-y-3 text-[15px]">

              <li>
                <Link
                  to="/"
                  className="text-slate-600 transition-colors hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-600 transition-colors hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 transition-colors hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-600 transition-colors hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/refund-policy"
                  className="text-slate-600 transition-colors hover:text-blue-600"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-slate-600 transition-colors hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Contact Information
            </h3>

            <div className="mt-5 flex gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-slate-500"
              />

              <p className="text-[14px] leading-6 text-slate-600">
                D-2/59, Eros Apartment,
                <br />
                Block G, Nehru Place,
                <br />
                New Delhi, Delhi 110019,
                <br />
                India
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              <Mail
                size={18}
                className="mt-1 shrink-0 text-slate-500"
              />

              <a
                href="mailto:admin@12printer.online"
                className="break-all text-[14px] leading-6 text-slate-600 transition-colors hover:text-blue-600"
              >
                admin@12printer.online
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-slate-200" />

        {/* =========================
            INDEPENDENT RESOURCE
        ========================== */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-start gap-3">

            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Independent Educational Resource
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-slate-500">
                This website provides general educational and
                informational content about printers and everyday
                printing topics. The website is independently operated
                and is not affiliated with, sponsored by, or officially
                associated with any printer manufacturer or brand.
                Brand names and product references, where mentioned,
                are used only for identification and educational
                reference purposes. Information may not apply to every
                printer model or individual situation, so readers should
                refer to the documentation provided for their specific
                device when appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}
        <div className="mt-8 flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">

          <p className="text-slate-500">
            © {new Date().getFullYear()} 12printer.online. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">

            <Link
              to="/privacy-policy"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              Privacy
            </Link>

            <Link
              to="/refund-policy"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              Refund Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              Terms of Use
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;