import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSchoolImage } from "@/lib/imageUtils";
import { MapPin, Phone, Mail, Clock, Users, Car, Wifi, Shield } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  const mapSrc =
    "https://www.google.com/maps?q=Bhumisinganahalli%2C%20Sira%20%E2%80%93%20572137%2C%20Tumkur%20District%2C%20Karnataka&output=embed";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [t("address_value")],
      description: "Visit our beautiful campus in the serene town of Sira"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-00000 00000", "+91-00000 00001"],
      description: "Call us during school hours for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@smvm.edu.in", "admissions@smvm.edu.in"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "School Hours",
      details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
      description: "Our administrative office is open during these hours"
    }
  ];

  const quickContacts = [
    {
      icon: Users,
      title: "Admissions",
      contact: "+91-00000 00000",
      description: "For admission queries and applications"
    },
    {
      icon: Car,
      title: "Transport",
      contact: "+91-00000 00002",
      description: "School bus routes and transportation"
    },
    {
      icon: Wifi,
      title: "IT Support",
      contact: "support@smvm.edu.in",
      description: "Technical support and digital services"
    },
    {
      icon: Shield,
      title: "Security",
      contact: "+91-00000 00003",
      description: "24/7 campus security and emergency"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "8:00 AM - 4:00 PM" },
    { day: "Saturday", time: "8:00 AM - 12:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("contact_us")}</h1>
        <p className="text-xl text-gray-600 mb-6">We'd love to hear from you</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Get in touch with us for admissions, general inquiries, or to schedule a visit to our campus. 
          We're here to help and answer any questions you may have.
        </p>
      </section>

      {/* Contact Information Grid */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-blue/10">
                    <info.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm font-medium text-gray-900">{detail}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-brand-blue">Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="academics">Academic Programs</option>
                    <option value="facilities">Facilities & Infrastructure</option>
                    <option value="transport">Transportation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Enter your message here..."
                  />
                </div>
                <Button type="submit" className="w-full btn-primary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">Find Us on Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  title="Google Map"
                  src={mapSrc}
                  className="h-[300px] w-full rounded-b-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>

            {/* Quick Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">Quick Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickContacts.map((contact, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-full bg-brand-orange/10">
                        <contact.icon className="h-4 w-4 text-brand-orange" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{contact.title}</h4>
                        <p className="text-sm text-brand-blue font-medium">{contact.contact}</p>
                        <p className="text-xs text-gray-600">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Office Hours</CardTitle>
            <p className="text-gray-600">When you can reach us</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {officeHours.map((schedule, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 mb-1">{schedule.day}</div>
                  <div className="text-sm text-gray-600">{schedule.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Campus Visit */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={getSchoolImage(12)} 
            alt="School Campus" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Schedule a Campus Visit</h2>
            <p className="text-sm opacity-90 mb-4">Experience our campus and facilities firsthand</p>
            <Button className="bg-white text-brand-blue hover:bg-gray-100">
              Book a Visit
            </Button>
          </div>
          <div className="absolute top-6 right-6">
            <div className="bg-white/90 text-brand-blue px-4 py-2 rounded-lg">
              <div className="text-center">
                <Clock className="h-6 w-6 mx-auto mb-1" />
                <span className="text-sm font-medium">Tours Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
