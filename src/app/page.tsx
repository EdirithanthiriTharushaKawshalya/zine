import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, Palette, Star, ArrowRight, Play, Heart, Clock, Mail } from "lucide-react"

export default function HomePage() {
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
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Professional Photography & Videography
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Capturing Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Perfect Moments
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From weddings to corporate events, studio shoots to music videos - we bring your vision to life with
                  creativity, professionalism, and years of expertise.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/portfolio">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-600 rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Get Quote
                    <Play className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional Photography"
                  width={500}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+ Projects</p>
                    <p className="text-sm text-gray-600">Successfully Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in capturing life&apos;s most important moments with artistic vision and technical excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Camera className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Photography</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional photography for weddings, events, portraits, and commercial projects with artistic flair
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <Video className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Videography</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cinematic videography for weddings, music videos, commercials, and corporate content
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <Palette className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Creative graphic design services to complement your visual content and branding needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LAL STUDIO?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of experience with cutting-edge technology and artistic vision to deliver exceptional
              results
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">8+ Years of Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our extensive experience across weddings, corporate events, and creative projects ensures
                    professional results every time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Equipment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use the latest professional cameras, lenses, and lighting equipment to capture stunning visuals
                    in any condition.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every project is unique. We work closely with you to understand your vision and bring it to life
                    with creativity and precision.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand the importance of timely delivery. Get your professionally edited photos and videos
                    quickly without compromising quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional Photography Setup"
                  width={500}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final delivery, we ensure a smooth and professional experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                We discuss your vision, requirements, timeline, and budget to create a customized plan for your project.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-purple-600 group-hover:text-white transition-colors duration-300">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed planning including location scouting, equipment preparation, and timeline coordination.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-green-600 group-hover:text-white transition-colors duration-300">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional photography and videography with attention to every detail and creative direction.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-orange-600 group-hover:text-white transition-colors duration-300">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional editing and post-production followed by timely delivery in your preferred format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients about their experience with LAL STUDIO
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &quot;LAL STUDIO captured our wedding day perfectly. The attention to detail and artistic vision exceeded
                  our expectations. We couldn&apos;t be happier with the results!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">S&M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah & Michael</p>
                    <p className="text-sm text-gray-600">Wedding Clients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &quot;Professional, creative, and reliable. LAL STUDIO delivered exceptional corporate event coverage that
                  perfectly represented our brand. Highly recommended!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">TC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Tech Corp</p>
                    <p className="text-sm text-gray-600">Corporate Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &quot;The music video LAL STUDIO created for us was beyond amazing. Their creative vision and technical
                  expertise brought our song to life beautifully.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">AB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex Band</p>
                    <p className="text-sm text-gray-600">Music Artist</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">500+</div>
              <div className="text-blue-100 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">200+</div>
              <div className="text-blue-100 font-medium">Weddings Captured</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">50+</div>
              <div className="text-blue-100 font-medium">Corporate Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">8+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our photography and videography services
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How far in advance should I book?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We recommend booking at least 2-3 months in advance for weddings and major events. However, we can
                  often accommodate shorter notice depending on our availability. Contact us as soon as you have your
                  date confirmed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What&apos;s included in your packages?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our packages vary by service type but typically include pre-event consultation, professional
                  photography/videography, basic editing, and digital delivery. We also offer add-ons like additional
                  hours, prints, and premium editing services.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does it take to receive the final photos/videos?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Turnaround time depends on the project scope. Wedding photos are typically delivered within 2-4 weeks,
                  while smaller sessions may be ready in 1-2 weeks. Rush delivery options are available for urgent
                  projects.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you travel for destination events?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We love destination weddings and events. Travel fees may apply depending on the location. We&apos;ll
                  work with you to create a package that includes all necessary travel arrangements and logistics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s discuss your project and bring your vision to life with our professional photography and videography
            services. Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-600 rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/portfolio">
                View Portfolio
                <Camera className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📧 lalstudio82@gmail.com | 📱 Available 7 days a week | ⚡ Quick response guaranteed</p>
          </div>
        </div>
      </section>

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
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
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
  )
}
