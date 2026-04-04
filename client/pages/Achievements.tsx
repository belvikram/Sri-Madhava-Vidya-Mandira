import { Award, Calendar, Medal, Star, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAssetImage, getSchoolImage } from "@/lib/imageUtils";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export default function Achievements() {
  const { t } = useI18n();

  const achievements = [
    {
      id: 4,
      title: t("achievements_page_card_2_title"),
      category: t("achievements_page_card_2_category"),
      year: t("achievements_page_card_2_year"),
      description: t("achievements_page_card_2_description"),
      details: t("achievements_page_card_2_details"),
      image: getSchoolImage(30),
      icon: Star,
      level: t("achievements_page_card_2_level"),
      //participants: t("achievements_page_card_2_//participants"),
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
      //participants: t("achievements_page_card_3_//participants"),
    },
    {
      id: 7,
      title: t("achievements_page_card_4_title"),
      category: t("achievements_page_card_4_category"),
      year: t("achievements_page_card_4_year"),
      description: t("achievements_page_card_4_description"),
      details: t("achievements_page_card_4_details"),
      icon: Trophy,
      image: getAssetImage("23(1).jpeg"),
      level: t("achievements_page_card_4_level"),
      //participants: t("achievements_page_card_4_//participants"),
    },
    {
      id: 30,
      title: t("achievements_page_card_5_title"),
      category: t("achievements_page_card_5_category"),
      year: t("achievements_page_card_5_year"),
      description: t("achievements_page_card_5_description"),
      details: t("achievements_page_card_5_details"),
      image: getAssetImage("30.jpeg"),
      icon: Trophy,
      level: t("achievements_page_card_5_level"),
      //participants: t("achievements_page_card_5_//participants"),
    },
    {
      id: 31,
      title: t("achievements_page_card_6_title"),
      category: t("achievements_page_card_6_category"),
      year: t("achievements_page_card_6_year"),
      description: t("achievements_page_card_6_description"),
      details: t("achievements_page_card_6_details"),
      image: getAssetImage("31.jpeg"),
      icon: Star,
      level: t("achievements_page_card_6_level"),
      //participants: t("achievements_page_card_6_//participants"),
    },
    {
      id: 32,
      title: t("achievements_page_card_7_title"),
      category: t("achievements_page_card_7_category"),
      year: t("achievements_page_card_7_year"),
      description: t("achievements_page_card_7_description"),
      details: t("achievements_page_card_7_details"),
      image: getAssetImage("32.jpeg"),
      icon: Trophy,
      level: t("achievements_page_card_7_level"),
      //participants: t("achievements_page_card_7_//participants"),
    },
    {
      id: 33,
      title: t("achievements_page_card_8_title"),
      category: t("achievements_page_card_8_category"),
      year: t("achievements_page_card_8_year"),
      description: t("achievements_page_card_8_description"),
      details: t("achievements_page_card_8_details"),
      image: getAssetImage("33.jpeg"),
      icon: Trophy,
      level: t("achievements_page_card_8_level"),
      //participants: t("achievements_page_card_8_//participants"),
    },
    {
      id: 34,
      title: t("achievements_page_card_9_title"),
      category: t("achievements_page_card_9_category"),
      year: t("achievements_page_card_9_year"),
      description: t("achievements_page_card_9_description"),
      details: t("achievements_page_card_9_details"),
      image: getAssetImage("34.jpeg"),
      icon: Star,
      level: t("achievements_page_card_9_level"),
      //participants: t("achievements_page_card_9_//participants"),
    },
    {
      id: 35,
      title: t("achievements_page_card_10_title"),
      category: t("achievements_page_card_10_category"),
      year: t("achievements_page_card_10_year"),
      description: t("achievements_page_card_10_description"),
      details: t("achievements_page_card_10_details"),
      image: getAssetImage("35(1).jpeg"), // Note: Using 35(1) as 35.jpeg is missing
      icon: Medal,
      level: t("achievements_page_card_10_level"),
      //participants: t("achievements_page_card_10_//participants"),
    },
    {
      id: 351,
      title: t("achievements_page_card_11_title"),
      category: t("achievements_page_card_11_category"),
      year: t("achievements_page_card_11_year"),
      description: t("achievements_page_card_11_description"),
      details: t("achievements_page_card_11_details"),
      image: getAssetImage("35(1).jpeg"),
      icon: Trophy,
      level: t("achievements_page_card_11_level"),
      //participants: t("achievements_page_card_11_//participants"),
    },
  ];

  const studentAchievementDetails = [
    {
      title: t("achievements_page_students_s1_title"),
      items: [t("achievements_page_students_s1_item_1")],
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
      items: [t("achievements_page_students_s6_item_1")],
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">
          {t("achievements_page_title")}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {t("achievements_page_subtitle")}
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("achievements_page_intro")}
        </p>
      </section>

      {/* Major Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">
          {t("achievements_page_major_title")}
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              {achievement.image ? (
                <div className="relative h-48">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-700"
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <achievement.icon className="h-4 w-4" />
                      <span className="text-sm">{achievement.level}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">
                      {achievement.title}
                    </h3>
                    {/* <p className="text-sm opacity-90">{achievement.year}</p> */}
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0">
                  <div className="mb-3">
                    <Badge variant="secondary">{achievement.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-1">
                    {achievement.title}
                  </h3>
                  {/* <p className="text-sm text-gray-500">{achievement.year}</p> */}
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.year}</span>
                  </div> */}
                  {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{achievement.participants}</span>
                  </div> */}
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  {achievement.description}
                </p>
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
            <CardTitle className="text-2xl text-brand-blue">
              {t("achievements_page_students_title")}
            </CardTitle>
            <p className="text-gray-600">
              {t("achievements_page_students_subtitle")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {studentAchievementDetails.map((section, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-brand-blue mb-2">
                    {section.title}
                  </h3>
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
            <CardTitle className="text-2xl text-brand-blue">
              {t("achievements_page_recognition_title")}
            </CardTitle>
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
