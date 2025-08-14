import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, Wheat } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/contact" className="text-[#588157] font-semibold">
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
            <Badge className="bg-[#A3B18A]/20 text-[#344E41] hover:bg-[#A3B18A]/30 mb-4">Get in Touch</Badge>
            <h1 className="text-5xl font-bold text-[#344E41] mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your agricultural processing operations? Get in touch with our experts for personalized
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#344E41] mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help you find the perfect processing solution for your business. Reach out to us through
                  any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    details: ["+91 98765 43210", "+91 98765 43211"],
                    description: "Call us for immediate assistance",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: ["info@aaryaagro.com", "sales@aaryaagro.com"],
                    description: "Send us your queries anytime",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    details: ["Plot No. 123, Industrial Area", "Sector 15, Gujarat 380015, India"],
                    description: "Visit our manufacturing facility",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
                    description: "We're available during these hours",
                  },
                ].map((contact, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-[#DAD7CD]/30">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#588157]/10 rounded-lg flex items-center justify-center">
                          <contact.icon className="h-6 w-6 text-[#588157]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#344E41] mb-2">{contact.title}</h3>
                          {contact.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-700 font-medium">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-gray-500 mt-1">{contact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-[#DAD7CD]/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#344E41]">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#344E41] mb-2 block">First Name</label>
                      <Input
                        placeholder="Enter your first name"
                        className="border-[#DAD7CD]/50 focus:border-[#588157]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344E41] mb-2 block">Last Name</label>
                      <Input
                        placeholder="Enter your last name"
                        className="border-[#DAD7CD]/50 focus:border-[#588157]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="border-[#DAD7CD]/50 focus:border-[#588157]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Phone Number</label>
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
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Service Interest</label>
                    <select className="w-full p-3 border border-[#DAD7CD]/50 rounded-md focus:border-[#588157] focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="wheat-processing">Wheat Processing Units</option>
                      <option value="peanut-grading">Peanut Grading Machines</option>
                      <option value="custom-fabrication">Custom Unit Fabrication</option>
                      <option value="consultancy">Agro Consultancy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#344E41] mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your requirements, project details, or any questions you have..."
                      className="border-[#DAD7CD]/50 focus:border-[#588157] min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-[#588157] hover:bg-[#3A5A40] text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#DAD7CD]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#344E41] mb-4">Visit Our Facility</h2>
            <p className="text-lg text-gray-600">
              Come see our state-of-the-art manufacturing facility and meet our team
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-[#588157] mx-auto mb-4" />
              <p className="text-lg font-semibold text-[#344E41] mb-2">Interactive Map</p>
              <p className="text-gray-600">Google Maps integration would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">
                Plot No. 123, Industrial Area, Sector 15, Gujarat 380015, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#344E41] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical delivery time?",
                answer:
                  "Standard equipment delivery is 4-6 weeks. Custom fabrication may take 8-12 weeks depending on complexity.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, we provide complete installation, commissioning, and training services for all our equipment.",
              },
              {
                question: "What warranty do you offer?",
                answer: "We offer a comprehensive 2-year warranty on all equipment with lifetime technical support.",
              },
              {
                question: "Can you customize equipment for specific needs?",
                answer:
                  "We specialize in custom fabrication and can design equipment to meet your specific requirements.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-[#DAD7CD]/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#344E41] mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#588157] to-[#3A5A40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a free consultation to discuss your processing needs</p>
          <Link href="/book-call">
            <Button size="lg" className="bg-white text-[#588157] hover:bg-gray-100">
              Book Free Consultation
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
