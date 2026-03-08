import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Award, Globe, Microscope, Palette, Music, Trophy, BookMarked, Languages } from "lucide-react";

export default function Academics() {
  const { t } = useI18n();

  const curriculum = [
    {
      value: "pre-primary",
      grade: t("academics_page_grade_pre_primary"),
      subjects: [
        t("academics_page_subject_english"),
        t("academics_page_subject_kannada"),
        t("academics_page_subject_mathematics"),
        t("academics_page_subject_environmental_studies"),
        t("academics_page_subject_art_craft"),
        t("academics_page_subject_music"),
        t("academics_page_subject_physical_education"),
      ],
      description: t("academics_page_grade_pre_primary_desc"),
    },
    {
      value: "primary",
      grade: t("academics_page_grade_primary"),
      subjects: [
        t("academics_page_subject_english"),
        t("academics_page_subject_kannada"),
        t("academics_page_subject_hindi"),
        t("academics_page_subject_mathematics"),
        t("academics_page_subject_environmental_studies"),
        t("academics_page_subject_computer_science"),
        t("academics_page_subject_art_craft"),
        t("academics_page_subject_physical_education"),
      ],
      description: t("academics_page_grade_primary_desc"),
    },
    {
      value: "middle",
      grade: t("academics_page_grade_middle"),
      subjects: [
        t("academics_page_subject_english"),
        t("academics_page_subject_kannada"),
        t("academics_page_subject_hindi"),
        t("academics_page_subject_mathematics"),
        t("academics_page_subject_science"),
        t("academics_page_subject_social_studies"),
        t("academics_page_subject_computer_science"),
        t("academics_page_subject_art"),
        t("academics_page_subject_physical_education"),
      ],
      description: t("academics_page_grade_middle_desc"),
    },
    {
      value: "high",
      grade: t("academics_page_grade_high"),
      subjects: [
        t("academics_page_subject_english"),
        t("academics_page_subject_kannada"),
        t("academics_page_subject_hindi"),
        t("academics_page_subject_mathematics"),
        t("academics_page_subject_science"),
        t("academics_page_subject_social_studies"),
        t("academics_page_subject_computer_science"),
        t("academics_page_subject_physical_education"),
      ],
      description: t("academics_page_grade_high_desc"),
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: t("academics_page_feature_curriculum_title"),
      description: t("academics_page_feature_curriculum_desc"),
    },
    {
      icon: Users,
      title: t("academics_page_feature_small_classes_title"),
      description: t("academics_page_feature_small_classes_desc"),
    },
    {
      icon: Award,
      title: t("academics_page_feature_regular_assessments_title"),
      description: t("academics_page_feature_regular_assessments_desc"),
    },
    {
      icon: Globe,
      title: t("academics_page_feature_digital_learning_title"),
      description: t("academics_page_feature_digital_learning_desc"),
    },
  ];

  const coCurricular = [
    {
      icon: BookMarked,
      title: t("academics_page_cocurricular_bhagavad_gita_title"),
      description: t("academics_page_cocurricular_bhagavad_gita_desc"),
      highlight: true,
    },
    {
      icon: Languages,
      title: t("academics_page_cocurricular_sanskrit_title"),
      description: t("academics_page_cocurricular_sanskrit_desc"),
      highlight: true,
    },
    {
      icon: Microscope,
      title: t("academics_page_cocurricular_science_club_title"),
      description: t("academics_page_cocurricular_science_club_desc"),
      highlight: false,
    },
    {
      icon: Palette,
      title: t("academics_page_cocurricular_art_craft_title"),
      description: t("academics_page_cocurricular_art_craft_desc"),
      highlight: false,
    },
    {
      icon: Music,
      title: t("academics_page_cocurricular_music_dance_title"),
      description: t("academics_page_cocurricular_music_dance_desc"),
      highlight: false,
    },
    {
      icon: Trophy,
      title: t("academics_page_cocurricular_sports_games_title"),
      description: t("academics_page_cocurricular_sports_games_desc"),
      highlight: false,
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("academics_page_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("academics_page_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("academics_page_intro")}
        </p>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-blue/10">
                    <feature.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("academics_page_curriculum_overview")}</h2>
        <Tabs defaultValue="pre-primary" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="pre-primary">{t("academics_page_tab_pre_primary")}</TabsTrigger>
            <TabsTrigger value="primary">{t("academics_page_tab_primary")}</TabsTrigger>
            <TabsTrigger value="middle">{t("academics_page_tab_middle")}</TabsTrigger>
            <TabsTrigger value="high">{t("academics_page_tab_high")}</TabsTrigger>
          </TabsList>

          {curriculum.map((level, index) => (
            <TabsContent key={index} value={level.value}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue">{level.grade}</CardTitle>
                  <p className="text-gray-600">{level.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {level.subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="secondary">{subject}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>


      {/* Co-Curricular Activities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("academics_page_co_curricular_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coCurricular.map((activity, index) =>
            activity.highlight ? (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow border-2 border-brand-orange bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden"
              >
                {/* Decorative glow strip at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-brand-orange to-yellow-400" />
                <CardHeader className="pt-6">
                  <div className="flex justify-center mb-1">
                    <Badge className="bg-brand-orange text-white text-xs px-3 py-0.5 mb-2">{t("academics_page_featured_badge")}</Badge>
                  </div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/40">
                      <activity.icon className="h-8 w-8 text-brand-orange" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-brand-orange">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ) : (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-brand-orange/10">
                      <activity.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">{t("academics_page_assessment_methods_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">

                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_assessment_1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_assessment_2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_assessment_3")}</span>
                </li>

              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">{t("academics_page_academic_support_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_support_1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_support_2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_support_3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_support_4")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{t("academics_page_support_5")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  );
}
