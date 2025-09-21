import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function FAQs() {
  const { t } = useI18n();
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: t("faq_admissions"),
      icon: "🎓",
      faqs: [
        {
          question: t("faq_admission_process"),
          answer: t("faq_admission_process_answer")
        },
        {
          question: t("faq_admission_age"),
          answer: t("faq_admission_age_answer")
        },
        {
          question: t("faq_admission_documents"),
          answer: t("faq_admission_documents_answer")
        },
        {
          question: t("faq_admission_fees"),
          answer: t("faq_admission_fees_answer")
        }
      ]
    },
    {
      title: t("faq_academics"),
      icon: "📚",
      faqs: [
        {
          question: t("faq_curriculum"),
          answer: t("faq_curriculum_answer")
        },
        {
          question: t("faq_exams"),
          answer: t("faq_exams_answer")
        },
        {
          question: t("faq_homework"),
          answer: t("faq_homework_answer")
        },
        {
          question: t("faq_extra_curricular"),
          answer: t("faq_extra_curricular_answer")
        }
      ]
    },
    {
      title: t("faq_facilities"),
      icon: "🏫",
      faqs: [
        {
          question: t("faq_library"),
          answer: t("faq_library_answer")
        },
        {
          question: t("faq_labs"),
          answer: t("faq_labs_answer")
        },
        {
          question: t("faq_sports"),
          answer: t("faq_sports_answer")
        },
        {
          question: t("faq_transport"),
          answer: t("faq_transport_answer")
        }
      ]
    },
    {
      title: t("faq_general"),
      icon: "❓",
      faqs: [
        {
          question: t("faq_school_hours"),
          answer: t("faq_school_hours_answer")
        },
        {
          question: t("faq_holidays"),
          answer: t("faq_holidays_answer")
        },
        {
          question: t("faq_parent_teacher"),
          answer: t("faq_parent_teacher_answer")
        },
        {
          question: t("faq_contact"),
          answer: t("faq_contact_answer")
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("faqs_title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t("faqs_subtitle")}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder={t("faq_search_placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-gray-900 bg-white border-0 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("faq_no_results")}
                </h3>
                <p className="text-gray-600">
                  {t("faq_no_results_desc")}
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.faqs.map((faq, faqIndex) => {
                          const globalIndex = categoryIndex * 100 + faqIndex;
                          return (
                            <Collapsible
                              key={faqIndex}
                              open={openItems.includes(globalIndex)}
                              onOpenChange={() => toggleItem(globalIndex)}
                            >
                              <CollapsibleTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-between p-4 h-auto text-left hover:bg-gray-50"
                                >
                                  <span className="font-medium text-gray-900">
                                    {faq.question}
                                  </span>
                                  <ChevronDown
                                    className={`h-5 w-5 transition-transform ${
                                      openItems.includes(globalIndex) ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="px-4 pb-4">
                                <div className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("faq_still_have_questions")}
            </h2>
            <p className="text-gray-600 mb-8">
              {t("faq_contact_us_desc")}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("faq_phone_support")}
                </h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("faq_email_support")}
                </h3>
                <p className="text-gray-600">info@smvm.edu.in</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("faq_visit_us")}
                </h3>
                <p className="text-gray-600">{t("faq_visit_address")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
