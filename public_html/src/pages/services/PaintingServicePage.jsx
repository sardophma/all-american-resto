import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function PaintingServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const benefits = [
    'Interior painting expertise',
    'Exterior painting services',
    'Cabinet refinishing',
    'Professional color consultation',
    'Premium quality paints',
    'Clean, efficient work'
  ];

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your vision, provide color recommendations, and create a detailed plan.'
    },
    {
      step: 2,
      title: 'Preparation',
      description: 'Thorough surface prep, repairs, priming, and protection of your furniture and floors.'
    },
    {
      step: 3,
      title: 'Painting',
      description: 'Expert application with premium paints for a flawless, long-lasting finish.'
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'We review every detail, touch up as needed, and ensure your complete satisfaction.'
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe', title: 'Interior Painting', location: 'St. Petersburg, FL' },
    { url: 'https://images.unsplash.com/photo-1629195352955-850830e4d6c9', title: 'Room Transformation', location: 'Wesley Chapel, FL' }
  ];

  const faqs = [
    {
      question: 'How long does a typical painting project take?',
      answer: 'Most interior rooms take 2-3 days including prep and drying time. Whole home projects typically take 1-2 weeks. Exterior painting depends on home size but usually takes 3-7 days.'
    },
    {
      question: 'Do you help with color selection?',
      answer: 'Absolutely! We offer professional color consultation to help you choose the perfect shades that complement your space and personal style.'
    },
    {
      question: 'What type of paint do you use?',
      answer: 'We use premium quality paints from trusted brands like Sherwin-Williams and Benjamin Moore. We select the appropriate finish (flat, eggshell, satin, semi-gloss) based on each room\'s needs.'
    },
    {
      question: 'Do you move furniture?',
      answer: 'Yes, we carefully move and protect furniture as needed. We also use drop cloths and protective coverings to safeguard your floors and belongings.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Painting Services in Tampa Bay | Family-Owned All American Restorations</title>
        <meta name="description" content="Expert interior and exterior painting in Tampa, Clearwater, St. Petersburg, Brandon, and 20+ communities. Premium finishes and color consultation. Free estimates!" />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe"
            alt="Professional painting"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Professional Painting Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Transform your space with premium quality painting and expert color consultation
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#0D0D0D] mb-6 font-playfair">Premium Painting Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                A fresh coat of paint can completely transform your home. Our professional painting services combine expert craftsmanship with premium materials to deliver stunning, long-lasting results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're updating a single room or painting your entire home, our family team brings meticulous attention to detail and a commitment to excellence to every project. Serving the entire Tampa Bay area.
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
                src="https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe"
                alt="Beautiful painted interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

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
              A proven approach to delivering beautiful, lasting paint finishes
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
              See the transformative power of professional painting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#0D0D0D] mb-8 text-center font-playfair">Why Choose Us for Painting</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Quality painting requires more than just applying paint to walls. It demands proper preparation, skilled application, and premium materials. With over 10 years of experience, we've mastered every aspect of professional painting.
                </p>
                <p>
                  We use only premium paints from industry-leading brands, ensuring vibrant colors and durable finishes that look beautiful for years. Our team pays attention to every detail, from crisp lines to smooth surfaces.
                </p>
                <p>
                  Serving homeowners throughout Tampa, Clearwater, St. Petersburg, Brandon, Wesley Chapel, and Land O' Lakes, we're committed to transforming your space with colors you'll love and quality that lasts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

      <section className="py-16 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready for a Fresh New Look?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Contact us today for expert painting services and a free color consultation
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

export default PaintingServicePage;