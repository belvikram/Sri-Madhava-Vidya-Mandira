import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage } from "@/lib/imageUtils";
import { BookOpen, Microscope, Computer, Dumbbell, Music, Users, Shield, Car, Utensils, Heart } from "lucide-react";

export default function Facilities() {
  const { t } = useI18n();

  const facilities = [
    {
      icon: BookOpen,
      title: t("facilities_page_core_1_title"),
      description: t("facilities_page_core_1_desc"),
      image: getSchoolImage(5),
      features: [
        t("facilities_page_core_1_feature_1"),
        t("facilities_page_core_1_feature_2"),
        t("facilities_page_core_1_feature_3"),
        t("facilities_page_core_1_feature_4"),
      ],
    },
    {
      icon: Microscope,
      title: t("facilities_page_core_2_title"),
      description: t("facilities_page_core_2_desc"),
      image: getSchoolImage(6),
      features: [
        t("facilities_page_core_2_feature_1"),
        t("facilities_page_core_2_feature_2"),
        t("facilities_page_core_2_feature_3"),
        t("facilities_page_core_2_feature_4"),
      ],
    },
    {
      icon: Computer,
      title: t("facilities_page_core_3_title"),
      description: t("facilities_page_core_3_desc"),
      image: getSchoolImage(7),
      features: [
        t("facilities_page_core_3_feature_1"),
        t("facilities_page_core_3_feature_2"),
        t("facilities_page_core_3_feature_3"),
        t("facilities_page_core_3_feature_4"),
      ],
    },
    {
      icon: Dumbbell,
      title: t("facilities_page_core_4_title"),
      description: t("facilities_page_core_4_desc"),
      image: getSchoolImage(8),
      features: [
        t("facilities_page_core_4_feature_1"),
        t("facilities_page_core_4_feature_2"),
        t("facilities_page_core_4_feature_3"),
        t("facilities_page_core_4_feature_4"),
      ],
    },
    {
      icon: Music,
      title: t("facilities_page_core_5_title"),
      description: t("facilities_page_core_5_desc"),
      image: getSchoolImage(9),
      features: [
        t("facilities_page_core_5_feature_1"),
        t("facilities_page_core_5_feature_2"),
        t("facilities_page_core_5_feature_3"),
        t("facilities_page_core_5_feature_4"),
      ],
    },
    {
      icon: Users,
      title: t("facilities_page_core_6_title"),
      description: t("facilities_page_core_6_desc"),
      image: getSchoolImage(10),
      features: [
        t("facilities_page_core_6_feature_1"),
        t("facilities_page_core_6_feature_2"),
        t("facilities_page_core_6_feature_3"),
        t("facilities_page_core_6_feature_4"),
      ],
    },
  ];

  const additionalFacilities = [
    {
      icon: Shield,
      title: t("facilities_page_additional_1_title"),
      description: t("facilities_page_additional_1_desc"),
    },
    {
      icon: Car,
      title: t("facilities_page_additional_2_title"),
      description: t("facilities_page_additional_2_desc"),
    },
    {
      icon: Heart,
      title: t("facilities_page_additional_3_title"),
      description: t("facilities_page_additional_3_desc"),
    },
    {
      icon: Utensils,
      title: t("facilities_page_additional_4_title"),
      description: t("facilities_page_additional_4_desc"),
    },
    {
      icon: Users,
      title: t("facilities_page_additional_5_title"),
      description: t("facilities_page_additional_5_desc"),
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("facilities_page_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("facilities_page_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{t("facilities_page_intro")}</p>
      </section>

      {/* Main Facilities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("facilities_page_core_title")}</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-full bg-brand-blue/90">
                    <facility.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">{facility.title}</CardTitle>
                <p className="text-gray-600">{facility.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("facilities_page_additional_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFacilities.map((facility, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-orange/10">
                    <facility.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                </div>
                <CardTitle className="text-lg">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">{t("facilities_page_highlights_title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">25+</div>
                <div className="text-sm text-gray-600">{t("facilities_page_highlight_1")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">2500+</div>
                <div className="text-sm text-gray-600">{t("facilities_page_highlight_2")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">{t("facilities_page_highlight_3_label")}</div>
                <div className="text-sm text-gray-600">{t("facilities_page_highlight_3")}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
