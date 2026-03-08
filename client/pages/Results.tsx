import { Download, FileText, Calendar, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n";

export default function Results() {
  const { t } = useI18n();
  const latestAcademicYear = "2024-25";

  const resultCategories = [
    {
      title: t("sslc_results"),
      description: t("sslc_description"),
      icon: Award,
      color: "bg-blue-500",
      results: [
        {
          year: "2024-25",
          exam: t("results_sslc_march_2025"),
          status: t("published"),
          downloads: [
            { name: t("results_class_10_overall_2024_25"), type: "PDF", size: "2.3 MB" }
          ]
        },
        {
          year: "2023-24",
          exam: t("results_sslc_march_2024"),
          status: t("published"),
          downloads: [
            { name: t("results_class_10_overall_2023_24"), type: "PDF", size: "2.1 MB" }
          ]
        }
      ]
    },
    {
      title: t("results_all_classes_title"),
      description: t("results_all_classes_description"),
      icon: BookOpen,
      color: "bg-green-500",
      results: [
        {
          year: "2024-25",
          exam: t("results_all_classes_exam_2024_25"),
          status: t("published"),
          downloads: [
            { name: t("results_all_classes_download_2024_25"), type: "PDF", size: "3.4 MB" }
          ]
        },
        {
          year: "2023-24",
          exam: t("results_all_classes_exam_2023_24"),
          status: t("published"),
          downloads: [
            { name: t("results_all_classes_download_2023_24"), type: "PDF", size: "3.1 MB" }
          ]
        }
      ]
    }
  ];

  const handleDownload = (fileName: string) => {
    // Create a blank PDF for demonstration
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsO8CjIgMCBvYmoKPDwKL0xlbmd0aCAzIDAgUgovRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0K';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("results_title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t("results_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4" />
                <span>{t("academic_year")}: {latestAcademicYear}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span>{t("latest_results")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {resultCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${category.color} text-white`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {category.results.map((result, resultIndex) => (
                        <div key={resultIndex}>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {result.exam}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {t("academic_year")}: {result.year}
                              </p>
                            </div>
                            <Badge 
                              variant={result.status === "Published" ? "default" : "secondary"}
                              className="bg-green-100 text-green-800 hover:bg-green-200"
                            >
                              {result.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {result.downloads.map((download, downloadIndex) => (
                              <div
                                key={downloadIndex}
                                className="border border-gray-200 rounded-lg p-4 hover:border-brand-blue/30 hover:shadow-md transition-all duration-200"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-brand-blue" />
                                    <div>
                                      <h4 className="font-medium text-gray-900">
                                        {download.name}
                                      </h4>
                                      <p className="text-sm text-gray-500">
                                        {download.type} • {download.size}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                
                                <Button
                                  onClick={() => handleDownload(`${result.exam} - ${download.name}.pdf`)}
                                  className="w-full"
                                  size="sm"
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  {t("download")}
                                </Button>
                              </div>
                            ))}
                          </div>
                          
                          {resultIndex < category.results.length - 1 && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("important_info")}
            </h2>
            <div className="max-w-2xl mx-auto text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("upcoming_features")}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• {t("upcoming_feature_1")}</li>
                  <li>• {t("upcoming_feature_2")}</li>
                  <li>• {t("upcoming_feature_3")}</li>
                  <li>• {t("upcoming_feature_4")}</li>
                  <li>• {t("upcoming_feature_5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
