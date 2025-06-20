import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Facebook, Star, Mail, Clock, Heart } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding Ceremony",
      category: "Wedding",
      image: "/portfolio/1/I1.jpg?height=400&width=600",
      description: "A beautiful outdoor wedding ceremony captured with cinematic elegance",
      facebookUrl: "https://www.facebook.com/share/p/14DjEbzYzQ9/",
    },
    {
      id: 2,
      title: "Corporate Event Coverage",
      category: "Corporate",
      image: "/portfolio/2/I2.jpg?height=400&width=600",
      description: "Professional documentation of a major corporate conference",
      facebookUrl: "https://www.facebook.com/share/p/12LgJcpShp8/",
    },
    {
      id: 3,
      title: "Birthday Celebration",
      category: "Birthday",
      image: "/portfolio/3/I1.jpg?height=400&width=600",
      description: "Joyful moments from a milestone birthday celebration",
      facebookUrl: "https://www.facebook.com/share/p/1CL7Dcu81f/",
    },
    {
      id: 4,
      title: "Graduation Portraits",
      category: "Graduation",
      image: "/portfolio/4/I1.jpg?height=400&width=600",
      description: "Professional graduation portraits commemorating academic achievement",
      facebookUrl: "https://www.facebook.com/share/p/19EXXq5WXL/",
    },
    {
      id: 5,
      title: "Video Production",
      category: "Video",
      image: "/portfolio/Zine Logo b.png?height=400&width=600",
      description: "Creative event video with artistic direction and cinematic quality",
      facebookUrl: "https://www.facebook.com/share/v/1LMfLLvDV4/",
    },
    {
      id: 6,
      title: "Studio Portrait Session",
      category: "Studio",
      image: "/portfolio/6/I1.jpg?height=400&width=600",
      description: "Professional studio portraits with premium lighting setup",
      facebookUrl: "https://m.facebook.com/story.php?story_fbid=pfbid02F4BPv4UfTqBB5siPmTctzZ9sXHucFp9i8s4sHK3a98oHVkgZfzRfGYJAVNw3op79l&id=100093565536482&mibextid=CDWPTG",
    },
    {
      id: 7,
      title: "Sports",
      category: "Sports",
      image: "/portfolio/7/I1.jpg?height=400&width=600",
      description: "Dynamic sports event coverage capturing peak action and raw emotion with cinematic precision.",
      facebookUrl: "https://www.facebook.com/share/p/1NFTpcFNbW/",
    },
    {
      id: 8,
      title: "Event Documentation",
      category: "Event",
      image: "/portfolio/8/I2.jpg?height=400&width=600",
      description: "Comprehensive coverage of a special community event",
      facebookUrl: "https://www.facebook.com/share/p/16puBTKpMh/",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <Navigation currentPage="/portfolio" />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Best Work
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated selection of projects that showcase our expertise across various photography
              and videography services.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full"
                        asChild
                      >
                        <a
                          href={item.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Full Event
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Facebook Section */}
          <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Facebook className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Follow Our Journey</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stay updated with our latest work and behind-the-scenes content. Follow STUDIO ZINE on Facebook to see
                more of our photography and videography projects, client testimonials, and creative process.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">
                  Connect with us for daily inspiration and updates on our latest projects
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link
                    href="https://www.facebook.com/share/196GKDHi5j/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Visit Our Facebook Page
                  </Link>
                </Button>
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
