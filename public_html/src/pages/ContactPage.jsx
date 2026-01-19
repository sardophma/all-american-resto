import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PHONE_NUMBER, EMAIL, ADDRESS, SERVICE_AREAS } from '@/constants/colors';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Store in localStorage for now
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    'Tile & Stone',
    'Drywall',
    'Painting',
    'Cabinets',
    'Bathrooms',
    'Full Remodeling',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact All American Restorations - Serving Tampa Bay Families</title>
        <meta name="description" content="Contact All American Restorations for your remodeling needs in Tampa Bay. Call us or fill out our form for a free estimate. Serving Tampa, Clearwater, and 20+ surrounding communities." />
      </Helmet>

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#4F1929] to-[#4C1E32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://horizons-cdn.hostinger.com/463d7843-c073-4f31-9a12-bfa831e0fbff/9f0fb1a8f1fae5b9f818c38b293cc75e.jpg)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Get in touch with our family for a free consultation and estimate
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6 font-playfair">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Tell us about your project, and we'll get back to you as soon as possible.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F1929] focus:border-transparent transition-all text-gray-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F1929] focus:border-transparent transition-all text-gray-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F1929] focus:border-transparent transition-all text-gray-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F1929] focus:border-transparent transition-all text-gray-900 bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F1929] focus:border-transparent transition-all text-gray-900 bg-white resize-none"
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#4F1929] hover:bg-[#3d1320] text-white py-4 text-lg h-auto"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6 font-playfair">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Ready to start your project? Contact our family today for a free estimate. We're here to answer any questions you may have.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4F1929] p-3 rounded-lg text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{PHONE_NUMBER}</p>
                    <button onClick={handleCallNow} className="text-[#4F1929] font-semibold hover:underline mt-1">
                      Call Now
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#4F1929] p-3 rounded-lg text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#4F1929] p-3 rounded-lg text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#4F1929] p-3 rounded-lg text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h3 className="font-bold text-gray-900 mb-4 font-playfair text-xl">Our Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve the entire Tampa Bay region and surrounding communities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                   {SERVICE_AREAS.map((area, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full text-center">
                        {area}
                      </span>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;