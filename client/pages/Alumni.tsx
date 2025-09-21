import { GraduationCap, Award, Users, Globe, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function Alumni() {
  const { t } = useI18n();

  const alumniData = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "2005",
      profession: "Software Engineer at Google",
      location: "Bangalore, India",
      achievements: ["Distinguished Engineer", "Open Source Contributor"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Priya Sharma",
      batch: "2008",
      profession: "Doctor - Cardiologist",
      location: "Mumbai, India",
      achievements: ["MD in Cardiology", "Published Researcher"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Arjun Reddy",
      batch: "2010",
      profession: "Business Owner",
      location: "Hyderabad, India",
      achievements: ["Successful Entrepreneur", "Job Creator"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Meera Patel",
      batch: "2007",
      profession: "Research Scientist",
      location: "Boston, USA",
      achievements: ["PhD in Physics", "Nobel Prize Nominee"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Vikram Singh",
      batch: "2012",
      profession: "Civil Services Officer",
      location: "Delhi, India",
      achievements: ["IAS Officer", "District Collector"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Anita Desai",
      batch: "2009",
      profession: "Lawyer",
      location: "Chennai, India",
      achievements: ["Senior Advocate", "Human Rights Activist"],
      image: "/api/placeholder/150/150"
    }
  ];

  const events = [
    {
      title: "Annual Alumni Meet 2024",
      date: "December 15, 2024",
      location: "School Campus",
      description: "Join us for our annual alumni reunion and networking event."
    },
    {
      title: "Career Guidance Session",
      date: "January 20, 2025",
      location: "Online",
      description: "Alumni sharing career insights with current students."
    },
    {
      title: "Foundation Day Celebration",
      date: "March 10, 2025",
      location: "School Campus",
      description: "Celebrating our school's foundation with alumni participation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("alumni_title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t("alumni_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Users className="h-4 w-4" />
                <span>{t("alumni_count")}: 500+</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4" />
                <span>{t("alumni_global")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("alumni_spotlight")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("alumni_spotlight_desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumniData.map((alumni, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-xl">{alumni.name}</CardTitle>
                    <CardDescription className="text-brand-blue font-medium">
                      Batch {alumni.batch}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-brand-orange" />
                        <span className="font-medium">{alumni.profession}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{alumni.location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gray-900">{t("achievements")}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {alumni.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("alumni_events")}
              </h2>
              <p className="text-gray-600">
                {t("alumni_events_desc")}
              </p>
            </div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="whitespace-nowrap">
                        {t("register_now")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("alumni_contact")}
            </h2>
            <p className="text-gray-600 mb-8">
              {t("alumni_contact_desc")}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6 text-brand-blue" />
                  <h3 className="text-lg font-semibold">{t("email_us")}</h3>
                </div>
                <p className="text-gray-600">alumni@smvm.edu.in</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-brand-blue" />
                  <h3 className="text-lg font-semibold">{t("call_us")}</h3>
                </div>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
