import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage, getLogo } from "@/lib/imageUtils";
import { Users, Award, BookOpen, Heart, Target, Eye, Sparkles, Hand, Shield, Users2, Brain, UserCheck } from "lucide-react";

export default function About() {
  const { t, lang } = useI18n();

  const stats = [
    { icon: Users, label: "Students", value: "400+" },
    { icon: BookOpen, label: "Teachers And Support Staff", value: "20+" },
    { icon: Award, label: "Academic service", value: "40+" },
    { icon: Heart, label: "Families Benefiting", value: "500+" },
  ];

  const values = [
    {
      icon: Sparkles,
      title: t("samskara"),
      description: t("samskara_desc"),
    },
    {
      icon: Hand,
      title: t("seva_bhavana"),
      description: t("seva_bhavana_desc"),
    },
    {
      icon: Shield,
      title: t("shrama_swachata"),
      description: t("shrama_swachata_desc"),
    },
    {
      icon: Users2,
      title: t("ekata_sahabhava"),
      description: t("ekata_sahabhava_desc"),
    },
    {
      icon: Brain,
      title: t("adhyatma_atmavikasa"),
      description: t("adhyatma_atmavikasa_desc"),
    },
    {
      icon: UserCheck,
      title: t("svavalambane"),
      description: t("svavalambane_desc"),
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img src={getLogo()} alt="School Logo" className="h-20 w-20 rounded-full ring-4 ring-brand-orange/20" />
        </div>
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("school_name")}</h1>
        <p className="text-xl text-gray-600 mb-6">"Values – Education – Culture"</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("about_snippet")}
        </p>
      </section>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-brand-blue" />
                <div className="text-2xl font-bold text-brand-blue">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* School Image */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={getSchoolImage(1)} 
            alt="School Campus" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Our Beautiful Campus</h2>
            <p className="text-sm opacity-90">A peaceful environment for learning and growth</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("our_core_values")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-blue/10">
                    <value.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                <Target className="h-5 w-5" />
{t("our_mission")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {t("our_mission_desc")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                <Eye className="h-5 w-5" />
{t("our_vision")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {t("our_vision_desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Journey */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">{t("our_journey")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Language-specific content based on global toggle */}
              {lang === 'kn' ? (
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-lg font-semibold text-brand-blue mb-4">ಶಾಲೆ ನಡೆದು ಬಂದ ದಾರಿ</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾ ಮಂದಿರವು ರಾಷ್ಟ್ರೀಯ ಸ್ವಯಂಸೇವಕ ಸಂಘ, ಹಿಂದೂ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ, ವಿಶ್ವ ಹಿಂದೂ ಪರಿಷತ್ನ ಪ್ರೇರಣೆಯಿಂದ ಸಾಧನ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯ ಮಾರ್ಗದರ್ಶನದೊಡನೆ ಸ್ವರ್ಗೀಯ ಶ್ರೀಯುತ ಅಜಿತ್ ಕುಮಾರ್ ಅವರ ಅಮೃತ ಹಸ್ತದ ಮೂಲಕ ನಗರದ ಹಿರಿಯರ ಆಶೀರ್ವಾದದಿಂದ 1983- 84ರ ಏಪ್ರಿಲ್ 11ರಂದು ಶಿಶುಮಂದಿರವನ್ನು ಪ್ರಾರಂಭಿಸಲಾಯಿತು.
                    </p>
                    <p>
                      1988ರ ವರೆಗೆ ಶಿಶುಮಂದಿರದಿಂದ 4 ನೇ ತರಗತಿಯವರೆಗೂ ಬೆಳೆದು ಬೆಳೆದ ಶಾಲೆಯಲ್ಲಿ 1989ರಲ್ಲಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲಾಯಿತು.
                    </p>
                    <p>
                      ಇದೀಗ ನಮ್ಮ ಶಾಲೆಯಲ್ಲಿ 1ರಿಂದ 7ನೇ ತರಗತಿವರೆಗೆ(ಕನ್ನಡ ಮಾಧ್ಯಮ) ಅನುದಾನಿತ ಪ್ರಾಥಮಿಕ ವಿಭಾಗ, 8ರಿಂದ 10ನೇ ತರಗತಿವರೆಗೆ ಪ್ರೌಢಶಾಲೆ ಆಂಗ್ಲ ಮಾಧ್ಯಮದಲ್ಲಿ ನಡೆಯುತ್ತಿದ್ದು, 2022-23ರಲ್ಲಿ ಎಲ್. ಕೆ .ಜಿ , ಯು .ಕೆ .ಜಿ. (ಆಂಗ್ಲ ಮಾಧ್ಯಮ) ಪ್ರಾರಂಭವಾಯಿತು
                    </p>
                    <p>
                      2023-24ರಲ್ಲಿ ಒಂದನೇ ತರಗತಿಯನ್ನು ಆಂಗ್ಲ ಮಾಧ್ಯಮದಲ್ಲಿ ಪ್ರಾರಂಭಿಸಲಾಯಿತು.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-lg font-semibold text-brand-blue mb-4">Our School's Journey</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Sri Madhava Vidya Mandira was established with the inspiration from Rashtriya Swayamsevak Sangh, 
                      Hindu Seva Pratishthana, and Vishwa Hindu Parishad, under the guidance of Sadhana Shikshana Samsthe. 
                      With the blessed hands of the late Sri Ajit Kumar and the blessings of the city's elders, 
                      the Shishu Mandira (Children's Temple) was inaugurated on April 11, 1983-84.
                    </p>
                    <p>
                      The school grew from the Shishu Mandira up to 4th grade until 1988, and in 1989, 
                      the Senior Primary School was established.
                    </p>
                    <p>
                      Currently, our school operates with an aided primary section from 1st to 7th grade (Kannada medium), 
                      and high school from 8th to 10th grade (English medium). In 2022-23, LKG and UKG (English medium) 
                      were introduced.
                    </p>
                    <p>
                      In 2023-24, 1st grade was started in English medium.
                    </p>
                  </div>
                </div>
              )}

              {/* Key Milestones */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-brand-blue mb-4">
                  {lang === 'kn' ? 'ಮುಖ್ಯ ಮೈಲಿಗಲ್ಲುಗಳು' : 'Key Milestones'}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-brand-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-orange">1983-84</div>
                    <div className="text-sm text-gray-600">
                      {lang === 'kn' ? 'ಶಿಶುಮಂದಿರ ಪ್ರಾರಂಭ' : 'Shishu Mandira Inaugurated'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue">1989</div>
                    <div className="text-sm text-gray-600">
                      {lang === 'kn' ? 'ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ' : 'Senior Primary School'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-orange">2022-23</div>
                    <div className="text-sm text-gray-600">
                      {lang === 'kn' ? 'ಎಲ್.ಕೆ.ಜಿ & ಯು.ಕೆ.ಜಿ (ಆಂಗ್ಲ)' : 'LKG & UKG (English)'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue">2023-24</div>
                    <div className="text-sm text-gray-600">
                      {lang === 'kn' ? '1ನೇ ತರಗತಿ (ಆಂಗ್ಲ)' : '1st Grade (English)'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Principal's Message */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Principal's Message</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img 
                  src={getSchoolImage(2)} 
                  alt="Principal" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">Principal's Note</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Education is not just about acquiring knowledge; it's about building character, 
                  fostering creativity, and developing a sense of responsibility towards society. 
                  At Sri Madhava Vidya Mandira, we are committed to providing an environment where 
                  every child can thrive academically, socially, and personally. Our holistic 
                  approach ensures that students not only excel in their studies but also grow 
                  into compassionate, confident, and culturally aware individuals."
                </p>
                <p className="text-sm text-gray-600 mt-4 font-medium">— Principal, Sri Madhava Vidya Mandira</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
