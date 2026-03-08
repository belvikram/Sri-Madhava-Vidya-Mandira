import { Award, Users, Globe, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export default function Alumni() {
  const { t } = useI18n();

  const alumniData = [
    {
      name: "Dr. Annapoorna",
      profession: "Doctor",
      location: "Manipal",
    },
    {
      name: "Dr. Vinay Singh",
      profession: "Doctor",
      location: "Sira, Tumkur Dist.",
    },
    {
      name: "Dr. Sunil",
      profession: "Doctor",
      location: "Lucknow",
    },
    {
      name: "Rakesh Padikar",
      profession: "Software Engineer",
      location: "USA",
    },
    {
      name: "Shweta",
      profession: "Software Engineer",
      location: "USA",
    },
    {
      name: "Chaya",
      profession: "MSc.",
      location: "Bangalore",
    },
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
                <span>{t("alumni_count")}: 300+</span>
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
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Alumni Meet 2023</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-brand-blue" />
                    <span>January 3, 2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
