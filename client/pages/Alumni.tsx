import { useState } from "react";
import { Award, Users, Globe, MapPin, Camera, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { getAssetImage } from "@/lib/imageUtils";

export default function Alumni() {
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 border-b border-gray-200 font-bold text-brand-blue uppercase text-sm tracking-wider hidden md:grid">
                <div className="px-6 py-4">{t("alumni_name_label") || "Name"}</div>
                <div className="px-6 py-4 border-l border-gray-200">{t("alumni_profession_label") || "Profession"}</div>
                <div className="px-6 py-4 border-l border-gray-200">{t("alumni_location_label") || "Location"}</div>
              </div>

              <div className="divide-y-0 md:divide-y divide-gray-200">
                {alumniData.map((alumni, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-1 md:grid-cols-3 hover:bg-brand-blue/5 transition-colors group mb-6 md:mb-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none overflow-hidden"
                  >
                    <div className="px-6 py-4 flex items-center md:block bg-brand-blue/5 md:bg-transparent">
                      <span className="text-xs font-bold uppercase text-brand-blue md:hidden mr-4 w-20 shrink-0">Name:</span>
                      <span className="text-lg font-bold text-brand-blue md:text-gray-900 group-hover:text-brand-blue transition-colors">
                        {alumni.name}
                      </span>
                    </div>
                    
                    <div className="px-6 py-4 border-t md:border-t-0 md:border-l border-gray-200 flex items-center md:block">
                      <span className="text-xs font-bold uppercase text-brand-blue/60 md:hidden mr-4 w-20 shrink-0">Profession:</span>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-brand-orange shrink-0 hidden lg:inline" />
                        <span className="text-gray-700 font-medium">{alumni.profession}</span>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t md:border-t-0 md:border-l border-gray-200 flex items-center md:block">
                      <span className="text-xs font-bold uppercase text-brand-blue/60 md:hidden mr-4 w-20 shrink-0">Location:</span>
                      {alumni.location ? (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-brand-blue shrink-0 hidden lg:inline" />
                          <span className="text-gray-600">{alumni.location}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic text-sm">Not specified</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
              <div 
                key={idx} 
                className="aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer"
                onClick={() => setSelectedImage(imgName)}
              >
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

      {/* Image Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={getAssetImage(selectedImage)} 
            alt="Fullscreen Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
