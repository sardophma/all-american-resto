import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_NUMBER } from '@/constants/colors';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3C3B6E] text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-[#3C3B6E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">ALL AMERICAN</span>
                <span className="text-xs font-bold text-[#B22234] tracking-wider">RESTORATIONS</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              Quality craftsmanship and family values. Serving Land O Lakes, Tampa, and surrounding areas with pride.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/allamericanres22?igsh=N2JodjR5bjNrM2Uy&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#B22234] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#B22234] inline-block pb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#B22234] inline-block pb-1">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/tile-stone" className="text-gray-300 hover:text-white transition-colors">Tile & Stone</Link></li>
              <li><Link to="/services/bathrooms" className="text-gray-300 hover:text-white transition-colors">Bathroom Remodeling</Link></li>
              <li><Link to="/services/cabinets" className="text-gray-300 hover:text-white transition-colors">Cabinet Installation</Link></li>
              <li><Link to="/services/drywall" className="text-gray-300 hover:text-white transition-colors">Drywall Repair</Link></li>
              <li><Link to="/services/painting" className="text-gray-300 hover:text-white transition-colors">Painting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#B22234] inline-block pb-1">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#B22234] mt-1" />
                <span className="text-gray-300">Land O Lakes, FL<br/>Serving Tampa Bay Area</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#B22234]" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-gray-300 hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#B22234]" />
                <a href="mailto:Allamericanres22@gmail.com" className="text-gray-300 hover:text-white transition-colors">Allamericanres22@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} All American Restorations Family LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
