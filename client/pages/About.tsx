import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage, getLogo } from "@/lib/imageUtils";
import { Users, Award, BookOpen, Heart, Target, Eye } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  const stats = [
    { icon: Users, label: "Students", value: "500+" },
    { icon: BookOpen, label: "Teachers", value: "25+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Heart, label: "Happy Families", value: "400+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Values First",
      description: "We believe in nurturing character, integrity, and moral values alongside academic excellence.",
    },
    {
      icon: BookOpen,
      title: "Holistic Education",
      description: "Our curriculum balances academics, sports, arts, and cultural activities for well-rounded development.",
    },
    {
      icon: Target,
      title: "Excellence in Teaching",
      description: "Dedicated teachers with innovative teaching methods to inspire and engage every student.",
    },
    {
      icon: Eye,
      title: "Cultural Heritage",
      description: "Preserving and promoting our rich Kannada culture and traditions through various activities.",
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
          {t("about_snippet")} Located in the serene town of Sira, we have been shaping young minds 
          for over a decade, preparing them to become responsible citizens and future leaders.
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
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that nurtures the intellectual, physical, emotional, 
                and spiritual growth of every child. We aim to develop confident, compassionate, 
                and capable individuals who contribute positively to society while preserving 
                our cultural heritage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that creates an environment where 
                every child discovers their potential, develops critical thinking skills, 
                and grows into a well-rounded individual with strong values, academic 
                excellence, and cultural awareness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School History */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Our Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Sri Madhava Vidya Mandira was established with a vision to provide quality education 
                rooted in Indian values and culture. Since our inception, we have been committed to 
                nurturing young minds in the peaceful town of Sira, Tumkur District.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our school has grown from strength to strength, building a reputation for academic 
                excellence, character development, and cultural enrichment. We take pride in our 
                dedicated faculty, modern facilities, and the achievements of our students.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Established 2009</Badge>
                <Badge variant="secondary">CBSE Affiliated</Badge>
                <Badge variant="secondary">Co-educational</Badge>
                <Badge variant="secondary">English Medium</Badge>
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
