import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle, Star, Quote, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';
import WhyFamiliesTrustUs from '@/components/WhyFamiliesTrustUs';

function HomePage() {
  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const services = [
    {
      title: 'Tile & Stone',
      description: 'Expert tile and stone installation for kitchens, bathrooms, and more',
      path: '/services/tile-stone',
      image: 'https://images.unsplash.com/photo-1432303469531-1f834b81f1aa'
    },
    {
      title: 'Drywall',
      description: 'Professional drywall installation, repair, and finishing',
      path: '/services/drywall',
      image: 'https://images.unsplash.com/photo-1629195352955-850830e4d6c9'
    },
    {
      title: 'Painting',
      description: 'Interior and exterior painting with premium quality finishes',
      path: '/services/painting',
      image: 'https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe'
    },
    {
      title: 'Cabinets',
      description: 'Custom cabinet installation and refinishing services',
      path: '/services/cabinets',
      image: 'https://images.unsplash.com/photo-1643949915134-73a4c880f7c7'
    },
    {
      title: 'Bathrooms',
      description: 'Complete bathroom remodeling and renovation',
      path: '/services/bathrooms',
      image: 'https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc'
    },
    {
      title: 'Full Remodeling',
      description: 'Comprehensive home renovation from start to finish',
      path: '/services/full-remodeling',
      image: 'https://images.unsplash.com/photo-1562188208-a02e9abcda84'
    }
  ];

  const testimonials = [
    {
      quote: "All American Restorations treated our home like it was their own. The team was respectful, clean, and the quality of work was outstanding. It felt like having family over to help.",
      author: "The Johnson Family",
      location: "Tampa, FL"
    },
    {
      quote: "We've used them for three different projects now. Their honesty and transparency are why we keep coming back. A true family business you can trust.",
      author: "Sarah & Mike Peterson",
      location: "Wesley Chapel, FL"
    },
    {
      quote: "From the first call to the final walkthrough, everything was handled with such care. They made our kitchen remodel stress-free for our family.",
      author: "Robert Martinez",
      location: "St. Petersburg, FL"
    }
  ];

  const recentProjects = [
    {
      image: 'https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc',
      title: 'Luxury Bathroom Remodel',
      location: 'Tampa, FL'
    },
    {
      image: 'https://images.unsplash.com/photo-1432303469531-1f834b81f1aa',
      title: 'Kitchen Tile Installation',
      location: 'Clearwater, FL'
    },
    {
      image: 'https://images.unsplash.com/photo-1643949915134-73a4c880f7c7',
      title: 'Custom Cabinet Project',
      location: 'St. Petersburg, FL'
    },
    {
      image: 'https://images.unsplash.com/photo-1562188208-a02e9abcda84',
      title: 'Complete Home Renovation',
      location: 'Brandon, FL'
    }
  ];

  return (
    <>
      <Helmet>
        <title>All American Restorations - Family-Owned Remodeling in Tampa Bay</title>
        <meta name="description" content="Expert family-owned home remodeling in Tampa Bay. Trusted by families in Tampa, Clearwater, St. Petersburg, Brandon, and 20+ surrounding communities. Call for a free estimate!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://horizons-cdn.hostinger.com/463d7843-c073-4f31-9a12-bfa831e0fbff/9f0fb1a8f1fae5b9f818c38b293cc75e.jpg"
            alt="Beautiful home renovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4F1929]/95 via-[#4C1E32]/90 to-[#0D0D0D]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block bg-[#C0AE9A]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#C0AE9A]/30"
            >
              <span className="font-semibold text-[#C0AE9A] uppercase tracking-wider text-sm">Family-Owned & Operated</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-playfair leading-tight"
            >
              Transform Your Home with Family Values
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 text-gray-200"
            >
              Trusted by Tampa Bay Families for 10+ Years
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-[#C0AE9A] text-lg md:text-xl mb-12"
            >
              <MapPin className="w-5 h-5" />
              <span>Serving 27+ Tampa Bay Communities</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                onClick={handleCallNow}
                className="bg-[#4F1929] hover:bg-[#4C1E32] text-white px-12 py-6 text-xl rounded-xl font-bold shadow-2xl transition-all hover:scale-105 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now - {PHONE_NUMBER}
              </Button>
              <Link to="/contact">
                <Button className="bg-[#C0AE9A] hover:bg-[#C0AE9A]/90 text-[#0D0D0D] px-12 py-6 text-xl rounded-xl font-bold shadow-2xl transition-all hover:scale-105">
                  Get Free Estimate
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-[#4F1929] mb-2">10+</div>
              <div className="text-gray-600">Years Family-Owned</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-[#4F1929] mb-2">500+</div>
              <div className="text-gray-600">Families Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-[#4F1929] mb-2">27+</div>
              <div className="text-gray-600">Communities Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-[#4F1929] mb-2">5★</div>
              <div className="text-gray-600">Family Trusted</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert remodeling solutions delivered with family care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.path} className="group block">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#4F1929] transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-playfair">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{service.description}</p>
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

      {/* Why Families Trust Us Component */}
      <WhyFamiliesTrustUs />

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">What Families Say About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from families we've had the privilege to serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md relative"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-[#C0AE9A]/20" />
                <div className="flex justify-center mb-6">
                  <div className="flex text-[#C0AE9A]">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 text-center italic mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold text-[#4F1929] font-playfair">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the quality of our work and attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4F1929]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2 font-playfair">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <Button className="bg-[#4F1929] hover:bg-[#4C1E32] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                View Full Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Join the hundreds of happy families who trust us with their homes.
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
                  Request Free Estimate
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;