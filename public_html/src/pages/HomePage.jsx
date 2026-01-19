import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle, MapPin } from 'lucide-react'; // Removi Star e Quote
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';
import WhyFamiliesTrustUs from '@/components/WhyFamiliesTrustUs';

function HomePage() {
  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  // Mantive os serviços como estavam, pois usam boas imagens de representação.
  // Se quiseres mudar estas fotos depois, diz-me.
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

  // AQUI: Configuração para as tuas fotos reais
  const recentProjects = [
    {
      image: '/images/projects/banheiro-master.jpg', // Certifica-te que a foto existe nesta pasta
      title: 'Master Bathroom Remodel',
      location: 'Land O Lakes, FL'
    },
    {
      image: '/images/projects/piso-sala.jpg',
      title: 'Porcelain Tile Installation',
      location: 'Wesley Chapel, FL'
    },
    {
      image: '/images/projects/backsplash-cozinha.jpg',
      title: 'Kitchen Backsplash',
      location: 'Lutz, FL'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>All American Restorations | Family-Owned Construction in Land O Lakes, FL</title>
        <meta name="description" content="Trusted family-owned construction company in Land O Lakes, FL. Specializing in tile, drywall, painting, and remodeling. Quality craftsmanship you can rely on." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e")' }}
        />
        <div className="relative z-20 text-center container px-4 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Bringing Quality & Trust<br />Back to Your Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            A family-owned business serving Land O Lakes and surrounding areas.
            Specializing in Tile, Drywall, Painting, and Remodeling.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#B22234] hover:bg-[#8b1b29] text-white text-lg px-8 py-6" onClick={handleCallNow}>
              <Phone className="mr-2 h-5 w-5" />
              Call for a Free Quote
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <WhyFamiliesTrustUs />

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3C3B6E]">Our Expert Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From small repairs to major renovations, we treat every project with the care and attention it deserves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#3C3B6E]">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.path} className="inline-flex items-center text-[#B22234] font-semibold hover:text-[#8b1b29]">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section - Updated to use real projects */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3C3B6E]">Our Recent Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of the projects we've completed for families in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <div className="flex items-center text-gray-200">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-[#3C3B6E] text-[#3C3B6E] hover:bg-[#3C3B6E] hover:text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3C3B6E] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let's make your home beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#B22234] hover:bg-[#8b1b29] text-white text-lg px-8 py-6" onClick={handleCallNow}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {PHONE_NUMBER}
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
