// pages/AboutUs.jsx
import React from 'react';
import {
  FiUsers,
  FiTarget,
  FiHeart,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiGlobe
} from 'react-icons/fi';

const AboutUs = () => {
  const stats = [
    { icon: FiUsers, number: '50,000+', label: 'Happy Customers' },
    { icon: FiAward, number: '5+', label: 'Years Experience' },
    { icon: FiGlobe, number: '25+', label: 'Countries Served' },
    { icon: FiStar, number: '4.9', label: 'Customer Rating' }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above everything else, ensuring every interaction exceeds expectations.'
    },
    {
      icon: FiShield,
      title: 'Quality Assurance',
      description: 'Every product goes through rigorous quality checks to guarantee authenticity and performance.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We constantly evolve our platform and services to bring you the latest in technology and user experience.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
      description: 'Visionary leader with 15+ years in tech industry'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      description: 'Technology expert passionate about innovation'
    },
    {
      name: 'Emily Davis',
      position: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      description: 'Customer experience advocate and problem solver'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About eShop</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your trusted destination for premium electronics and cutting-edge technology since 2020
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center min-w-[140px]">
                  <stat.icon className="mx-auto mb-3" size={32} />
                  <p className="text-2xl md:text-3xl font-bold">{stat.number}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020 with a simple mission: to make premium technology accessible to everyone. 
                What started as a small online store has grown into a trusted platform serving customers worldwide.
              </p>
              <p>
                We believe technology should enhance lives, not complicate them. That's why we carefully 
                curate every product in our catalog, partnering only with brands that share our commitment 
                to quality and innovation.
              </p>
              <p>
                Today, we're proud to be the go-to destination for tech enthusiasts, professionals, and 
                everyday users who demand the best. Our journey is just beginning, and we're excited to 
                continue growing alongside our amazing community.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Our team working"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <FiTarget size={32} className="mb-2" />
              <p className="font-semibold">Trusted by 50,000+ customers worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to premium technology by providing authentic products, 
                exceptional service, and unmatched value. We strive to be more than just an 
                e-commerce platform – we're your technology partner for life.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FiGlobe className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the world's most trusted technology marketplace, where innovation 
                meets accessibility. We envision a future where everyone has access to the 
                tools they need to thrive in our digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition">
                <value.icon className="text-orange-600 group-hover:text-white transition" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind eShop's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust eShop for their technology needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
