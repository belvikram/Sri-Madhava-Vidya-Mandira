import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { getLogo } from "@/lib/imageUtils";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 sm:py-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue ring-1 ring-brand-blue/20">
            <span>{t("school_name_full")}</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="block text-brand-blue">{t("school_name")}</span>
            <span className="mt-2 block text-gray-800 text-xl sm:text-2xl font-semibold">
              “{t("tagline")}”
            </span>
          </h1>
          <p className="mt-4 text-gray-600">
            {t("about_snippet")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/admissions" className="btn-accent">{t("admissions_cta")}</Link>
            <Link to="/academics" className="btn-primary">{t("academics_cta")}</Link>
            <Link to="/contact" className="btn bg-white text-brand-blue border border-brand-blue hover:bg-blue-50">{t("contact_cta")}</Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] w-full rounded-xl bg-gradient-to-tr from-brand-blue to-brand-orange p-1 shadow-xl">
            <div className="h-full w-full overflow-hidden rounded-[10px] bg-white">
              <img
                src="/assets/HeroImage.png"
                alt="School campus"
                className="h-full w-full object-cover object-center opacity-90"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5">
            <img src={getLogo()} alt="Logo" className="h-8 w-8 rounded" />
            <div className="text-sm">
              <div className="font-semibold text-brand-blue">{t("school_name")}</div>
              <div className="text-gray-500">{t("tagline")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
