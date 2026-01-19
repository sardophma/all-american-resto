import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#B22234] font-bold' : 'text-[#3C3B6E] hover:text-[#B22234]';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-[#3C3B6E] p-2 rounded-lg">
              <Hammer className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#3C3B6E] leading-none">ALL AMERICAN</span>
              <span className="text-sm font-bold text-[#B22234] tracking-wider">RESTORATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${isActive(link.path)} transition-colors duration-200 text-sm uppercase tracking-wide`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              onClick={handleCall}
              className="bg-[#B22234] hover:bg-[#8b1b29] text-white font-bold px-6"
            >
              <Phone className="w-4 h-4 mr-2" />
              {PHONE_NUMBER}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3C3B6E]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-[#3C3B6E] hover:text-[#B22234] py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              onClick={handleCall}
              className="w-full bg-[#B22234] hover:bg-[#8b1b29] text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
