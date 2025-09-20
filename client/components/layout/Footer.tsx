import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { getLogo } from "@/lib/imageUtils";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={getLogo()} alt="Logo" className="h-10 w-10 rounded" />
            <div className="font-semibold text-brand-blue">{t("school_name")}</div>
          </div>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">{t("school_name_full")}</p>
          <p className="mt-2 text-sm text-brand-orange font-medium">{t("footer_motto")}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{t("footer_quick_links")}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-brand-orange" to="/admissions">{t("admissions")}</Link></li>
            <li><Link className="hover:text-brand-orange" to="/academics">{t("academics")}</Link></li>
            <li><Link className="hover:text-brand-orange" to="/news">{t("news")}</Link></li>
            <li><Link className="hover:text-brand-orange" to="/contact">{t("contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{t("footer_contact")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><span className="font-medium">{t("address_label")}:</span> {t("address_value")}</li>
            <li><span className="font-medium">{t("phone_label")}:</span> +91-00000 00000</li>
            <li><span className="font-medium">{t("email_label")}:</span> info@smvm.edu.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {year} {t("school_name")}. {t("copyright")}
      </div>
    </footer>
  );
}
