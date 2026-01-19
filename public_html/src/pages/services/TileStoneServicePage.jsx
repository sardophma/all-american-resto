import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function TileStoneServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const benefits = [
    'Custom tile design and layout',
    'Premium natural stone installation',
    'Expert backsplash creation',
    'Floor tiling specialists',
    'Bathroom and kitchen expertise',
    'Professional grouting and sealing'
  ];

  const process = [
    {
      step: 1,
      title: 'Consultation & Design',
      description: 'We meet with you to understand your vision, take measurements, and help you select the perfect tiles and stones.'
    },
    {
      step: 2,
      title: 'Surface Preparation',
      description: 'Proper preparation ensures longevity. We prepare surfaces to ensure perfect adhesion and a flawless finish.'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our skilled craftsmen install your tiles with precision, ensuring perfect alignment and spacing.'
    },
    {
      step: 4,
      title: 'Grouting & Finishing',
      description: 'We complete the project with expert grouting, sealing, and final touches for a stunning result.'
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1432303469531-1f834b81f1aa', title: 'Kitchen Backsplash', location: 'Tampa, FL' },
    { url: 'https://images.unsplash.com/photo-1650894622580-04d8c978f8c8', title: 'Bathroom Floor Tile', location: 'Clearwater, FL' },
    { url: 'https://images.unsplash.com/photo-1694208688785-7f9ae0a19ff4', title: 'Natural Stone Installation', location: 'St. Petersburg, FL' }
  ];

  const faqs = [
    {
      question: 'How long does tile installation take?',
      answer: 'The timeline depends on the project size and complexity. A typical bathroom can take 3-5 days, while a kitchen backsplash might take 1-2 days. We provide detailed timelines during consultation.'
    },
    {
      question: 'What types of tile do you work with?',
      answer: 'We work with all types including ceramic, porcelain, natural stone (marble, granite, travertine), glass, and specialty tiles. We help you choose the best option for your space and budget.'
    },
    {
      question: 'Do you offer tile design services?',
      answer: 'Yes! We provide design consultation to help you select patterns, colors, and layouts that complement your home\'s aesthetic and meet your functional needs.'
    },
    {
      question: 'How do I maintain my new tile installation?',
      answer: 'We provide complete care instructions. Generally, regular cleaning with appropriate products and periodic resealing (for natural stone) will keep your tiles looking beautiful for years.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tile & Stone Remodeling in Tampa Bay | Family-Owned All American Restorations</title>
        <meta name="description" content="Expert tile and stone installation by a trusted family business. Serving Tampa, Clearwater, St. Petersburg, Brandon, and surrounding areas. Free estimates!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1432303469531-1f834b81f1aa"
            alt="Tile installation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-[#C0AE9A]/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-[#C0AE9A]/30">
              <span className="font-semibold text-[#C0AE9A] uppercase tracking-wider text-xs">Family-Owned Quality</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Tile & Stone Remodeling</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Transform your space with expert installation from our family to yours
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleCallNow}
                className="bg-white hover:bg-gray-100 text-[#4F1929] px-12 py-4 text-lg rounded-xl font-bold shadow-2xl transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {PHONE_NUMBER}
              </Button>
              <Link to="/contact">
                <Button className="bg-[#C0AE9A] hover:bg-[#C0AE9A]/90 text-[#0D0D0D] px-12 py-4 text-lg rounded-xl font-bold shadow-2xl transition-all hover:scale-105">
                  Get Free Estimate
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#0D0D0D] mb-6 font-playfair">Professional Tile & Stone Installation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Elevate your home with beautiful, durable tile and stone work. Our expert craftsmen bring years of family tradition and experience to every project, ensuring flawless installation that stands the test of time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're updating a kitchen backsplash, renovating a bathroom, or installing new flooring, we deliver exceptional results. We proudly serve families in Tampa, Clearwater, St. Petersburg, Brandon, Wesley Chapel, and throughout the region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F1929] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1432303469531-1f834b81f1aa"
                alt="Beautiful tile installation"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to delivering exceptional tile and stone installations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-[#4F1929] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 font-playfair">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-3 font-playfair">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-[#C0AE9A]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
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
              See the quality and craftsmanship we bring to every tile installation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
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
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4F1929]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2 font-playfair">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#0D0D0D] mb-8 text-center font-playfair">Why Choose Us for Tile & Stone</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  With over 10 years of experience serving Tampa Bay, we've perfected the art of tile and stone installation. Our family team combines technical expertise with creative vision to deliver results that are both beautiful and built to last.
                </p>
                <p>
                  We work with premium materials and use industry-leading techniques to ensure every tile is perfectly placed. From intricate mosaic patterns to large-format installations, we handle projects of all sizes with the same attention to detail.
                </p>
                <p>
                  Serving homeowners in Tampa, Clearwater, St. Petersburg, Brandon, Wesley Chapel, and Land O' Lakes, we're your local experts. We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#0D0D0D] mb-12 text-center font-playfair">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-lg text-[#0D0D0D]">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4F1929]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4F1929]" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Contact us today for a free consultation and estimate on your tile and stone project
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

export default TileStoneServicePage;
