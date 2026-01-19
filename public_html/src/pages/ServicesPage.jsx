import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function ServicesPage() {
  const services = [
    {
      title: 'Tile & Stone',
      description: 'Expert tile and stone installation for kitchens, bathrooms, floors, and backsplashes. We help your family choose durable, beautiful materials.',
      path: '/services/tile-stone',
      image: 'https://images.unsplash.com/photo-1432303469531-1f834b81f1aa',
      features: ['Custom tile design', 'Natural stone installation', 'Backsplash specialists', 'Floor tiling']
    },
    {
      title: 'Drywall',
      description: 'Professional drywall services to keep your home looking its best. From repairs to new installations, we ensure a clean, smooth finish.',
      path: '/services/drywall',
      image: 'https://images.unsplash.com/photo-1629195352955-850830e4d6c9',
      features: ['New installation', 'Repair & patching', 'Texture finishing', 'Water damage repair']
    },
    {
      title: 'Painting',
      description: 'Transform your living spaces with our premium painting services. We use high-quality, safe paints perfect for family homes.',
      path: '/services/painting',
      image: 'https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe',
      features: ['Interior painting', 'Exterior painting', 'Cabinet refinishing', 'Color consultation']
    },
    {
      title: 'Cabinets',
      description: 'Custom cabinetry solutions that improve your home\'s functionality and style. Beautiful storage designed for your family\'s needs.',
      path: '/services/cabinets',
      image: 'https://images.unsplash.com/photo-1643949915134-73a4c880f7c7',
      features: ['Custom cabinets', 'Cabinet refacing', 'Hardware installation', 'Design consultation']
    },
    {
      title: 'Bathrooms',
      description: 'Create a relaxing retreat for your family. We handle complete bathroom renovations with care and attention to detail.',
      path: '/services/bathrooms',
      image: 'https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc',
      features: ['Full renovation', 'Shower & tub installation', 'Vanity installation', 'Tile work']
    },
    {
      title: 'Full Remodeling',
      description: 'Comprehensive home transformations. We manage the entire project so your family can enjoy the results without the stress.',
      path: '/services/full-remodeling',
      image: 'https://images.unsplash.com/photo-1562188208-a02e9abcda84',
      features: ['Whole home renovation', 'Room additions', 'Open floor plans', 'Project management']
    }
  ];

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <>
      <Helmet>
        <title>Family-Trusted Remodeling Services | All American Restorations</title>
        <meta name="description" content="Professional family-owned remodeling services in Tampa Bay: Tile & Stone, Drywall, Painting, Cabinets, Bathrooms, Full Home Remodeling. Quality craftsmanship you can trust." />
      </Helmet>

      {/* Hero Section */}
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
            <div className="inline-block bg-[#C0AE9A]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#C0AE9A]/30">
              <span className="font-semibold text-[#C0AE9A] uppercase tracking-wider text-sm">Trusted by Families</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Expert remodeling solutions delivered with the care your family deserves
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.path} className="group block h-full">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#4F1929] transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
                      <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white font-playfair">
                        {service.title}
                      </h2>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-[#4F1929] mb-3">Key Services:</div>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 bg-[#4F1929] rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[#4F1929] font-semibold group-hover:gap-4 transition-all">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Notice */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <h3 className="text-2xl font-bold font-playfair mb-4 text-[#0D0D0D]">Available Throughout the Tampa Bay Region</h3>
           <p className="text-gray-600 max-w-3xl mx-auto">
             Our family team proudly serves Tampa, Clearwater, St. Petersburg, Brandon, Wesley Chapel, Land O' Lakes, and over 20 surrounding communities. We bring our services to your doorstep.
           </p>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold mb-6 font-playfair">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8 text-gray-200">
              We offer custom solutions for all your family's remodeling needs. Contact us to discuss your specific project.
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

export default ServicesPage;