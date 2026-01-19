import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function DrywallServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const benefits = [
    'Expert drywall installation',
    'Repair and patching services',
    'Smooth texture finishing',
    'Water damage restoration',
    'Ceiling repairs',
    'Fast, clean work'
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment',
      description: 'We evaluate your walls and ceilings to determine the best approach for your project.'
    },
    {
      step: 2,
      title: 'Preparation',
      description: 'Proper prep work ensures a flawless finish. We protect your space and prepare surfaces.'
    },
    {
      step: 3,
      title: 'Installation/Repair',
      description: 'Our skilled team installs or repairs drywall with precision and expertise.'
    },
    {
      step: 4,
      title: 'Finishing',
      description: 'We apply texture, sand smooth, and prepare surfaces for painting.'
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1629195352955-850830e4d6c9', title: 'Drywall Installation', location: 'Tampa, FL' },
    { url: 'https://images.unsplash.com/photo-1650939314857-4e5f60b10dbe', title: 'Ceiling Repair', location: 'Brandon, FL' }
  ];

  const faqs = [
    {
      question: 'How long does drywall installation take?',
      answer: 'Installation time varies by project size. A single room typically takes 1-2 days for installation and finishing. Larger projects may take several days. We provide accurate timelines during consultation.'
    },
    {
      question: 'Can you match existing wall texture?',
      answer: 'Yes! We\'re skilled at matching various textures including orange peel, knockdown, and smooth finishes to blend seamlessly with your existing walls.'
    },
    {
      question: 'Do you repair water-damaged drywall?',
      answer: 'Absolutely. We assess water damage, remove affected areas, address the moisture source, and install new drywall with proper mold prevention measures.'
    },
    {
      question: 'Is drywall dust contained during work?',
      answer: 'We use dust containment systems and protective measures to minimize mess. We also thoroughly clean the work area when finished.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Drywall Services | Family-Owned All American Restorations</title>
        <meta name="description" content="Expert drywall installation and repair in Tampa, Clearwater, St. Petersburg, and surrounding areas. Trusted family business with quality finishes. Free estimates!" />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1629195352955-850830e4d6c9"
            alt="Drywall work"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Professional Drywall Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Expert installation, repair, and finishing for perfect walls and ceilings
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
              <h2 className="text-4xl font-bold text-[#0D0D0D] mb-6 font-playfair">Expert Drywall Installation & Repair</h2>
              <p className="text-lg text-gray-600 mb-6">
                Perfect walls and ceilings are the foundation of a beautiful home. Our experienced family team delivers flawless drywall installation and repair services that prepare your space for the finishing touches that make it yours.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From new construction to repairs and renovations, we handle every drywall project with precision and professionalism. Available throughout Tampa, Clearwater, Brandon, and 20+ surrounding communities.
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
                src="https://images.unsplash.com/photo-1629195352955-850830e4d6c9"
                alt="Professional drywall work"
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
              A systematic approach to delivering perfect drywall results
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
              Quality drywall work that sets the stage for beautiful interiors
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
            <h2 className="text-4xl font-bold text-[#0D0D0D] mb-8 text-center font-playfair">Why Choose Us for Drywall Services</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Professional drywall work requires skill, experience, and attention to detail. Our team has been perfecting these skills for over 10 years, serving families throughout Tampa Bay with exceptional results.
                </p>
                <p>
                  We use premium materials and proven techniques to ensure your walls and ceilings are perfectly smooth and ready for finishing. Whether you need new installation, repairs, or texture matching, we deliver quality that lasts.
                </p>
                <p>
                  Serving Tampa, Clearwater, St. Petersburg, Brandon, Wesley Chapel, and Land O' Lakes, we're your trusted local experts for all drywall needs. We respect your home, work cleanly, and complete projects on time.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready for Perfect Walls?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Contact our family business today for expert drywall services
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

export default DrywallServicePage;