import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* =========================
            DESKTOP NAVBAR
        ========================== */}
        <div className="hidden h-20 items-center justify-center md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* =========================
            MOBILE NAVBAR
        ========================== */}
        <div className="flex h-14 items-center justify-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-700 shadow-sm transition hover:border-blue-400 hover:text-blue-600"
          >
            {isMenuOpen ? (
              <X size={14} />
            ) : (
              <Menu size={14} />
            )}

            Menu
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 pb-3 md:hidden">
            
            {/* Menu Heading */}
            <div className="px-2 pb-2 pt-3">
              <p className="text-center text-[9px] font-medium uppercase tracking-wider text-slate-400">
                Site Navigation
              </p>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-md px-3 py-2 text-[12px] font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <ChevronRight
                        size={13}
                        className={
                          isActive
                            ? "text-blue-500"
                            : "text-slate-400"
                        }
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;