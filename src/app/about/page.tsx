import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Users, Award, Clock, Heart, Star, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LAL STUDIO
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LAL STUDIO
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With years of experience and a passion for visual storytelling, we&apos;ve been capturing life&apos;s most precious
              moments and creating stunning visual content for clients worldwide.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                LAL STUDIO was founded with a simple mission: to capture the beauty and emotion of life&apos;s most important
                moments. What started as a passion project has grown into a full-service photography and videography
                studio, serving clients across various industries and occasions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines technical expertise with artistic vision to deliver exceptional results that exceed
                expectations. We believe every project tells a unique story, and we&apos;re here to help you tell yours in
                the most compelling way possible.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Award Winning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="LAL Studio Team"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We pour our heart into every project, ensuring each shot captures the emotion and essence of the
                    moment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work closely with our clients to understand their vision and bring it to life through our
                    expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We maintain the highest standards in every aspect of our work, from planning to final delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Years of Experience</h2>
              <p className="text-xl text-gray-600">
                Our extensive experience across various photography and videography domains sets us apart
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">8+</div>
                <div className="text-gray-600 font-medium">Years in Business</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-green-600">200+</div>
                <div className="text-gray-600 font-medium">Weddings Captured</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600 font-medium">Corporate Clients</div>
              </div>
            </div>
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
                <Camera className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  LAL STUDIO
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional photography and videography services capturing life&apos;s most precious moments with artistic
                vision and technical excellence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/lalstudio82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="mailto:lalstudio82@gmail.com"
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
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Wedding Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Event Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Studio Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Music Videos
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Commercial Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
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
                  <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-blue-400 transition-colors duration-300">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
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
                  <span>lalstudio82@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p>Mon - Sat: 9AM - 8PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>8+ Years Experience</span>
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
                © 2024 LAL STUDIO. All rights reserved. | Professional Photography & Videography Services
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </Link>
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
  )
}
