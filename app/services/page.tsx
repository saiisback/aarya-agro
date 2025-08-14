import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wheat, Nut, Settings, Users, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#DAD7CD]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Wheat className="h-8 w-8 text-[#588157]" />
              <span className="text-2xl font-bold text-[#344E41]">Aarya Agro</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#344E41] hover:text-[#588157] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-[#588157] font-semibold">
                Services
              </Link>
              <Link href="/reviews" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Reviews
              </Link>
              <Link href="/timeline" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Timeline
              </Link>
              <Link href="/contact" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/book-call">
              <Button className="bg-[#588157] hover:bg-[#3A5A40] text-white">Book a Call</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#DAD7CD]/10 to-[#A3B18A]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#A3B18A]/20 text-[#344E41] hover:bg-[#A3B18A]/30 mb-4">Our Services</Badge>
            <h1 className="text-5xl font-bold text-[#344E41] mb-6">Complete Processing Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to delivery, we provide comprehensive agricultural processing equipment and consulting
              services tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {[
              {
                icon: Wheat,
                title: "Wheat Processing Units",
                description:
                  "Complete wheat processing solutions including cleaning, grading, milling, and packaging systems.",
                features: [
                  "High-capacity wheat cleaning systems",
                  "Precision grading and sorting",
                  "Automated milling equipment",
                  "Quality control systems",
                  "Dust collection and safety features",
                ],
                image: "/placeholder.svg?height=400&width=500",
              },
              {
                icon: Nut,
                title: "Peanut Grading Machines",
                description: "Advanced peanut processing equipment for sorting, grading, and quality enhancement.",
                features: [
                  "Multi-stage sorting systems",
                  "Size and quality grading",
                  "Shell removal equipment",
                  "Color sorting technology",
                  "Packaging and bagging systems",
                ],
                image: "/placeholder.svg?height=400&width=500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="h-10 w-10 text-[#588157]" />
                    <h2 className="text-3xl font-bold text-[#344E41]">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#588157]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/book-call">
                    <Button className="bg-[#588157] hover:bg-[#3A5A40] text-white">
                      Get Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-white to-[#DAD7CD]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#344E41] mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for all your processing needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: "Custom Unit Fabrication",
                description:
                  "Tailored processing solutions designed specifically for your unique requirements and operational needs.",
                features: [
                  "Custom design and engineering",
                  "Prototype development",
                  "Quality testing and validation",
                  "Installation and commissioning",
                  "Training and documentation",
                ],
              },
              {
                icon: Users,
                title: "Agro Consultancy",
                description:
                  "Expert guidance and consulting services to optimize your processing operations and maximize efficiency.",
                features: [
                  "Process optimization analysis",
                  "Equipment selection guidance",
                  "Operational efficiency audits",
                  "Technology upgrade planning",
                  "Maintenance and support programs",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-[#DAD7CD]/30">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <service.icon className="h-8 w-8 text-[#588157]" />
                    <CardTitle className="text-2xl text-[#344E41]">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#588157]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/book-call">
                    <Button className="w-full bg-[#588157] hover:bg-[#3A5A40] text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#344E41] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">From consultation to delivery, we ensure excellence at every step</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your specific requirements and operational needs",
              },
              {
                step: "02",
                title: "Design",
                description: "Custom engineering and design solutions tailored to your specifications",
              },
              {
                step: "03",
                title: "Manufacturing",
                description: "Precision manufacturing using high-quality materials and advanced techniques",
              },
              {
                step: "04",
                title: "Support",
                description: "Installation, training, and ongoing maintenance support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#588157] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-[#344E41] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#588157] to-[#3A5A40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover the perfect processing solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-call">
              <Button size="lg" className="bg-white text-[#588157] hover:bg-gray-100">
                Schedule Free Consultation
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#588157] bg-transparent"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
