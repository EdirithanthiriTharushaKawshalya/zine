import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Camera, Phone, Mail, Clock, Star, MessageSquare, ExternalLink, Heart } from "lucide-react"
import { submitContactForm } from "./actions"
import Link from "next/link"

interface ContactPageProps {
  searchParams: { success?: string; error?: string }
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const showSuccess = searchParams.success === "true"
  const showError = searchParams.error === "true"

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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium">
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
              Get In Touch
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LAL STUDIO
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Get in touch with our experienced team to discuss your photography and
              videography needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Session</h2>

                {/* Success/Error Messages */}
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                    Thank you for your message! We will get back to you within 24 hours.
                  </div>
                )}
                {showError && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                    Sorry, there was an error sending your message. Please try again or contact us directly at
                    lalstudio82@gmail.com
                  </div>
                )}

                <form action={submitContactForm} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                      Service Needed
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography & Videography</option>
                      <option value="birthday">Birthday Shoots</option>
                      <option value="graduation">Graduation Photography</option>
                      <option value="studio">Studio Photography</option>
                      <option value="event">Event Coverage</option>
                      <option value="commercial">Commercial Photography</option>
                      <option value="music-video">Music Videos</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700">
                      Event Date (if applicable)
                    </Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, vision, and any specific requirements..."
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Experience Highlight */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-8 h-8 text-yellow-300" />
                    <h3 className="text-2xl font-bold">8+ Years of Excellence</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    With over 8 years of professional experience and 500+ successful projects, LAL STUDIO has
                    established itself as a trusted name in photography and videography. Our extensive portfolio spans
                    weddings, corporate events, music videos, and commercial projects.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">lalstudio82@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">Available upon request</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Mon - Sat: 9AM - 8PM</p>
                        <p className="text-gray-600">Sunday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Section */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Share Your Feedback</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your feedback helps us improve our services. Share your experience with LAL STUDIO and help us serve
                    you better.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl py-3 text-lg font-medium transition-all duration-300"
                    asChild
                  >
                    <Link
                      href="https://forms.google.com/feedback"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Leave Feedback
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Time */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h3>
            <p className="text-lg text-gray-600">
              We typically respond to all inquiries within 24 hours. For urgent requests, please mention it in your
              message.
            </p>
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
                Professional photography and videography services capturing life's most precious moments with artistic
                vision and technical excellence.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com/lalstudio82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
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
