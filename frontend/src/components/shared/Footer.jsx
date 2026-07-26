import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#6A38C2]">Portal</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Find your dream job with top companies. Search, apply, and grow
              your career.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#6A38C2] cursor-pointer"><Link to='/'>Home</Link></li>
              <li className="hover:text-[#6A38C2] cursor-pointer"><Link to='/jobs'>Jobs</Link></li>
              <li className="hover:text-[#6A38C2] cursor-pointer"><Link to='/browse'>Browse</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-gray-600">📧 support@jobportal.com</p>
            <p className="text-gray-600 mt-2">📞 +91 98765 43210</p>
            <p className="text-gray-600 mt-2">📍 Hyderabad, India</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 JobPortal. All Rights Reserved.</p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <span className="cursor-pointer hover:text-[#6A38C2]">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-[#6A38C2]">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;