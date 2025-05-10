import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Beyondgreen</h2>
            <div className="space-y-3 text-gray-400">
              <p>7/146 Street No 9, Block 3, DMCHS,<br />Karachi Pakistan.</p>
              <p>UAN No: 0300 0341934</p>
              <p>Landline: 021-34541934</p>
              <p>Email: info@beyondgreensolar.com</p>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Offices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[#019D4D] font-medium mb-2">Head Office</h3>
                <p className="text-gray-400">7/146 Street No 9, Block 3, DMCHS, Near<br />Gaffar Kabab House, Karachi.</p>
              </div>
              <div>
                <h3 className="text-[#019D4D] font-medium mb-2">Corporate Office Lahore</h3>
                <p className="text-gray-400">307-J1, Johar town, Lahore</p>
              </div>
              <div>
                <h3 className="text-[#019D4D] font-medium mb-2">Corporate Office Islamabad</h3>
                <p className="text-gray-400">Bahrain Plaza 3rd Floor Civic Centre Phase 4<br />Bahria Town, Islamabad</p>
              </div>
            </div>
          </div>

          {/* Call Now */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Call Now</h2>
            <button className="w-full border cursor-pointer border-[#019D4D] text-[#019D4D] py-3 px-6 hover:bg-[#019D4D] hover:text-white transition-colors duration-300">
              Click Here To Call Now!
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Beyondgreen Solar Solutions All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;