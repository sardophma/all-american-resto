import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Heart, Shield, Star, Users, HeartHandshake as Handshake, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function AboutPage() {
  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const values = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'We believe in honest work and transparent pricing. No hidden fees, just trustworthy service for your family.'
    },
    {
      icon: Heart,
      title: 'Family Care',
      description: 'We treat your home with the same love, respect, and attention to detail as we do our own.'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'Building long-lasting relationships with families across Tampa Bay is the heart of our business.'
    },
    {
      icon: Star,
      title: 'Quality Craftsmanship',
      description: 'We take pride in our work, delivering superior results that your family will enjoy for years to come.'
    }
  ];

  const experience = [
    {
      category: 'Residential Remodeling',
      description: 'Complete home transformations and room renovations'
    },
    {
      category: 'Kitchen & Bathroom',
      description: 'Specialized expertise in kitchen and bathroom remodels'
    },
    {
      category: 'Custom Finishes',
      description: 'Tile, stone, cabinetry, and painting services'
    },
    {
      category: 'Project Management',
      description: 'Seamless coordination from design to completion'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - All American Restorations | Family-Owned Remodeling</title>
        <meta name="description" content="Learn about All American Restorations Family LLC - A family-owned business serving Tampa Bay families for 10+ years with integrity, care, and quality craftsmanship." />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">About Our Family Business</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              A Legacy of Excellence in Home Remodeling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#0D0D0D] mb-6 font-playfair">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  All American Restorations Family LLC was founded over a decade ago with a simple but powerful mission: to bring quality craftsmanship and honest, family-oriented service to homeowners across the Tampa Bay area.
                </p>
                <p>
                  As a multi-generational family-owned business, we understand that your home is more than just walls and a roof—it's the backdrop for your family's most cherished memories. That's why we approach every project with a personal touch, caring for your home as if it were our own.
                </p>
                <p>
                  We are not just contractors; we are your neighbors. We've built our reputation on word-of-mouth referrals from satisfied families who appreciate our transparency, reliability, and dedication to excellence.
                </p>
                <p>
                  When you work with us, you're not just a client number. You become part of our extended family. We listen to your needs, respect your budget, and work tirelessly to bring your vision to life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://horizons-cdn.hostinger.com/463d7843-c073-4f31-9a12-bfa831e0fbff/9f0fb1a8f1fae5b9f818c38b293cc75e.jpg"
                  alt="All American Restorations team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4F1929]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#C0AE9A] text-[#0D0D0D] p-8 rounded-xl shadow-xl max-w-xs">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-lg font-semibold">Years Serving Families</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">Our Family Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in every home we enter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#4F1929] rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4 font-playfair">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#4F1929] rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 font-playfair">Why Families Choose Us</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Handshake className="w-8 h-8 text-[#C0AE9A] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#C0AE9A]">Personal Relationships</h3>
                      <p className="text-gray-200">We don't just complete projects; we build lasting relationships. Many of our clients are repeat customers who trust us with all their home needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Home className="w-8 h-8 text-[#C0AE9A] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#C0AE9A]">Respect for Your Home</h3>
                      <p className="text-gray-200">We maintain clean, safe work environments and respect your family's space and schedule throughout the renovation process.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-[#C0AE9A] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#C0AE9A]">Direct Communication</h3>
                      <p className="text-gray-200">You'll always have direct access to our team. We believe in clear, honest communication at every step of your project.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block relative">
                 <div className="absolute inset-0 bg-[#C0AE9A] rounded-2xl transform rotate-3 opacity-20"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1562188208-a02e9abcda84" 
                   alt="Beautiful family home" 
                   className="relative rounded-2xl shadow-xl z-10"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive remodeling services backed by years of experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-3 h-3 bg-[#4F1929] rounded-full mt-2" />
                <div>
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-2 font-playfair">{item.category}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Let Our Family Help Yours</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Experience the difference of working with a family-owned team that truly cares. Call us today.
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
                  Get Free Estimate
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;