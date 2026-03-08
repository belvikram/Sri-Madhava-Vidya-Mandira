import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage } from "@/lib/imageUtils";
import { Trophy, Medal, Award, Star, Users, Calendar } from "lucide-react";

export default function Achievements() {
  const { t } = useI18n();

  const achievements = [
    {
      id: 1,
      title: t("achievements_page_card_1_title"),
      category: t("achievements_page_card_1_category"),
      year: t("achievements_page_card_1_year"),
      description: t("achievements_page_card_1_description"),
      details: t("achievements_page_card_1_details"),
      icon: Award,
      level: t("achievements_page_card_1_level"),
      participants: t("achievements_page_card_1_participants"),
    },
    {
      id: 4,
      title: t("achievements_page_card_2_title"),
      category: t("achievements_page_card_2_category"),
      year: t("achievements_page_card_2_year"),
      description: t("achievements_page_card_2_description"),
      details: t("achievements_page_card_2_details"),
      image: getSchoolImage(4),
      icon: Star,
      level: t("achievements_page_card_2_level"),
      participants: t("achievements_page_card_2_participants"),
    },
    {
      id: 6,
      title: t("achievements_page_card_3_title"),
      category: t("achievements_page_card_3_category"),
      year: t("achievements_page_card_3_year"),
      description: t("achievements_page_card_3_description"),
      details: t("achievements_page_card_3_details"),
      icon: Trophy,
      level: t("achievements_page_card_3_level"),
      participants: t("achievements_page_card_3_participants"),
    },
    {
      id: 7,
      title: t("achievements_page_card_4_title"),
      category: t("achievements_page_card_4_category"),
      year: t("achievements_page_card_4_year"),
      description: t("achievements_page_card_4_description"),
      details: t("achievements_page_card_4_details"),
      icon: Trophy,
      level: t("achievements_page_card_4_level"),
      participants: t("achievements_page_card_4_participants"),
    },
  ];

  const statistics = [
    { label: t("achievements_page_stat_academic"), value: "50+", icon: Award },
    { label: t("achievements_page_stat_sports"), value: "40+", icon: Trophy },
    { label: t("achievements_page_stat_cultural"), value: "15+", icon: Star },
    { label: t("achievements_page_stat_science"), value: "20+", icon: Medal },
  ];

  const studentAchievementDetails = [
    {
      title: t("achievements_page_students_s1_title"),
      items: [
        t("achievements_page_students_s1_item_1"),
      ],
    },
    {
      title: t("achievements_page_students_s2_title"),
      items: [
        t("achievements_page_students_s2_item_1"),
        t("achievements_page_students_s2_item_2"),
        t("achievements_page_students_s2_item_3"),
      ],
    },
    {
      title: t("achievements_page_students_s3_title"),
      items: [
        t("achievements_page_students_s3_item_1"),
        t("achievements_page_students_s3_item_2"),
        t("achievements_page_students_s3_item_3"),
        t("achievements_page_students_s3_item_4"),
        t("achievements_page_students_s3_item_5"),
      ],
    },
    {
      title: t("achievements_page_students_s4_title"),
      items: [
        t("achievements_page_students_s4_item_1"),
        t("achievements_page_students_s4_item_2"),
        t("achievements_page_students_s4_item_3"),
        t("achievements_page_students_s4_item_4"),
        t("achievements_page_students_s4_item_5"),
        t("achievements_page_students_s4_item_6"),
        t("achievements_page_students_s4_item_7"),
        t("achievements_page_students_s4_item_8"),
        t("achievements_page_students_s4_item_9"),
      ],
    },
    {
      title: t("achievements_page_students_s5_title"),
      items: [
        t("achievements_page_students_s5_item_1"),
        t("achievements_page_students_s5_item_2"),
        t("achievements_page_students_s5_item_3"),
      ],
    },
    {
      title: t("achievements_page_students_s6_title"),
      items: [
        t("achievements_page_students_s6_item_1"),
      ],
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("achievements_page_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("achievements_page_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("achievements_page_intro")}
        </p>
      </section>

      {/* Achievement Statistics */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-brand-blue" />
                <div className="text-3xl font-bold text-brand-blue mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Major Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("achievements_page_major_title")}</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {achievement.image ? (
                <div className="relative h-48">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {achievement.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <achievement.icon className="h-4 w-4" />
                      <span className="text-sm">{achievement.level}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                    <p className="text-sm opacity-90">{achievement.year}</p>
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0">
                  <div className="mb-3">
                    <Badge variant="secondary">{achievement.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.year}</p>
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{achievement.participants}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 font-medium">{achievement.description}</p>
                <p className="text-sm text-gray-600">{achievement.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Achievements */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">{t("achievements_page_students_title")}</CardTitle>
            <p className="text-gray-600">{t("achievements_page_students_subtitle")}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {studentAchievementDetails.map((section, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-brand-blue mb-2">{section.title}</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-brand-blue font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recognition & Awards */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">{t("achievements_page_recognition_title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">•</span>
                <span>{t("achievements_page_recognition_1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">•</span>
                <span>{t("achievements_page_recognition_2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">•</span>
                <span>{t("achievements_page_recognition_3")}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
