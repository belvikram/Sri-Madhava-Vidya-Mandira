import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSchoolImage } from "@/lib/imageUtils";
import { FileText, Users, DollarSign, CheckCircle, MapPin, Phone } from "lucide-react";

export default function Admissions() {
  const { t } = useI18n();

  const admissionProcess = [
    {
      step: 1,
      title: t("admissions_page_process_1_title"),
      description: t("admissions_page_process_1_desc"),
      icon: FileText,
    },
    {
      step: 2,
      title: t("admissions_page_process_2_title"),
      description: t("admissions_page_process_2_desc"),
      icon: CheckCircle,
    },
    {
      step: 3,
      title: t("admissions_page_process_3_title"),
      description: t("admissions_page_process_3_desc"),
      icon: Users,
    },
    {
      step: 4,
      title: t("admissions_page_process_4_title"),
      description: t("admissions_page_process_4_desc"),
      icon: DollarSign,
    },
  ];

  const requiredDocuments = [
    t("admissions_page_doc_birth_certificate"),
    t("admissions_page_doc_transfer_certificate"),
    t("admissions_page_doc_academic_records"),
    t("admissions_page_doc_aadhaar"),
    t("admissions_page_doc_bank_account"),
    t("admissions_page_doc_photos"),
    t("admissions_page_doc_caste_certificate"),
    t("admissions_page_doc_income_certificate"),
    t("admissions_page_doc_medical_certificate"),
  ];

  const admissionCriteria = [
    t("admissions_page_criteria_1"),
    t("admissions_page_criteria_2"),
    t("admissions_page_criteria_3"),
    t("admissions_page_criteria_4"),
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("admissions_page_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("admissions_page_year")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{t("admissions_page_intro")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="btn-primary">{t("admissions_page_download_application")}</Button>
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
            {t("admissions_page_schedule_visit")}
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("admissions_page_process_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionProcess.map((process, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg font-bold">
                      {process.step}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center">
                      <process.icon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Required Documents */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">{t("admissions_page_required_documents_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">{t("admissions_page_criteria_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                {admissionCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-brand-blue font-bold">•</span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fee Concession Banner */}
      <section className="mb-12">
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-4 text-center">
          <p className="text-sm md:text-base font-medium text-blue-900">{t("admissions_page_fee_concession_banner")}</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">{t("admissions_page_why_choose_title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">{t("admissions_page_why_1_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{t("admissions_page_why_1_desc")}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">{t("admissions_page_why_2_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{t("admissions_page_why_2_desc")}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">{t("admissions_page_why_3_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{t("admissions_page_why_3_desc")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Image */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img src={getSchoolImage(4)} alt={t("admissions_page_image_alt")} className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{t("admissions_page_image_title")}</h2>
            <p className="text-sm opacity-90">{t("admissions_page_image_desc")}</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">{t("admissions_page_more_info_title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="font-medium">{t("admissions_page_address_label")}</p>
                  <p className="text-sm text-gray-600">{t("admissions_page_contact_address")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="font-medium">{t("admissions_page_phone_label")}</p>
                  <p className="text-sm text-gray-600">{t("admissions_page_phone_value")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="font-medium">{t("admissions_page_email_label")}</p>
                  <p className="text-sm text-gray-600">{t("admissions_page_email_value")}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="btn-primary mr-4">{t("admissions_cta")}</Button>
              <Button variant="outline">{t("admissions_page_download_brochure")}</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
