import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const categories = ['All', 'Tile & Stone', 'Drywall', 'Painting', 'Cabinets', 'Bathrooms', 'Full Remodeling'];

  const galleryItems = [
    { category: 'Tile & Stone', url: 'https://images.unsplash.com/photo-1432303469531-1f834b81f1aa', title: 'Kitchen Backsplash', location: 'Tampa, FL' },
    { category: 'Tile & Stone', url: 'https://images.unsplash.com/photo-1650894622580-04d8c978f8c8', title: 'Bathroom Floor Tile', location: 'Clearwater, FL' },
    { category: 'Tile & Stone', url: 'https://images.unsplash.com/photo-1694208688785-7f9ae0a19ff4', title: 'Natural Stone Wall', location: 'St. Petersburg, FL' },
    { category: 'Bathrooms', url: 'https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc', title: 'Luxury Master Bath', location: 'Tampa, FL' },
    { category: 'Bathrooms', url: 'https://images.unsplash.com/photo-1618836003104-ec6d67239040', title: 'Modern Shower', location: 'Brandon, FL' },
    { category: 'Bathrooms', url: 'https://images.unsplash.com/photo-1596179141030-cc1010641903', title: 'Contemporary Vanity', location: 'Wesley Chapel, FL' },
    { category: 'Cabinets', url: 'https://images.unsplash.com/photo-1643949915134-73a4c880f7c7', title: 'Custom Kitchen Cabinets', location: 'Tampa, FL' },
    { category: 'Cabinets', url: 'https://images.unsplash.com/photo-1669211620495-00ad7993169a', title: 'Modern Cabinet Installation', location: 'Clearwater, FL' },
    { category: 'Drywall', url: 'https://images.unsplash.com/photo-1629195352955-850830e4d6c9', title: 'Drywall Installation', location: 'St. Petersburg, FL' },
    { category: 'Painting', url: 'https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe', title: 'Interior Painting', location: 'Brandon, FL' },
    { category: 'Full Remodeling', url: 'https://images.unsplash.com/photo-1562188208-a02e9abcda84', title: 'Complete Home Renovation', location: 'Tampa, FL' },
    { category: 'Full Remodeling', url: 'https://images.unsplash.com/photo-1532119663789-58252470755c', title: 'Modern Living Space', location: 'Wesley Chapel, FL' }
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Project Gallery - All American Restorations | Tampa Bay Remodeling</title>
        <meta name="description" content="Browse our portfolio of completed remodeling projects in Tampa Bay. See our quality work in tile, drywall, painting, cabinets, bathrooms, and full home renovations." />
      </Helmet>

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1562188208-a02e9abcda84)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Project Gallery</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Explore our portfolio of beautiful remodeling projects across Tampa Bay
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#4F1929] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.category}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#4F1929] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4F1929]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2 font-playfair">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="text-white text-center mt-6">
                <h3 className="text-2xl font-bold mb-2 font-playfair">{selectedImage.title}</h3>
                <p className="text-lg text-gray-300">{selectedImage.location}</p>
                <p className="text-sm text-gray-400 mt-2">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#4F1929] to-[#4C1E32] rounded-2xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 font-playfair">See What We Can Do For Your Home</h2>
            <p className="text-xl mb-8 text-gray-200">
              Ready to start your remodeling project? Contact us today for a free consultation and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleCallNow}
                className="bg-white hover:bg-gray-100 text-[#4F1929] px-12 py-6 text-xl rounded-xl font-bold shadow-2xl transition-all hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call {PHONE_NUMBER}
              </Button>
              <Link to="/contact">
                <Button className="bg-[#C0AE9A] hover:bg-[#C0AE9A]/90 text-[#0D0D0D] px-12 py-6 text-xl rounded-xl font-bold shadow-2xl transition-all hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;