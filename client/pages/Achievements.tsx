import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage } from "@/lib/imageUtils";
import { Trophy, Medal, Award, Star, Users, Target, TrendingUp, Calendar } from "lucide-react";

export default function Achievements() {
  const { t } = useI18n();

  const achievements = [
    {
      id: 1,
      title: "CBSE Board Results Excellence",
      category: "Academic",
      year: "2024",
      description: "95% of students scored above 80% in Class X board examinations",
      details: "Our Class X students achieved outstanding results with 95% scoring above 80%, including 15 students scoring above 95%. This reflects our commitment to academic excellence and quality teaching.",
      image: getSchoolImage(1),
      icon: Award,
      level: "School Level",
      participants: "50 students"
    },
    {
      id: 2,
      title: "District Level Science Fair Winner",
      category: "Science",
      year: "2024",
      description: "First place in District Science Fair for innovative renewable energy project",
      details: "Our students secured first place in the District Science Fair with their innovative solar-powered irrigation system project. The project demonstrated practical application of renewable energy concepts.",
      image: getSchoolImage(2),
      icon: Trophy,
      level: "District Level",
      participants: "3 students"
    },
    {
      id: 3,
      title: "State Level Sports Championship",
      category: "Sports",
      year: "2024",
      description: "Championship in State Level Kho-Kho tournament",
      details: "Our school team won the State Level Kho-Kho Championship, defeating 24 schools from across Karnataka. The team displayed exceptional teamwork and sportsmanship throughout the tournament.",
      image: getSchoolImage(3),
      icon: Medal,
      level: "State Level",
      participants: "12 students"
    },
    {
      id: 4,
      title: "Cultural Festival Excellence",
      category: "Cultural",
      year: "2024",
      description: "Best Performance Award in State Cultural Festival",
      details: "Our cultural team won the Best Performance Award in the State Cultural Festival for their traditional dance presentation. The performance showcased Karnataka's rich cultural heritage.",
      image: getSchoolImage(4),
      icon: Star,
      level: "State Level",
      participants: "8 students"
    },
    {
      id: 5,
      title: "Mathematics Olympiad Success",
      category: "Academic",
      year: "2024",
      description: "Three students qualified for National Mathematics Olympiad",
      details: "Three of our students qualified for the National Mathematics Olympiad, demonstrating exceptional mathematical skills and problem-solving abilities. This is the highest number of qualifiers from our school.",
      image: getSchoolImage(5),
      icon: Award,
      level: "National Level",
      participants: "3 students"
    },
    {
      id: 6,
      title: "Environmental Conservation Award",
      category: "Environment",
      year: "2024",
      description: "Recognition for outstanding environmental conservation initiatives",
      details: "Our school received the Environmental Conservation Award for our comprehensive green initiatives including solar power installation, waste management programs, and tree plantation drives.",
      image: getSchoolImage(6),
      icon: Trophy,
      level: "District Level",
      participants: "Entire School"
    }
  ];

  const statistics = [
    { label: "Academic Achievements", value: "50+", icon: Award },
    { label: "Sports Victories", value: "40+", icon: Trophy },
    { label: "Cultural Awards", value: "15+", icon: Star },
    { label: "Science Competitions", value: "20+", icon: Medal }
  ];

  const studentAchievements = [
    {
      student: "Priya Sharma",
      class: "Class X",
      achievement: "95% in CBSE Board Exams",
      category: "Academic",
      year: "2024"
    },
    {
      student: "Rahul Kumar",
      class: "Class IX",
      achievement: "State Level Cricket Championship",
      category: "Sports",
      year: "2024"
    },
    {
      student: "Ananya Reddy",
      class: "Class VIII",
      achievement: "National Mathematics Olympiad Qualifier",
      category: "Academic",
      year: "2024"
    },
    {
      student: "Kavya Nair",
      class: "Class VII",
      achievement: "Best Performer in Cultural Festival",
      category: "Cultural",
      year: "2024"
    },
    {
      student: "Arjun Singh",
      class: "Class VI",
      achievement: "Science Fair Innovation Award",
      category: "Science",
      year: "2024"
    }
  ];

  const upcomingCompetitions = [
    {
      name: "National Science Olympiad",
      date: "February 15, 2025",
      level: "National",
      participants: "5 students"
    },
    {
      name: "State Level Sports Meet",
      date: "March 10, 2025",
      level: "State",
      participants: "15 students"
    },
    {
      name: "Inter-School Debate Competition",
      date: "March 25, 2025",
      level: "District",
      participants: "3 students"
    }
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Our Achievements</h1>
        <p className="text-xl text-gray-600 mb-6">Celebrating excellence and success</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At Sri Madhava Vidya Mandira, we take pride in the outstanding achievements of our students 
          and school in various fields including academics, sports, culture, and innovation.
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
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Major Achievements</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
            <CardTitle className="text-2xl text-brand-blue">Student Achievements 2024</CardTitle>
            <p className="text-gray-600">Outstanding individual achievements by our students</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentAchievements.map((student, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{student.student}</h3>
                      <Badge variant="secondary">{student.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{student.class}</p>
                    <p className="text-sm text-gray-700 font-medium">{student.achievement}</p>
                  </div>
                  <div className="text-sm text-gray-500">{student.year}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievement Timeline */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Achievement Timeline</CardTitle>
            <p className="text-gray-600">Our journey of excellence over the years</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">24</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">2024 - Year of Excellence</h3>
                  <p className="text-sm text-gray-600">Multiple state-level achievements in academics, sports, and culture</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">23</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">2023 - Academic Breakthrough</h3>
                  <p className="text-sm text-gray-600">First time qualifying for National Mathematics Olympiad</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">22</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">2022 - Sports Excellence</h3>
                  <p className="text-sm text-gray-600">District champions in multiple sports categories</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Upcoming Competitions */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Upcoming Competitions</CardTitle>
            <p className="text-gray-600">Students preparing for upcoming challenges</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingCompetitions.map((competition, index) => (
                <div key={index} className="p-4 border rounded-lg text-center hover:bg-gray-50 transition-colors">
                  <Target className="h-8 w-8 text-brand-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{competition.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{competition.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Badge variant="outline" className="text-xs">{competition.level}</Badge>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{competition.participants}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recognition & Awards */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={getSchoolImage(7)} 
            alt="Awards and Recognition" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Recognition & Awards</h2>
            <p className="text-sm opacity-90">Celebrating our commitment to excellence in education</p>
          </div>
          <div className="absolute top-6 right-6">
            <div className="bg-white/90 text-brand-blue px-4 py-2 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-1" />
                <span className="text-sm font-medium">Growing Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
