import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Tile & Stone', path: '/services/tile-stone' },
    { name: 'Drywall', path: '/services/drywall' },
    { name: 'Painting', path: '/services/painting' },
    { name: 'Cabinets', path: '/services/cabinets' },
    { name: 'Bathrooms', path: '/services/bathrooms' },
    { name: 'Full Remodeling', path: '/services/full-remodeling' },
  ];

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="10" y="10" width="35" height="35" fill="#4F1929" transform="rotate(45 27.5 27.5)" />
                <rect x="55" y="10" width="20" height="20" fill="#C0AE9A" transform="rotate(45 65 20)" />
                <rect x="10" y="55" width="20" height="20" fill="#484541" transform="rotate(45 20 65)" />
                <rect x="55" y="55" width="35" height="35" fill="#4F1929" transform="rotate(45 72.5 72.5)" />
                <rect x="35" y="35" width="30" height="30" fill="#C0AE9A" transform="rotate(45 50 50)" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4F1929] font-playfair">All American Restorations</h2>
              <p className="text-xs text-gray-600">Family LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#4F1929] transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#4F1929] hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-[#4F1929] font-semibold hover:bg-gray-50 transition-colors border-t"
                    >
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/gallery" className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium">
              Contact
            </Link>

            <Button
              onClick={handleCallNow}
              className="bg-[#4F1929] hover:bg-[#4C1E32] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#4F1929] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col gap-4 mt-4">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium"
                >
                  About
                </Link>
                
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-1 text-gray-700 hover:text-[#4F1929] transition-colors font-medium"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden"
                      >
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-[#4F1929] transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium"
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4F1929] transition-colors font-medium"
                >
                  Contact
                </Link>

                <Button
                  onClick={handleCallNow}
                  className="bg-[#4F1929] hover:bg-[#4C1E32] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;