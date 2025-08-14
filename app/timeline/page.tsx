import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Factory, Globe, Wheat } from "lucide-react"
import Link from "next/link"

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: "1999",
      title: "Foundation",
      description: "Aarya Agro was founded with a vision to revolutionize agricultural processing in India.",
      icon: Factory,
      color: "bg-[#588157]",
    },
    {
      year: "2002",
      title: "First Major Contract",
      description: "Secured our first major contract for wheat processing units with a leading grain mill.",
      icon: Award,
      color: "bg-[#3A5A40]",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Expanded operations and established our first dedicated manufacturing facility.",
      icon: Factory,
      color: "bg-[#588157]",
    },
    {
      year: "2008",
      title: "Peanut Processing Division",
      description: "Launched specialized peanut grading and processing equipment division.",
      icon: Award,
      color: "bg-[#3A5A40]",
    },
    {
      year: "2012",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2008 certification for quality management systems.",
      icon: Award,
      color: "bg-[#588157]",
    },
    {
      year: "2015",
      title: "Technology Upgrade",
      description: "Invested in advanced CNC machinery and automated production systems.",
      icon: Factory,
      color: "bg-[#3A5A40]",
    },
    {
      year: "2018",
      title: "500th Client Milestone",
      description: "Celebrated serving our 500th satisfied customer across India.",
      icon: Users,
      color: "bg-[#588157]",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented digital systems for design, manufacturing, and customer service.",
      icon: Globe,
      color: "bg-[#3A5A40]",
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "Launched eco-friendly manufacturing processes and sustainable product lines.",
      icon: Award,
      color: "bg-[#588157]",
    },
    {
      year: "2024",
      title: "25 Years of Excellence",
      description: "Celebrating 25 years of innovation, quality, and customer satisfaction.",
      icon: Award,
      color: "bg-[#3A5A40]",
    },
  ]

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
              <Link href="/services" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Services
              </Link>
              <Link href="/reviews" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Reviews
              </Link>
              <Link href="/timeline" className="text-[#588157] font-semibold">
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
            <Badge className="bg-[#A3B18A]/20 text-[#344E41] hover:bg-[#A3B18A]/30 mb-4">Our Journey</Badge>
            <h1 className="text-5xl font-bold text-[#344E41] mb-6">25 Years of Innovation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading manufacturer of agricultural processing equipment. Discover the
              milestones that shaped our journey.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#588157] to-[#3A5A40] h-full hidden lg:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="flex-1 lg:max-w-md">
                    <Card
                      className={`hover:shadow-xl transition-all duration-300 border-[#DAD7CD]/30 hover:border-[#588157]/50 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <Calendar className="h-5 w-5 text-[#588157]" />
                          <Badge className="bg-[#A3B18A]/20 text-[#344E41]">{event.year}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-[#344E41] mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Icon */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <event.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 lg:max-w-md hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#DAD7CD]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#344E41] mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that define our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "500+",
                label: "Satisfied Clients",
                description: "Across India and beyond",
              },
              {
                icon: Factory,
                number: "1000+",
                label: "Units Delivered",
                description: "Processing equipment installed",
              },
              {
                icon: Award,
                number: "25+",
                label: "Years Experience",
                description: "In agricultural processing",
              },
              {
                icon: Globe,
                number: "15+",
                label: "States Served",
                description: "Pan-India presence",
              },
            ].map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#DAD7CD]/30">
                <CardContent className="p-8">
                  <achievement.icon className="h-12 w-12 text-[#588157] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#344E41] mb-2">{achievement.number}</div>
                  <h3 className="text-lg font-semibold text-[#344E41] mb-2">{achievement.label}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#344E41] mb-4">Looking Ahead</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As we continue our journey, we remain committed to innovation, sustainability, and excellence in
              agricultural processing solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Automation",
                description: "Implementing AI and IoT technologies for smarter processing solutions",
                icon: Factory,
              },
              {
                title: "Global Expansion",
                description: "Extending our reach to international markets and partnerships",
                icon: Globe,
              },
              {
                title: "Sustainable Innovation",
                description: "Developing eco-friendly technologies for a greener future",
                icon: Award,
              },
            ].map((vision, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#DAD7CD]/30">
                <CardContent className="p-8">
                  <vision.icon className="h-12 w-12 text-[#588157] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#344E41] mb-3">{vision.title}</h3>
                  <p className="text-gray-600">{vision.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#588157] to-[#3A5A40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Be Part of Our Continuing Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the hundreds of businesses that have transformed their operations with Aarya Agro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-call">
              <Button size="lg" className="bg-white text-[#588157] hover:bg-gray-100">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#588157] bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
