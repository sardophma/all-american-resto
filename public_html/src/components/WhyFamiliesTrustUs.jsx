import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Home, HeartHandshake as Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Family-Owned & Operated',
    description: 'We are a multi-generational business that treats every client like a member of our own family.'
  },
  {
    icon: Heart,
    title: 'We Care Like Our Own',
    description: 'Your home is your sanctuary. We treat it with the same respect and care as we would our own homes.'
  },
  {
    icon: Shield,
    title: 'Trusted by Families',
    description: 'Building long-term relationships based on trust, reliability, and consistent quality over the years.'
  },
  {
    icon: Home,
    title: 'Local Community Focus',
    description: 'Serving Tampa Bay families for over a decade, we are deeply rooted in the communities we serve.'
  },
  {
    icon: Handshake,
    title: 'Transparent & Honest',
    description: 'No hidden fees or surprises. We believe in honest communication and integrity in every interaction.'
  }
];

function WhyFamiliesTrustUs() {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 font-playfair">Why Families Trust Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Values that build lasting relationships and beautiful homes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-b-4 border-[#4F1929]"
            >
              <div className="w-14 h-14 bg-[#4F1929]/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <reason.icon className="w-7 h-7 text-[#4F1929]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-3 font-playfair text-center md:text-left">{reason.title}</h3>
              <p className="text-gray-600 text-center md:text-left">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyFamiliesTrustUs;