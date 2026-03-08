import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  const mapSrc =
    "https://www.google.com/maps?q=Sree%20Madhava%20Vidya%20Mandira%2C%20Bhavani%20nagara%2C%20Sira%20%E2%80%93%20572137%2C%20Tumakuru%20District%2C%20Karnataka&output=embed";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Sree Madhava Vidya Mandira, Bhavani nagara, Sira – 572137, Tumakuru District, Karnataka."],
      description: "Visit our beautiful campus in the serene town of Sira"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 94494 24530"],
      description: "Call us during school hours for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["madhavavidyamandira21@gmail.com"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "School Hours",
      details: ["Monday - Friday: 9:00 AM - 4:30 PM", "Saturday: 7:15 AM - 12:00 PM"],
      description: "Our administrative office is open during these hours"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 4:30 PM" },
    { day: "Saturday", time: "7:15 AM - 12:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("contact_us")}</h1>
        <p className="text-xl text-gray-600 mb-6">We'd love to hear from you</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Get in touch with us for admissions and general inquiries.
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

    </main>
  );
}
