import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <p className="mt-4 max-w-md leading-7 text-gray-600">
              Simple and useful information to help you understand common
              printer problems and find helpful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} . All rights reserved.
          </p>

          <p>
            Printer Learning Guides
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;