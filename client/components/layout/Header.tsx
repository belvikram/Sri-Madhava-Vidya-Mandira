import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { getLogo } from "@/lib/imageUtils";
import { Menu, X, BookOpen, Users, FileText, Building, Camera, Newspaper, Trophy, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { to: "/about", label: t("about"), icon: Users, description: "Learn about our school" },
    { to: "/academics", label: t("academics"), icon: BookOpen, description: "Academic programs" },
    { to: "/admissions", label: t("admissions"), icon: FileText, description: "Apply to our school" },
    { to: "/facilities", label: t("facilities"), icon: Building, description: "Our campus facilities" },
    { to: "/gallery", label: t("gallery"), icon: Camera, description: "Photo gallery" },
    { to: "/news", label: t("news"), icon: Newspaper, description: "Latest news & events" },
    { to: "/achievements", label: t("achievements"), icon: Trophy, description: "Our achievements" },
    { to: "/contact", label: t("contact"), icon: Phone, description: "Get in touch" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img
            src={getLogo()}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigationLinks.map((link) => (
            <Nav key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/admissions" className="btn-accent">
            {t("admissions_cta")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <nav className="container mx-auto py-6">
            <div className="grid grid-cols-2 gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-blue/10 rounded-full mb-3 group-hover:bg-brand-blue/20 transition-colors">
                    <link.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 text-center">
                    {link.label}
                  </h3>
                  <p className="text-xs text-gray-600 text-center leading-tight">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/admissions"
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-blue/90 hover:from-brand-blue/90 hover:to-brand-blue/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <FileText className="h-5 w-5 mr-2" />
                {t("admissions_cta")}
              </Link>
            </div>
          </nav>
        </div>
      )}
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
