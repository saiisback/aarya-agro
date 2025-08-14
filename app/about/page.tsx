import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Target, Heart, Wheat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-[#588157] font-semibold">
                About Us
              </Link>
              <Link href="/services" className="text-[#344E41] hover:text-[#588157] transition-colors">
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
            <Badge className="bg-[#A3B18A]/20 text-[#344E41] hover:bg-[#A3B18A]/30 mb-4">Our Story</Badge>
            <h1 className="text-5xl font-bold text-[#344E41] mb-6">About Aarya Agro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering agricultural processing solutions for over two decades, transforming harvests into industrial
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Aarya Agro Facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-[#588157]" />
                  <h2 className="text-3xl font-bold text-[#344E41]">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize agricultural processing through innovative, sustainable, and efficient machinery
                  solutions that empower farmers and agro-industries to achieve maximum productivity while maintaining
                  environmental responsibility.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-[#588157]" />
                  <h2 className="text-3xl font-bold text-[#344E41]">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading manufacturer of agricultural processing equipment in India, known for quality,
                  innovation, and customer satisfaction, while contributing to sustainable agricultural practices and
                  food security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-white to-[#DAD7CD]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#344E41] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Excellence",
                description:
                  "Uncompromising commitment to delivering superior products that exceed industry standards.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Building lasting relationships through exceptional service and tailored solutions.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Continuously advancing technology to meet evolving agricultural processing needs.",
              },
              {
                icon: Heart,
                title: "Sustainability",
                description: "Promoting eco-friendly practices and sustainable agricultural development.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#DAD7CD]/30">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-[#588157] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#344E41] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Units Delivered" },
              { number: "50+", label: "Expert Team Members" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-[#588157]">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-[#DAD7CD]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#344E41] mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries behind Aarya Agro</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Patel",
                position: "Founder & CEO",
                experience: "30+ years in agricultural machinery",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Kavita Sharma",
                position: "Technical Director",
                experience: "25+ years in engineering design",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Rajesh Kumar",
                position: "Operations Head",
                experience: "20+ years in manufacturing",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#DAD7CD]/30">
                <CardContent className="p-8">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#344E41] mb-2">{member.name}</h3>
                  <p className="text-[#588157] font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#588157] to-[#3A5A40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our expertise can transform your agricultural processing operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-call">
              <Button size="lg" className="bg-white text-[#588157] hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#588157] bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
