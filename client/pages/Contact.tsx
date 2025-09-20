import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const mapSrc =
    "https://www.google.com/maps?q=Bhumisinganahalli%2C%20Sira%20%E2%80%93%20572137%2C%20Tumkur%20District%2C%20Karnataka&output=embed";

  return (
    <main className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-brand-blue">{t("contact_us")}</h1>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><span className="font-medium">{t("address_label")}:</span> {t("address_value")}</li>
            <li><span className="font-medium">{t("phone_label")}:</span> +91-00000 00000</li>
            <li><span className="font-medium">{t("email_label")}:</span> info@smvm.edu.in</li>
          </ul>
          <form className="mt-6 grid grid-cols-1 gap-3">
            <input className="w-full rounded-md border p-2" placeholder="Name" aria-label="Name" />
            <input className="w-full rounded-md border p-2" placeholder="Email" aria-label="Email" />
            <textarea className="w-full rounded-md border p-2" placeholder="Message" rows={4} aria-label="Message" />
            <button className="btn-accent w-max">Send</button>
          </form>
        </div>
        <div className="overflow-hidden rounded-xl border shadow-sm">
          <iframe
            title="Google Map"
            src={mapSrc}
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
