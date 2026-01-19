import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/constants/colors';

function BathroomsServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const benefits = [
    'Complete bathroom renovation',
    'Shower and tub installation',
    'Vanity installation',
    'Tile and flooring',
    'Plumbing coordination',
    'Modern fixtures'
  ];

  const process = [
    {
      step: 1,
      title: 'Design Planning',
      description: 'We create a detailed plan based on your vision, needs, and budget.'
    },
    {
      step: 2,
      title: 'Demolition',
      description: 'Careful removal of old fixtures and materials with minimal mess.'
    },
    {
      step: 3,
      title: 'Installation',
      description: 'Expert installation of all new elements including tile, fixtures, and cabinetry.'
    },
    {
      step: 4,
      title: 'Final Touches',
      description: 'Quality inspection and final details to ensure your dream bathroom is perfect.'
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc', title: 'Luxury Bathroom Remodel', location: 'Tampa, FL' },
    { url: 'https://images.unsplash.com/photo-1618836003104-ec6d67239040', title: 'Modern Shower Installation', location: 'Clearwater, FL' },
    { url: 'https://images.unsplash.com/photo-1596179141030-cc1010641903', title: 'Contemporary Vanity', location: 'St. Petersburg, FL' }
  ];

  const faqs = [
    {
      question: 'How long does a bathroom remodel take?',
      answer: 'A typical bathroom remodel takes 2-3 weeks from start to finish. This includes demolition, installation, and final touches. We provide a detailed timeline during your consultation.'
    },
    {
      question: 'Can I use my bathroom during the remodel?',
      answer: 'Unfortunately, the bathroom will be out of service during the renovation. For homes with multiple bathrooms, we can schedule work to minimize disruption. We work efficiently to complete your project as quickly as possible.'
    },
    {
      question: 'Do you handle plumbing and electrical work?',
      answer: 'Yes, we coordinate all necessary plumbing and electrical work with licensed professionals to ensure your bathroom remodel meets all code requirements and functions perfectly.'
    },
    {
      question: 'What should I consider when planning a bathroom remodel?',
      answer: 'Consider your budget, desired features, storage needs, and how you use the space. We help you make informed decisions about layout, fixtures, materials, and finishes that align with your goals and budget.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bathroom Remodeling in Tampa Bay | Family-Owned All American Restorations</title>
        <meta name="description" content="Complete bathroom renovation by a family-owned team. Serving Tampa, Clearwater, St. Petersburg, Brandon, and 20+ surrounding communities. Free estimates!" />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc"
            alt="Beautiful bathroom"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Bathroom Remodeling</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Create your dream bathroom with expert services from our family to yours
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
              <h2 className="text-4xl font-bold text-[#0D0D0D] mb-6 font-playfair">Complete Bathroom Renovation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your bathroom into a luxurious retreat. Our comprehensive remodeling services cover every aspect of bathroom renovation, from modern fixtures to beautiful tile work.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're updating a powder room or creating a spa-like master bath, we bring family-style care and creativity to bring your vision to life. Serving the entire Tampa Bay area.
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
                src="https://images.unsplash.com/photo-1699270148023-3c98cc2e8cfc"
                alt="Luxury bathroom remodel"
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
              A streamlined approach to creating your perfect bathroom
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
              Beautiful bathroom transformations we've completed
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#0D0D0D] mb-8 text-center font-playfair">Why Choose Us for Bathroom Remodeling</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  A bathroom remodel is a significant investment that requires careful planning and expert execution. With over 10 years of experience, we've perfected the art of bathroom renovation.
                </p>
                <p>
                  From design to installation, we handle every detail with precision. We coordinate plumbing, electrical, tile work, and fixture installation to ensure a seamless transformation.
                </p>
                <p>
                  Serving homeowners throughout Tampa, Clearwater, St. Petersburg, Brandon, Wesley Chapel, and Land O' Lakes, we're committed to creating bathrooms that combine beauty, functionality, and lasting quality.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready for Your Dream Bathroom?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Contact us today for a free consultation and start your bathroom transformation
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

export default BathroomsServicePage;