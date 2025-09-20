import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSchoolImage } from "@/lib/imageUtils";
import { BookOpen, Users, Award, Globe, Calculator, Microscope, Palette, Music, Trophy } from "lucide-react";

export default function Academics() {
  const { t } = useI18n();

  const curriculum = [
    {
      grade: "Pre-Primary (Nursery - UKG)",
      subjects: ["English", "Kannada", "Mathematics", "Environmental Studies", "Art & Craft", "Music", "Physical Education"],
      description: "Play-based learning with focus on language development, basic numeracy, and social skills."
    },
    {
      grade: "Primary (I - V)",
      subjects: ["English", "Kannada", "Hindi", "Mathematics", "Environmental Studies", "Computer Science", "Art & Craft", "Physical Education"],
      description: "Foundation building with emphasis on reading, writing, arithmetic, and scientific thinking."
    },
    {
      grade: "Middle School (VI - VIII)",
      subjects: ["English", "Kannada", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Art", "Physical Education"],
      description: "Comprehensive curriculum preparing students for higher classes with practical learning."
    },
    {
      grade: "High School (IX - X)",
      subjects: ["English", "Kannada", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Physical Education"],
      description: "CBSE curriculum with focus on board examination preparation and career guidance."
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "CBSE Curriculum",
      description: "Following the Central Board of Secondary Education curriculum with local relevance and global perspective."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Limited student-teacher ratio ensuring individual attention and personalized learning."
    },
    {
      icon: Award,
      title: "Regular Assessments",
      description: "Continuous evaluation through unit tests, projects, and comprehensive examinations."
    },
    {
      icon: Globe,
      title: "Digital Learning",
      description: "Smart classrooms with modern technology to enhance learning experiences."
    }
  ];

  const coCurricular = [
    {
      icon: Microscope,
      title: "Science Club",
      description: "Hands-on experiments and science exhibitions to foster scientific temper."
    },
    {
      icon: Palette,
      title: "Art & Craft",
      description: "Creative expression through various art forms and craft activities."
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Cultural activities including classical music, folk dance, and modern performances."
    },
    {
      icon: Trophy,
      title: "Sports & Games",
      description: "Physical fitness through cricket, athletics, kho-kho, kabaddi, and indoor games."
    }
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Academic Excellence</h1>
        <p className="text-xl text-gray-600 mb-6">Nurturing minds, shaping futures</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our comprehensive academic program is designed to provide students with a strong foundation 
          in core subjects while fostering critical thinking, creativity, and cultural awareness.
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
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Curriculum Overview</h2>
        <Tabs defaultValue="pre-primary" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pre-primary">Pre-Primary</TabsTrigger>
            <TabsTrigger value="primary">Primary</TabsTrigger>
            <TabsTrigger value="middle">Middle School</TabsTrigger>
            <TabsTrigger value="high">High School</TabsTrigger>
          </TabsList>
          
          {curriculum.map((level, index) => (
            <TabsContent key={index} value={index === 0 ? "pre-primary" : index === 1 ? "primary" : index === 2 ? "middle" : "high"}>
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

      {/* Academic Calendar */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Academic Calendar 2024-25</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4">First Term</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>June 2024:</strong> School Reopens</li>
                  <li><strong>July 2024:</strong> Unit Test I</li>
                  <li><strong>August 2024:</strong> Independence Day Celebration</li>
                  <li><strong>September 2024:</strong> First Term Examination</li>
                  <li><strong>October 2024:</strong> Dussehra Holidays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4">Second Term</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>November 2024:</strong> Unit Test II</li>
                  <li><strong>December 2024:</strong> Annual Sports Day</li>
                  <li><strong>January 2025:</strong> Annual Day Celebration</li>
                  <li><strong>February 2025:</strong> Pre-Board Examination</li>
                  <li><strong>March 2025:</strong> Board Examination & Annual Results</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Co-Curricular Activities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Co-Curricular Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coCurricular.map((activity, index) => (
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
          ))}
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">Assessment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Continuous and Comprehensive Evaluation (CCE)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Unit Tests and Periodic Assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Project Work and Practical Assignments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Class Participation and Homework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Annual Board Examinations (Classes IX & X)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">Academic Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Remedial Classes for Weak Students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Extra Classes for Board Exam Preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Library with Reference Books</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Parent-Teacher Meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Career Guidance and Counseling</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Image */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={getSchoolImage(3)} 
            alt="Students in Classroom" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Learning Environment</h2>
            <p className="text-sm opacity-90">Interactive classrooms fostering curiosity and creativity</p>
          </div>
        </div>
      </section>
    </main>
  );
}
