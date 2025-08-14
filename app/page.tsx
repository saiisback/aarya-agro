import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Wheat,
  Nut,
  Settings,
  Users,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-green-100/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#588157] to-[#3A5A40] rounded-xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-r from-[#588157] to-[#3A5A40] p-2 rounded-xl">
                  <Wheat className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#344E41] to-[#588157] bg-clip-text text-transparent">
                Aarya Agro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#344E41] hover:text-[#588157] transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#588157] to-[#3A5A40] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-[#344E41] hover:text-[#588157] transition-all duration-300 font-medium relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#588157] to-[#3A5A40] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-[#344E41] hover:text-[#588157] transition-all duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#588157] to-[#3A5A40] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/reviews"
                className="text-[#344E41] hover:text-[#588157] transition-all duration-300 font-medium relative group"
              >
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#588157] to-[#3A5A40] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/timeline"
                className="text-[#344E41] hover:text-[#588157] transition-all duration-300 font-medium relative group"
              >
                Timeline
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#588157] to-[#3A5A40] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-[#344E41] hover:text-[#588157] transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#588157] to-[#3A5A40] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <Link href="/book-call">
              <Button className="bg-gradient-to-r from-[#588157] to-[#3A5A40] hover:from-[#3A5A40] hover:to-[#588157] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book a Call
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#588157]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#A3B18A]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#DAD7CD]/5 via-transparent to-[#588157]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-[#A3B18A]/20 to-[#588157]/20 text-[#344E41] border-[#588157]/20 hover:from-[#A3B18A]/30 hover:to-[#588157]/30 transition-all duration-300">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Industrial Processing Excellence
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#344E41] via-[#588157] to-[#3A5A40] bg-clip-text text-transparent">
                    From Harvest
                  </span>
                  <br />
                  <span className="text-[#344E41]">to Industry</span>
                </h1>

                <div className="relative">
                  <p className="text-2xl text-[#3A5A40] font-medium leading-relaxed">
                    Precision Processing for a Greener Tomorrow
                  </p>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#588157] to-[#3A5A40] rounded-full"></div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Leading manufacturer of wheat and peanut processing units, delivering cutting-edge industrial
                  solutions with sustainable practices and unmatched reliability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-call">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#588157] to-[#3A5A40] hover:from-[#3A5A40] hover:to-[#588157] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#588157] text-[#588157] hover:bg-gradient-to-r hover:from-[#588157] hover:to-[#3A5A40] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-[#588157]" />
                  <span className="text-sm font-medium text-gray-600">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#588157]" />
                  <span className="text-sm font-medium text-gray-600">25+ Years</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-600">500+ Clients</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#588157]/20 to-[#A3B18A]/20 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-[#3A5A40]/20 to-[#588157]/20 rounded-2xl blur-xl"></div>

              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Modern+Processing+Facility"
                  alt="Aarya Agro Processing Facility"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="text-2xl font-bold text-[#588157]">98%</div>
                  <div className="text-sm text-gray-600">Efficiency Rate</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="text-2xl font-bold text-[#3A5A40]">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#A3B18A]/20 to-[#588157]/20 text-[#344E41] border-[#588157]/20 mb-6">
              Our Expertise
            </Badge>
            <h2 className="text-5xl font-bold text-[#344E41] mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-[#588157] to-[#3A5A40] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive processing solutions tailored to your agricultural and industrial needs with cutting-edge
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wheat,
                title: "Wheat Processing Units",
                description: "Advanced wheat cleaning, grading, and processing machinery",
                gradient: "from-amber-500/10 to-orange-500/10",
                iconBg: "from-amber-500 to-orange-500",
              },
              {
                icon: Nut,
                title: "Peanut Grading Machines",
                description: "Precision peanut sorting and grading equipment",
                gradient: "from-yellow-500/10 to-amber-500/10",
                iconBg: "from-yellow-500 to-amber-500",
              },
              {
                icon: Settings,
                title: "Custom Unit Fabrication",
                description: "Tailored processing solutions for specific requirements",
                gradient: "from-blue-500/10 to-indigo-500/10",
                iconBg: "from-blue-500 to-indigo-500",
              },
              {
                icon: Users,
                title: "Agro Consultancy",
                description: "Expert guidance for processing unit optimization",
                gradient: "from-green-500/10 to-emerald-500/10",
                iconBg: "from-green-500 to-emerald-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm hover:from-white/90 hover:to-white/60 transform hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#344E41] mb-4 group-hover:text-[#588157] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#588157] to-[#3A5A40] hover:from-[#3A5A40] hover:to-[#588157] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#588157]/5 via-transparent to-[#A3B18A]/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#588157]/20 to-[#A3B18A]/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Advanced+Equipment"
                  alt="Processing Equipment"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="bg-gradient-to-r from-[#A3B18A]/20 to-[#588157]/20 text-[#344E41] border-[#588157]/20 mb-6">
                  Why Choose Us
                </Badge>
                <h2 className="text-5xl font-bold text-[#344E41] mb-6">
                  Why{" "}
                  <span className="bg-gradient-to-r from-[#588157] to-[#3A5A40] bg-clip-text text-transparent">
                    Aarya Agro?
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  "25+ years of industry expertise",
                  "ISO certified manufacturing processes",
                  "Custom solutions for unique requirements",
                  "Comprehensive after-sales support",
                  "Sustainable and eco-friendly practices",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#588157] to-[#3A5A40] rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-lg text-gray-700 group-hover:text-[#344E41] transition-colors duration-300 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#588157] text-[#588157] hover:bg-gradient-to-r hover:from-[#588157] hover:to-[#3A5A40] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-8"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#A3B18A]/20 to-[#588157]/20 text-[#344E41] border-[#588157]/20 mb-6">
              Client Success Stories
            </Badge>
            <h2 className="text-5xl font-bold text-[#344E41] mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#588157] to-[#3A5A40] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading agricultural businesses across the region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Kumar Agro Industries",
                rating: 5,
                text: "Aarya Agro's wheat processing unit has revolutionized our operations. Exceptional quality and reliability.",
                avatar: "RK",
              },
              {
                name: "Priya Sharma",
                company: "Green Valley Farms",
                rating: 5,
                text: "Outstanding peanut grading machines with excellent after-sales support. Highly recommended!",
                avatar: "PS",
              },
              {
                name: "Amit Patel",
                company: "Patel Processing Co.",
                rating: 5,
                text: "Custom fabrication services exceeded our expectations. Professional team with deep industry knowledge.",
                avatar: "AP",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#588157]/10 to-transparent rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 italic leading-relaxed font-medium">"{review.text}"</p>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#588157] to-[#3A5A40] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-[#344E41]">{review.name}</p>
                        <p className="text-sm text-[#588157] font-medium">{review.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/reviews">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#588157] to-[#3A5A40] hover:from-[#3A5A40] hover:to-[#588157] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#588157] via-[#3A5A40] to-[#588157]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgo8ZyBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4wNSI+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Processing Operations?</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Get expert consultation and discover the perfect processing solution for your business with our
              industry-leading technology
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/book-call">
                <Button
                  size="lg"
                  className="bg-white text-[#588157] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Schedule Free Consultation
                  <Phone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#588157] bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#344E41] via-[#2d4a35] to-[#344E41] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgo8ZyBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4wMyI+CjxwYXRoIGQ9Ik0yMCAyMGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwIDQuNS0xMCAxMCA0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwem0xMCAwYzAtNS41LTQuNS0xMC0xMC0xMHMtMTAgNC41LTEwIDEwIDQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTB6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#588157] to-[#A3B18A] rounded-xl blur opacity-50"></div>
                  <div className="relative bg-gradient-to-r from-[#588157] to-[#A3B18A] p-2 rounded-xl">
                    <Wheat className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold">Aarya Agro</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Leading manufacturer of agricultural processing equipment, committed to sustainable and efficient
                solutions for a greener tomorrow.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <div className="space-y-3">
                {["About Us", "Services", "Timeline", "Reviews"].map((link, index) => (
                  <Link
                    key={index}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <div className="space-y-3">
                {["Wheat Processing Units", "Peanut Grading Machines", "Custom Fabrication", "Agro Consultancy"].map(
                  (service, index) => (
                    <p key={index} className="text-gray-300">
                      {service}
                    </p>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-5 w-5 text-[#A3B18A] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-5 w-5 text-[#A3B18A] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">info@aaryaagro.com</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MapPin className="h-5 w-5 text-[#A3B18A] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    Industrial Area, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600/50 mt-16 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Aarya Agro. All rights reserved. Crafted with precision and care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
