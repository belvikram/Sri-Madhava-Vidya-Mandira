import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSchoolImage } from "@/lib/imageUtils";
import { Calendar, Clock, MapPin, Users, Trophy, BookOpen, Music, Palette } from "lucide-react";

export default function News() {
  const { t } = useI18n();

  const newsArticles = [
    {
      id: 1,
      title: "Annual Sports Day 2024 - A Grand Success",
      excerpt: "Students showcased exceptional athletic talents in various track and field events, with over 200 participants competing in different categories.",
      content: "The Annual Sports Day 2024 was held on December 15th with great enthusiasm and participation from all students. The event featured various athletic competitions including 100m, 200m, 400m races, long jump, high jump, shot put, and relay races. The day was filled with excitement as students competed for medals and trophies in their respective age groups.",
      date: "December 18, 2024",
      category: "Sports",
      image: getSchoolImage(7),
      featured: true,
      icon: Trophy
    },
    {
      id: 2,
      title: "Science Exhibition 2024 - Innovation in Action",
      excerpt: "Students displayed innovative science projects and experiments, showcasing their creativity and scientific understanding.",
      content: "The Science Exhibition 2024 was a remarkable display of student innovation and scientific curiosity. Students from classes VI to X presented various projects covering topics like renewable energy, environmental conservation, robotics, and chemistry experiments.",
      date: "November 25, 2024",
      category: "Academics",
      image: getSchoolImage(8),
      featured: true,
      icon: BookOpen
    },
    {
      id: 3,
      title: "Cultural Fest 2024 - Celebrating Heritage",
      excerpt: "Traditional dance, music, and drama performances celebrated our rich cultural heritage with vibrant presentations.",
      content: "The Cultural Fest 2024 was a beautiful celebration of our rich Indian heritage. Students performed traditional dances, classical music, and drama presentations that showcased the diversity and beauty of Indian culture.",
      date: "October 30, 2024",
      category: "Cultural",
      image: getSchoolImage(9),
      featured: false,
      icon: Music
    },
    {
      id: 4,
      title: "Art Exhibition - Creative Expressions",
      excerpt: "Students displayed their artistic talents through paintings, sculptures, and craftwork in the annual art exhibition.",
      content: "The Art Exhibition featured outstanding creative works by students from all classes. The exhibition included paintings, drawings, sculptures, and various craft items that demonstrated the artistic skills and creativity of our students.",
      date: "October 15, 2024",
      category: "Arts",
      image: getSchoolImage(10),
      featured: false,
      icon: Palette
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting - Building Partnerships",
      excerpt: "Successful parent-teacher meeting held to discuss student progress and academic development.",
      content: "The quarterly parent-teacher meeting was conducted successfully with high participation from parents. Teachers discussed individual student progress, academic performance, and areas for improvement with parents.",
      date: "September 28, 2024",
      category: "Academics",
      image: getSchoolImage(11),
      featured: false,
      icon: Users
    },
    {
      id: 6,
      title: "Independence Day Celebration",
      excerpt: "Students celebrated Independence Day with patriotic songs, speeches, and cultural performances.",
      content: "The Independence Day celebration was marked with patriotic fervor as students performed patriotic songs, delivered speeches on freedom fighters, and participated in cultural programs celebrating India's independence.",
      date: "August 16, 2024",
      category: "Events",
      image: getSchoolImage(12),
      featured: false,
      icon: Calendar
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Day Celebration",
      date: "January 25, 2025",
      time: "6:00 PM",
      venue: "School Auditorium",
      description: "Grand annual day celebration with cultural performances and awards ceremony"
    },
    {
      title: "Board Exam Preparation Workshop",
      date: "February 10, 2025",
      time: "10:00 AM",
      venue: "Conference Hall",
      description: "Special workshop for Class X students on board exam preparation strategies"
    },
    {
      title: "Career Guidance Session",
      date: "February 20, 2025",
      time: "11:00 AM",
      venue: "Library",
      description: "Career counseling session for Class IX and X students"
    }
  ];

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">News & Events</h1>
        <p className="text-xl text-gray-600 mb-6">Stay updated with school activities and achievements</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover the latest happenings at Sri Madhava Vidya Mandira, from academic achievements 
          to cultural celebrations and sporting events.
        </p>
      </section>

      {/* Featured News */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Featured News</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredNews.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {article.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <article.icon className="h-4 w-4" />
                    <span className="text-sm">{article.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Regular News */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Latest News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <article.icon className="h-4 w-4" />
                  <span>{article.category}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                <p className="text-sm text-gray-600">{article.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Upcoming Events</CardTitle>
            <p className="text-gray-600">Mark your calendars for these important events</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* News Categories */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">News Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <BookOpen className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <span className="text-sm font-medium">Academics</span>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Trophy className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <span className="text-sm font-medium">Sports</span>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Music className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <span className="text-sm font-medium">Cultural</span>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Palette className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <span className="text-sm font-medium">Arts</span>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Users className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <span className="text-sm font-medium">Events</span>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Calendar className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <span className="text-sm font-medium">Announcements</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Newsletter Subscription */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue text-center">Stay Updated</CardTitle>
            <p className="text-gray-600 text-center">
              Subscribe to our newsletter for the latest news and updates
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <Button className="btn-primary">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
