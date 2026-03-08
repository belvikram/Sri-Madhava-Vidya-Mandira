import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  const mapSrc =
    "https://www.google.com/maps?q=Sree%20Madhava%20Vidya%20Mandira%2C%20Bhavani%20nagara%2C%20Sira%20%E2%80%93%20572137%2C%20Tumakuru%20District%2C%20Karnataka&output=embed";

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact_page_info_address_title"),
      details: [t("contact_page_info_address_detail")],
      description: t("contact_page_info_address_desc"),
    },
    {
      icon: Phone,
      title: t("contact_page_info_phone_title"),
      details: [t("contact_page_info_phone_detail")],
      description: t("contact_page_info_phone_desc"),
    },
    {
      icon: Mail,
      title: t("contact_page_info_email_title"),
      details: [t("contact_page_info_email_detail")],
      description: t("contact_page_info_email_desc"),
    },
    {
      icon: Clock,
      title: t("contact_page_info_hours_title"),
      details: [t("contact_page_time_mf"), t("contact_page_time_sat")],
      description: t("contact_page_info_hours_desc"),
    },
  ];

  const officeHours = [
    { day: t("contact_page_day_mf"), time: t("contact_page_time_mf_short") },
    { day: t("contact_page_day_sat"), time: t("contact_page_time_sat_short") },
    { day: t("contact_page_day_sun"), time: t("contact_page_time_closed") },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("contact_us")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("contact_page_hero_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("contact_page_hero_desc")}
        </p>
      </section>

      {/* Contact Information Grid */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-blue/10">
                    <info.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm font-medium text-gray-900">{detail}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-brand-blue">{t("contact_page_map_title")}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              title={t("contact_page_map_iframe_title")}
              src={mapSrc}
              className="h-[300px] w-full rounded-b-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CardContent>
        </Card>
      </section>

      {/* Office Hours */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">{t("contact_page_office_title")}</CardTitle>
            <p className="text-gray-600">{t("contact_page_office_subtitle")}</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {officeHours.map((schedule, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 mb-1">{schedule.day}</div>
                  <div className="text-sm text-gray-600">{schedule.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

    </main>
  );
}
