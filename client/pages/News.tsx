import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage, getAssetImage } from "@/lib/imageUtils";
import { Calendar, Users, Trophy, BookOpen, Music, Star } from "lucide-react";

export default function News() {
  const { t } = useI18n();

  const newsArticles = [
    {
      id: 1,
      title: t("news_page_article_1_title"),
      excerpt: t("news_page_article_1_excerpt"),
      content: t("news_page_article_1_content"),
      date: t("news_page_article_1_date"),
      category: t("news_page_article_1_category"),
      image: getSchoolImage(7),
      featured: true,
      icon: Trophy,
    },
    {
      id: 7,
      title: t("news_page_article_6_title"),
      excerpt: t("news_page_article_6_excerpt"),
      content: t("news_page_article_6_content"),
      date: t("news_page_article_6_date"),
      category: t("news_page_article_6_category"),
      images: [getAssetImage("24.png"), getAssetImage("25.png"), getAssetImage("26.png")],
      featured: true,
      icon: Users,
    },
    {
      id: 2,
      title: t("news_page_article_2_title"),
      excerpt: t("news_page_article_2_excerpt"),
      content: t("news_page_article_2_content"),
      date: t("news_page_article_2_date"),
      category: t("news_page_article_2_category"),
      image: getSchoolImage(8),
      featured: true,
      icon: BookOpen,
    },
    {
      id: 8,
      title: t("news_page_article_7_title"),
      excerpt: t("news_page_article_7_excerpt"),
      content: t("news_page_article_7_content"),
      date: t("news_page_article_7_date"),
      category: t("news_page_article_7_category"),
      image: getAssetImage("26(1).png"),
      featured: false,
      icon: Users,
    },
    {
      id: 3,
      title: t("news_page_article_3_title"),
      excerpt: t("news_page_article_3_excerpt"),
      content: t("news_page_article_3_content"),
      date: t("news_page_article_3_date"),
      category: t("news_page_article_3_category"),
      image: getSchoolImage(9),
      featured: false,
      icon: Music,
    },
    {
      id: 5,
      title: t("news_page_article_4_title"),
      excerpt: t("news_page_article_4_excerpt"),
      content: t("news_page_article_4_content"),
      date: t("news_page_article_4_date"),
      category: t("news_page_article_4_category"),
      images: [getAssetImage("28.jpg"), getAssetImage("28(1).jpg")],
      featured: false,
      icon: Users,
    },
    {
      id: 6,
      title: t("news_page_article_5_title"),
      excerpt: t("news_page_article_5_excerpt"),
      content: t("news_page_article_5_content"),
      date: t("news_page_article_5_date"),
      category: t("news_page_article_5_category"),
      image: getAssetImage("29.png"),
      featured: false,
      icon: Calendar,
    },
    {
      id: 9,
      title: t("news_page_article_8_title"),
      excerpt: t("news_page_article_8_excerpt"),
      content: t("news_page_article_8_content"),
      date: t("news_page_article_8_date"),
      category: t("news_page_article_8_category"),
      image: getAssetImage("27.jpeg"),
      featured: false,
      icon: Calendar,
    },
    {
      id: 10,
      title: t("news_page_article_9_title"),
      excerpt: t("news_page_article_9_excerpt"),
      content: t("news_page_article_9_content"),
      date: t("news_page_article_9_date"),
      category: t("news_page_article_9_category"),
      image: getAssetImage("27(1).jpg"),
      featured: false,
      icon: Users,
    },
    {
      id: 11,
      title: t("news_page_article_10_title"),
      excerpt: t("news_page_article_10_excerpt"),
      content: t("news_page_article_10_content"),
      date: t("news_page_article_10_date"),
      category: t("news_page_article_10_category"),
      image: getAssetImage("40.jpeg"),
      featured: false,
      icon: Users,
    },
    {
      id: 12,
      title: t("news_page_article_11_title"),
      excerpt: t("news_page_article_11_excerpt"),
      content: t("news_page_article_11_content"),
      date: t("news_page_article_11_date"),
      category: t("news_page_article_11_category"),
      image: getAssetImage("41.jpeg"),
      featured: false,
      icon: Users,
    },
    {
      id: 13,
      title: t("news_page_article_12_title"),
      excerpt: t("news_page_article_12_excerpt"),
      content: t("news_page_article_12_content"),
      date: t("news_page_article_12_date"),
      category: t("news_page_article_12_category"),
      image: getAssetImage("42.JPG"),
      featured: false,
      icon: Users,
    },
    {
      id: 14,
      title: t("news_page_article_13_title"),
      excerpt: t("news_page_article_13_excerpt"),
      content: t("news_page_article_13_content"),
      date: t("news_page_article_13_date"),
      category: t("news_page_article_13_category"),
      image: getAssetImage("30.jpeg"),
      featured: false,
      icon: Star,
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("news_page_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("news_page_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("news_page_intro")}
        </p>
      </section>

      {/* Regular News */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("news_page_latest_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                {"images" in article && article.images ? (
                  <div 
                    className="grid h-full gap-px bg-white/20"
                    style={{ gridTemplateColumns: `repeat(${article.images.length}, minmax(0, 1fr))` }}
                  >
                    {article.images.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${article.title} ${idx + 1}`}
                        className="w-full h-full object-cover" 
                      />
                    ))}
                  </div>
                ) : (
                  <img 
                    src={"image" in article ? article.image : ""} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                )}
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
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
