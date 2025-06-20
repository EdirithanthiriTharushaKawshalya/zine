import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Palette, Users, Heart, Music, Briefcase, Gift, GraduationCap, Star, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography & Videography",
      description:
        "Capture your special day with cinematic elegance and artistic flair. From intimate ceremonies to grand celebrations.",
      features: ["Pre-wedding shoots", "Ceremony coverage", "Reception documentation", "Highlight reels"],
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Gift,
      title: "Birthday & Celebration Shoots",
      description:
        "Make every milestone memorable with professional photography that captures joy, laughter, and precious moments.",
      features: ["Party documentation", "Portrait sessions", "Candid moments", "Custom photo albums"],
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: GraduationCap,
      title: "Graduation Photography",
      description: "Commemorate academic achievements with professional portraits and ceremony coverage.",
      features: ["Individual portraits", "Group photos", "Ceremony coverage", "Family portraits"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Camera,
      title: "Studio Photography",
      description: "Professional studio sessions with controlled lighting and premium equipment for perfect results.",
      features: ["Portrait sessions", "Product photography", "Fashion shoots", "Professional headshots"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Event Coverage",
      description: "Comprehensive event documentation for corporate functions, conferences, and special occasions.",
      features: ["Live event coverage", "Networking sessions", "Speaker photography", "Event highlights"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Briefcase,
      title: "Commercial Photography",
      description: "Professional commercial content for businesses, products, and marketing campaigns.",
      features: ["Product photography", "Corporate portraits", "Marketing content", "Brand photography"],
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative music video production with cinematic quality and artistic direction.",
      features: ["Concept development", "Multi-camera setup", "Professional editing", "Color grading"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative design services to complement your visual content and enhance your brand identity.",
      features: ["Logo design", "Marketing materials", "Photo editing", "Brand identity"],
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img
                  src="/Logo.png"
                  alt="STUDIO ZINE Logo"
                  className="h-25 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Professional Services
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate moments to grand celebrations, we offer comprehensive photography and videography services
              tailored to your unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">
                We follow a proven process to ensure exceptional results for every project
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">We discuss your vision, requirements, and expectations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">Detailed planning and preparation for your shoot</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Production</h3>
                <p className="text-gray-600">Professional photography and videography execution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600">Edited content delivered in your preferred format</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let&apos;s discuss your project and create something amazing together
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Get Your Quote Today</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Studio Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Link href="/">
                <img
                  src="/Zine Logo W.png"
                  alt="STUDIO ZINE Logo"
                  className="h-40 w-auto"
                />
                </Link>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional photography and videography services capturing
                life&apos;s most precious moments with artistic vision and
                technical excellence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/196GKDHi5j/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="mailto:contact.teamzine@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Wedding Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Event Coverage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Birthday Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Music Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Commercial Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Get In Touch</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact.teamzine@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p>Mon - Sat: 9AM - 8PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 STUDIO ZINE. All rights reserved. | Professional
                Photography & Videography Services
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <span className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Made with passion</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

