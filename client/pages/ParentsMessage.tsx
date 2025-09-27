import { Heart, Users, MessageCircle, Star, Quote, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function ParentsMessage() {
  const { t } = useI18n();

  const parentMessages = [
    {
      name: "Mrs. Priya Sharma",
      child: "Arjun Sharma (Class 10)",
      message: t("parent_message_1"),
      rating: 5,
      date: "December 2024",
      location: "Bangalore"
    },
    {
      name: "Mr. Rajesh Kumar",
      child: "Sneha Kumar (Class 8)",
      message: t("parent_message_2"),
      rating: 5,
      date: "November 2024",
      location: "Sira"
    },
    {
      name: "Dr. Meera Patel",
      child: "Vikram Patel (Class 9)",
      message: t("parent_message_3"),
      rating: 5,
      date: "October 2024",
      location: "Tumkur"
    },
    {
      name: "Mrs. Anita Reddy",
      child: "Kavya Reddy (Class 7)",
      message: t("parent_message_4"),
      rating: 5,
      date: "September 2024",
      location: "Sira"
    },
    {
      name: "Mr. Suresh Desai",
      child: "Rohit Desai (Class 6)",
      message: t("parent_message_5"),
      rating: 5,
      date: "August 2024",
      location: "Bangalore"
    },
    {
      name: "Mrs. Lakshmi Nair",
      child: "Divya Nair (Class 5)",
      message: t("parent_message_6"),
      rating: 5,
      date: "July 2024",
      location: "Sira"
    }
  ];

  const statistics = [
    {
      icon: Users,
      number: "400+",
      label: t("parent_stat_1")
    },
    {
      icon: Star,
      number: "4.9/5",
      label: t("parent_stat_2")
    },
    {
      icon: Heart,
      number: "98%",
      label: t("parent_stat_3")
    },
    {
      icon: MessageCircle,
      number: "200+",
      label: t("parent_stat_4")
    }
  ];

  const testimonials = [
    {
      quote: t("parent_testimonial_1"),
      author: "Mrs. Geetha Rao",
      position: "Parent of Class 10 student"
    },
    {
      quote: t("parent_testimonial_2"),
      author: "Mr. Venkatesh Iyer",
      position: "Parent of Class 8 student"
    },
    {
      quote: t("parent_testimonial_3"),
      author: "Dr. Sunita Agarwal",
      position: "Parent of Class 9 student"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("parents_message_title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t("parents_message_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" />
                <span>{t("parent_community")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                <span>{t("parent_voices")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("parent_community_stats")}
              </h2>
              <p className="text-gray-600">
                {t("parent_community_stats_desc")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Messages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("parent_messages")}
              </h2>
              <p className="text-gray-600">
                {t("parent_messages_desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parentMessages.map((message, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{message.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {message.child}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(message.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-brand-blue/30" />
                      <p className="text-gray-700 italic leading-relaxed pl-4">
                        "{message.message}"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{message.date}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {message.location}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("parent_testimonials")}
              </h2>
              <p className="text-gray-600">
                {t("parent_testimonials_desc")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-brand-blue/30 mx-auto mb-4" />
                    <p className="text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {t("parent_join_community")}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t("parent_join_community_desc")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
                {t("parent_share_experience")}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent">
                {t("parent_contact_us")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
