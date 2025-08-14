import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Phone, CheckCircle, Wheat } from "lucide-react"
import Link from "next/link"

export default function BookCallPage() {
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
              <Link href="/timeline" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Timeline
              </Link>
              <Link href="/contact" className="text-[#344E41] hover:text-[#588157] transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-[#588157] hover:bg-[#3A5A40] text-white">Book a Call</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#DAD7CD]/10 to-[#A3B18A]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#A3B18A]/20 text-[#344E41] hover:bg-[#A3B18A]/30 mb-4">Free Consultation</Badge>
            <h1 className="text-5xl font-bold text-[#344E41] mb-6">Schedule Your Call</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a free consultation with our experts to discuss your agricultural processing needs and discover the
              perfect solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#344E41] mb-6">What You'll Get</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our free consultation call is designed to understand your specific needs and provide tailored
                  recommendations.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Expert Analysis",
                    description: "Detailed assessment of your current processing setup and requirements",
                  },
                  {
                    icon: CheckCircle,
                    title: "Custom Recommendations",
                    description: "Personalized equipment suggestions based on your specific needs and budget",
                  },
                  {
                    icon: CheckCircle,
                    title: "Technical Guidance",
                    description: "Professional advice on optimization, efficiency improvements, and best practices",
                  },
                  {
                    icon: CheckCircle,
                    title: "Cost Estimation",
                    description: "Transparent pricing information and ROI analysis for recommended solutions",
                  },
                  {
                    icon: CheckCircle,
                    title: "Implementation Plan",
                    description: "Step-by-step roadmap for equipment installation and setup",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <benefit.icon className="h-6 w-6 text-[#588157] mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#344E41] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call Details */}
              <Card className="border-[#588157]/20 bg-gradient-to-br from-[#588157]/5 to-[#A3B18A]/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#344E41] mb-4">Call Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[#588157]" />
                      <span className="text-gray-700">Duration: 30-45 minutes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#588157]" />
                      <span className="text-gray-700">Format: Phone or Video Call</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-[#588157]" />
                      <span className="text-gray-700">Available: Monday - Saturday, 9 AM - 6 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <Card className="shadow-xl border-[#DAD7CD]/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#344E41]">Book Your Free Consultation</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll contact you within 24 hours to schedule your call.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#344E41] mb-2 block">First Name *</label>
                      <Input
                        placeholder="Enter your first name"
                        className="border-[#DAD7CD]/50 focus:border-[#588157]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344E41] mb-2 block">Last Name *</label>
                      <Input
                        placeholder="Enter your last name"
                        className="border-[#DAD7CD]/50 focus:border-[#588157]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="border-[#DAD7CD]/50 focus:border-[#588157]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-[#DAD7CD]/50 focus:border-[#588157]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Company Name</label>
                    <Input
                      placeholder="Enter your company name"
                      className="border-[#DAD7CD]/50 focus:border-[#588157]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Primary Interest *</label>
                    <select className="w-full p-3 border border-[#DAD7CD]/50 rounded-md focus:border-[#588157] focus:outline-none">
                      <option value="">Select your primary interest</option>
                      <option value="wheat-processing">Wheat Processing Units</option>
                      <option value="peanut-grading">Peanut Grading Machines</option>
                      <option value="custom-fabrication">Custom Unit Fabrication</option>
                      <option value="consultancy">Agro Consultancy</option>
                      <option value="upgrade">Equipment Upgrade</option>
                      <option value="maintenance">Maintenance Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Preferred Call Time</label>
                    <select className="w-full p-3 border border-[#DAD7CD]/50 rounded-md focus:border-[#588157] focus:outline-none">
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">
                      Current Processing Volume (Optional)
                    </label>
                    <Input
                      placeholder="e.g., 100 tons per day"
                      className="border-[#DAD7CD]/50 focus:border-[#588157]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Additional Information</label>
                    <Textarea
                      placeholder="Tell us about your current setup, challenges, or specific requirements..."
                      className="border-[#DAD7CD]/50 focus:border-[#588157] min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-[#588157] hover:bg-[#3A5A40] text-white">
                    Schedule My Free Consultation
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by our team regarding your consultation request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-white to-[#DAD7CD]/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-[#588157]/20 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="h-6 w-6 text-[#588157] fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                "The consultation call with Aarya Agro was incredibly valuable. Their team understood our needs
                perfectly and provided practical solutions that transformed our processing efficiency."
              </blockquote>
              <div>
                <p className="text-lg font-semibold text-[#344E41]">Rajesh Kumar</p>
                <p className="text-[#588157] font-medium">Kumar Agro Industries</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#344E41] mb-4">Prefer to Call Directly?</h2>
            <p className="text-lg text-gray-600 mb-8">You can also reach us directly during business hours</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#588157] text-[#588157] hover:bg-[#588157] hover:text-white bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +91 98765 43210
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-[#588157] hover:bg-[#3A5A40] text-white">
                  View All Contact Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
