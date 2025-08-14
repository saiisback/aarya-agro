import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Wheat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Agro Industries",
      location: "Gujarat, India",
      rating: 5,
      text: "Aarya Agro's wheat processing unit has completely revolutionized our operations. The quality of machinery is exceptional, and the efficiency gains have been remarkable. Their after-sales support is outstanding.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Priya Sharma",
      company: "Green Valley Farms",
      location: "Punjab, India",
      rating: 5,
      text: "We installed their peanut grading machines last year, and the results have exceeded our expectations. The precision sorting has significantly improved our product quality and market value.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Amit Patel",
      company: "Patel Processing Co.",
      location: "Maharashtra, India",
      rating: 5,
      text: "The custom fabrication services provided by Aarya Agro were exactly what we needed. They understood our unique requirements and delivered a solution that perfectly fits our operations.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sunita Reddy",
      company: "Reddy Agro Tech",
      location: "Andhra Pradesh, India",
      rating: 5,
      text: "Professional team with deep industry knowledge. The consultation services helped us optimize our entire processing line, resulting in 30% increased efficiency.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Vikram Singh",
      company: "Singh Grain Mills",
      location: "Haryana, India",
      rating: 5,
      text: "Quality machinery, timely delivery, and excellent support. Aarya Agro has been our trusted partner for processing equipment for over 5 years now.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Meera Joshi",
      company: "Joshi Food Processing",
      location: "Rajasthan, India",
      rating: 5,
      text: "The wheat cleaning system we purchased has been running flawlessly for 3 years. The build quality and reliability are impressive. Highly recommend their products.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Arjun Nair",
      company: "Nair Agro Solutions",
      location: "Kerala, India",
      rating: 5,
      text: "Exceptional customer service and technical expertise. They provided comprehensive training to our team and continue to support us with maintenance and upgrades.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Kavita Gupta",
      company: "Gupta Grain Processing",
      location: "Uttar Pradesh, India",
      rating: 5,
      text: "The peanut processing unit has transformed our business. The automation features have reduced labor costs while improving product consistency and quality.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ravi Krishnan",
      company: "Krishnan Mills",
      location: "Tamil Nadu, India",
      rating: 5,
      text: "Outstanding engineering and manufacturing quality. The equipment has been performing excellently even under heavy operational loads. Great value for investment.",
      image: "/placeholder.svg?height=80&width=80",
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
              <Link href="/reviews" className="text-[#588157] font-semibold">
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
            <Badge className="bg-[#A3B18A]/20 text-[#344E41] hover:bg-[#A3B18A]/30 mb-4">Client Testimonials</Badge>
            <h1 className="text-5xl font-bold text-[#344E41] mb-6">What Our Clients Say</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading agricultural businesses across India. Read what our satisfied customers have to say
              about our products and services.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "1000+", label: "Units Delivered" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-[#588157]">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-[#DAD7CD]/30 hover:border-[#588157]/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-[#A3B18A] mb-4" />
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-[#344E41]">{review.name}</p>
                      <p className="text-sm text-[#588157] font-medium">{review.company}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-gradient-to-b from-white to-[#DAD7CD]/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-[#588157]/20 shadow-xl">
            <CardContent className="p-12 text-center">
              <Quote className="h-12 w-12 text-[#588157] mx-auto mb-6" />
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                "Aarya Agro has been instrumental in modernizing our processing operations. Their expertise, quality
                equipment, and exceptional support have made them our preferred partner for all agricultural processing
                needs."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Featured Client"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold text-[#344E41]">Dr. Suresh Agarwal</p>
                  <p className="text-[#588157] font-medium">Chairman, Agarwal Agro Industries</p>
                  <p className="text-gray-500">Gujarat, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#588157] to-[#3A5A40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Satisfied Customers</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the quality and service that has earned us hundreds of positive reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-call">
              <Button size="lg" className="bg-white text-[#588157] hover:bg-gray-100">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#588157] bg-transparent"
              >
                Get Your Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
