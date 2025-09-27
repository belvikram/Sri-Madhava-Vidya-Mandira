import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const links = (t: (k: string) => string) => [
  { to: "/admissions", label: t("admissions"), color: "from-brand-orange to-amber-400" },
  { to: "/academics", label: t("academics"), color: "from-brand-blue to-blue-500" },
  { to: "/donor", label: t("donor"), color: "from-red-500 to-pink-500" },
  { to: "/contact", label: t("contact"), color: "from-blue-600 to-brand-orange" },
];

export default function QuickLinks() {
  const { t } = useI18n();
  return (
    <section className="container mx-auto py-8 sm:py-10">
      <h3 className="sr-only">{t("quick_links")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {links(t).map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${l.color} p-5 text-white shadow-lg`}
          >
            <div className="relative flex items-center justify-between">
              <span className="text-lg font-semibold">{l.label}</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
