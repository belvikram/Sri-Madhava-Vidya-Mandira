import { Download, FileText, Calendar, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Results() {
  const currentYear = new Date().getFullYear();
  const academicYear = `${currentYear}-${currentYear + 1}`;

  const resultCategories = [
    {
      title: "SSLC Results (Class 10)",
      description: "Secondary School Leaving Certificate examination results for Class 10",
      icon: Award,
      color: "bg-blue-500",
      results: [
        {
          year: academicYear,
          exam: "SSLC March 2024",
          status: "Published",
          downloads: [
            { name: "Class 10 Overall Results", type: "PDF", size: "2.3 MB" },
            { name: "Class 10 Subject-wise Results", type: "PDF", size: "1.8 MB" },
            { name: "Class 10 Merit List", type: "PDF", size: "0.9 MB" },
            { name: "Class 10 Grade Analysis", type: "PDF", size: "1.2 MB" }
          ]
        },
        {
          year: `${currentYear - 1}-${currentYear}`,
          exam: "SSLC March 2023",
          status: "Published",
          downloads: [
            { name: "Class 10 Overall Results", type: "PDF", size: "2.1 MB" },
            { name: "Class 10 Subject-wise Results", type: "PDF", size: "1.7 MB" },
            { name: "Class 10 Merit List", type: "PDF", size: "0.8 MB" }
          ]
        }
      ]
    },
    {
      title: "Class 6-9 Results",
      description: "Examination results for Classes 6, 7, 8, and 9",
      icon: BookOpen,
      color: "bg-green-500",
      results: [
        {
          year: academicYear,
          exam: "Annual Examination 2024",
          status: "Published",
          downloads: [
            { name: "Class 9 Results", type: "PDF", size: "1.1 MB" },
            { name: "Class 8 Results", type: "PDF", size: "1.0 MB" },
            { name: "Class 7 Results", type: "PDF", size: "0.9 MB" },
            { name: "Class 6 Results", type: "PDF", size: "0.8 MB" }
          ]
        },
        {
          year: academicYear,
          exam: "Half-yearly Examination 2024",
          status: "Published",
          downloads: [
            { name: "Classes 6-9 Combined Results", type: "PDF", size: "2.5 MB" },
            { name: "Subject-wise Analysis (6-9)", type: "PDF", size: "1.8 MB" }
          ]
        }
      ]
    },
    {
      title: "Class 1-5 Results",
      description: "Examination results for Classes 1, 2, 3, 4, and 5",
      icon: FileText,
      color: "bg-purple-500",
      results: [
        {
          year: academicYear,
          exam: "Annual Examination 2024",
          status: "Published",
          downloads: [
            { name: "Class 5 Results", type: "PDF", size: "0.7 MB" },
            { name: "Class 4 Results", type: "PDF", size: "0.6 MB" },
            { name: "Class 3 Results", type: "PDF", size: "0.5 MB" },
            { name: "Class 2 Results", type: "PDF", size: "0.4 MB" },
            { name: "Class 1 Results", type: "PDF", size: "0.3 MB" }
          ]
        },
        {
          year: academicYear,
          exam: "Quarterly Examination 2024",
          status: "Published",
          downloads: [
            { name: "Classes 1-5 Combined Results", type: "PDF", size: "1.5 MB" },
            { name: "Progress Report (1-5)", type: "PDF", size: "1.2 MB" }
          ]
        }
      ]
    },
    {
      title: "Special Examinations",
      description: "Scholarship tests, Olympiads, and special assessments",
      icon: Users,
      color: "bg-orange-500",
      results: [
        {
          year: academicYear,
          exam: "Scholarship Test 2024",
          status: "Published",
          downloads: [
            { name: "Class 10 Scholarship Results", type: "PDF", size: "0.8 MB" },
            { name: "Class 9 Scholarship Results", type: "PDF", size: "0.7 MB" },
            { name: "Class 8 Scholarship Results", type: "PDF", size: "0.6 MB" }
          ]
        },
        {
          year: academicYear,
          exam: "Science Olympiad 2024",
          status: "Published",
          downloads: [
            { name: "Olympiad Results (All Classes)", type: "PDF", size: "0.9 MB" },
            { name: "Merit Certificate List", type: "PDF", size: "0.5 MB" }
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
              Examination Results
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Access all examination results and academic achievements
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4" />
                <span>Academic Year: {academicYear}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span>Latest Results Available</span>
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
                                Academic Year: {result.year}
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
                                  Download
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
              Important Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Result Access
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Results are published within 30 days of examination</li>
                  <li>• All results are available in PDF format</li>
                  <li>• Download links are valid for 1 year</li>
                  <li>• Results available for Classes 1-10</li>
                  <li>• For any queries, contact the examination office</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Academic Support
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Re-evaluation applications available online</li>
                  <li>• Duplicate certificates can be requested</li>
                  <li>• Academic counseling for result analysis</li>
                  <li>• Progress tracking for all classes</li>
                  <li>• Parent-teacher meeting schedules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
