import AnnouncementTicker from "@/components/AnnouncementTicker";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import { useI18n } from "@/lib/i18n";
import Activities from "@/components/Activities";
import GalleryPreview from "@/components/GalleryPreview";

export default function Index() {
  const { t } = useI18n();

  return (
    <main>
      <AnnouncementTicker />
      <Hero />
      <QuickLinks />
      <Activities />
      <GalleryPreview />
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-brand-blue">{t("about")}</h2>
            <p className="mt-3 text-gray-700">{t("about_snippet")}</p>
            <div className="mt-4 text-sm text-gray-500">{t("principal_message")}: “{t("tagline")}”</div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-brand-blue">{t("contact_us")}</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><span className="font-medium">{t("address_label")}:</span> {t("address_value")}</li>
              <li><span className="font-medium">{t("phone_label")}:</span> +91-00000 00000</li>
              <li><span className="font-medium">{t("email_label")}:</span> info@smvm.edu.in</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
