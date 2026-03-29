import { Award, Users, Globe, MapPin, Calendar, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { getAssetImage } from "@/lib/imageUtils";

export default function Alumni() {
  const { t } = useI18n();

  const alumniData = [
    { name: "DR. ANNAPOORNA", profession: "Doctor", location: "MANIPAL" },
    { name: "DR. VINAY SINGH", profession: "Doctor", location: "SIRA, TUMKUR DIST." },
    { name: "DR. SUNIL N P", profession: "Doctor", location: "LUCKNOW" },
    { name: "RAKESH PADIKAR", profession: "SOFTWARE ENGINEER", location: "USA" },
    { name: "SHWETA G", profession: "SOFTWARE ENGINEER", location: "USA" },
    { name: "CHAYA", profession: "MSc.", location: "BANGALORE" },
    { name: "CHANDRALA", profession: "SOFTWARE ENGINEER", location: "SPAIN" },
    { name: "SRIDEVI", profession: "SOFTWARE ENGINEER", location: "AUSTRALIA" },
    { name: "SAGAR", profession: "SOFTWARE ENGINEER", location: "AUSTRALIA" },
    { name: "ASHWINI", profession: "SOFTWARE ENGINEER", location: "USA" },
    { name: "ASHWINI S N", profession: "SOFTWARE ENGINEER", location: "AUSTRALIA" },
    { name: "REKHA", profession: "SOFTWARE ENGINEER", location: "USA" },
    { name: "NAVEEN PONNAMPETE", profession: "FOREST OFFICER", location: "" },
    { name: "SREENIDHI GOWDA", profession: "SOFTWARE ENGINEER", location: "UK" },
    { name: "SHILPASHREE", profession: "APMC SECRETARY", location: "HARIHARA" },
    { name: "DR. RAVISH", profession: "Doctor", location: "GOVERNMENT HOSPITAL, MADHUGIRI" },
  ];

  const galleryImages = [
    "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", 
    "39(1).jpeg", "39(2).jpeg", "39(3).jpeg", "39(4).jpeg"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumniData.map((alumni, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-brand-orange">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg font-bold text-brand-blue">{alumni.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <Award className="h-4 w-4 mt-0.5 text-brand-orange shrink-0" />
                        <span className="font-semibold text-gray-800">{alumni.profession}</span>
                      </div>
                      {alumni.location && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>{alumni.location}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Camera className="h-8 w-8 text-brand-blue" />
              Alumni Memories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((imgName, idx) => (
              <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-md group">
                <img 
                  src={getAssetImage(imgName)} 
                  alt={`Alumni moment ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("alumni_events")}
              </h2>
            </div>

            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="space-y-3 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Alumni Meet 2023</h3>
                  <div className="flex items-center gap-2 text-sm justify-center">
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
