import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage } from "@/lib/imageUtils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Users, Trophy, Music, Palette, BookOpen } from "lucide-react";

export default function Gallery() {
  const { t } = useI18n();

  const galleryCategories = [
    {
      id: "campus",
      title: t("gallery_page_category_campus_title"),
      icon: Camera,
      images: [getSchoolImage(1), getSchoolImage(2), getSchoolImage(3)],
      description: t("gallery_page_category_campus_desc"),
    },
    {
      id: "students",
      title: t("gallery_page_category_students_title"),
      icon: Users,
      images: [getSchoolImage(4), getSchoolImage(5), getSchoolImage(6)],
      description: t("gallery_page_category_students_desc"),
    },
    {
      id: "sports",
      title: t("gallery_page_category_sports_title"),
      icon: Trophy,
      images: [getSchoolImage(7), getSchoolImage(8), getSchoolImage(9)],
      description: t("gallery_page_category_sports_desc"),
    },
    {
      id: "cultural",
      title: t("gallery_page_category_cultural_title"),
      icon: Music,
      images: [getSchoolImage(10), getSchoolImage(11), getSchoolImage(12)],
      description: t("gallery_page_category_cultural_desc"),
    },
    {
      id: "arts",
      title: t("gallery_page_category_arts_title"),
      icon: Palette,
      images: [getSchoolImage(1), getSchoolImage(2), getSchoolImage(3)],
      description: t("gallery_page_category_arts_desc"),
    },
    {
      id: "academics",
      title: t("gallery_page_category_academics_title"),
      icon: BookOpen,
      images: [getSchoolImage(4), getSchoolImage(5), getSchoolImage(6)],
      description: t("gallery_page_category_academics_desc"),
    },
  ];

  const recentEvents = [
    {
      title: t("gallery_page_event_1_title"),
      date: t("gallery_page_event_1_date"),
      description: t("gallery_page_event_1_desc"),
      image: getSchoolImage(7),
      category: t("gallery_page_event_1_category"),
    },
    {
      title: t("gallery_page_event_2_title"),
      date: t("gallery_page_event_2_date"),
      description: t("gallery_page_event_2_desc"),
      image: getSchoolImage(8),
      category: t("gallery_page_event_2_category"),
    },
    {
      title: t("gallery_page_event_3_title"),
      date: t("gallery_page_event_3_date"),
      description: t("gallery_page_event_3_desc"),
      image: getSchoolImage(9),
      category: t("gallery_page_event_3_category"),
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("gallery_page_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("gallery_page_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("gallery_page_intro")}
        </p>
      </section>

      {/* Gallery Categories */}
      <section className="mb-12">
        <Tabs defaultValue="campus" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {galleryCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                    <category.icon className="h-5 w-5" />
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.images.map((image, index) => (
                      <div key={index} className="relative group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`${category.title} ${t("gallery_page_photo_label")} ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Recent Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("gallery_page_recent_events_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {event.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <p className="text-sm text-gray-600">{event.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
