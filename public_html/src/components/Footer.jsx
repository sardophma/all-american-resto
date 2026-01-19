import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, SERVICE_AREAS } from '@/constants/colors';

function Footer() {
  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="10" y="10" width="35" height="35" fill="#4F1929" transform="rotate(45 27.5 27.5)" />
                  <rect x="55" y="10" width="20" height="20" fill="#C0AE9A" transform="rotate(45 65 20)" />
                  <rect x="10" y="55" width="20" height="20" fill="#484541" transform="rotate(45 20 65)" />
                  <rect x="55" y="55" width="35" height="35" fill="#4F1929" transform="rotate(45 72.5 72.5)" />
                  <rect x="35" y="35" width="30" height="30" fill="#C0AE9A" transform="rotate(45 50 50)" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg font-playfair">All American Restorations</p>
                <p className="text-xs text-gray-400">Family LLC</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              A family-owned business delivering excellence in residential remodeling for over 10 years. Trusted by families across Tampa Bay.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-playfair">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/tile-stone" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  Tile & Stone
                </Link>
              </li>
              <li>
                <Link to="/services/drywall" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  Drywall
                </Link>
              </li>
              <li>
                <Link to="/services/painting" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  Painting
                </Link>
              </li>
              <li>
                <Link to="/services/cabinets" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  Cabinets
                </Link>
              </li>
              <li>
                <Link to="/services/bathrooms" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  Bathrooms
                </Link>
              </li>
              <li>
                <Link to="/services/full-remodeling" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  Full Remodeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-playfair">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C0AE9A] flex-shrink-0 mt-1" />
                <span className="text-gray-400">{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C0AE9A] flex-shrink-0 mt-1" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C0AE9A] flex-shrink-0 mt-1" />
                <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <button
              onClick={handleCallNow}
              className="mt-6 bg-[#4F1929] hover:bg-[#4C1E32] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 w-full"
            >
              Call Now
            </button>
          </div>

          {/* Service Area Intro */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-playfair">Service Area</h3>
            <p className="text-gray-400 mb-4">
              We proudly serve the entire Tampa Bay area and surrounding communities, bringing quality family values to every home we touch.
            </p>
          </div>
        </div>

        {/* Expanded Service Areas Grid */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <h4 className="font-bold text-md mb-4 font-playfair text-[#C0AE9A]">Communities We Serve</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {SERVICE_AREAS.map((area, index) => (
              <span key={index} className="text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-default">
                • {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 All American Restorations Family LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#C0AE9A] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "All American Restorations Family LLC",
          "image": "https://horizons-cdn.hostinger.com/463d7843-c073-4f31-9a12-bfa831e0fbff/9f0fb1a8f1fae5b9f818c38b293cc75e.jpg",
          "description": "Professional family-owned residential remodeling services in Tampa Bay area",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Land O' Lakes",
            "addressRegion": "FL",
            "postalCode": "",
            "addressCountry": "US"
          },
          "telephone": PHONE_NUMBER,
          "email": EMAIL,
          "areaServed": SERVICE_AREAS,
          "priceRange": "$$"
        })}
      </script>
    </footer>
  );
}

export default Footer;