import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSchoolImage } from "@/lib/imageUtils";
import { Calendar, Users, Trophy, BookOpen, Music } from "lucide-react";

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

      {/* Regular News */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Latest News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
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
    </main>
  );
}
