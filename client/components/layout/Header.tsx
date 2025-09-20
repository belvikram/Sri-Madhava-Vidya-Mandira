import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { getRandomSchoolImage } from "@/lib/imageUtils";

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={getRandomSchoolImage()}
            alt="School logo"
            className="h-9 w-9 rounded-full ring-2 ring-brand-orange/30"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-brand-blue">
              {t("school_name")}
            </span>
            <span className="text-[10px] text-gray-500 hidden sm:block">
              Sira – 572137
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Nav to="/about" label={t("about")} />
          <Nav to="/academics" label={t("academics")} />
          <Nav to="/admissions" label={t("admissions")} />
          <Nav to="/facilities" label={t("facilities")} />
          <Nav to="/gallery" label={t("gallery")} />
          <Nav to="/news" label={t("news")} />
          <Nav to="/contact" label={t("contact")} />
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/admissions" className="hidden sm:inline-flex btn-accent">
            {t("admissions_cta")}
          </Link>
        </div>
      </div>
    </header>
  );
}

function Nav({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-colors hover:text-brand-orange ${
          isActive ? "text-brand-blue" : "text-gray-700"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
