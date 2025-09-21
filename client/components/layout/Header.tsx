import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { getLogo } from "@/lib/imageUtils";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

export default function Header() {
  const { t } = useI18n();
  const { toggleMobileMenu, closeMobileMenu } = useMobileMenu();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);



  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img
            src={getLogo()}
            alt="School logo"
            className="h-12 w-12 rounded-full ring-2 ring-brand-orange/30"
          />
          <div className="flex flex-col leading-tight">
            <div className="text-2xl font-bold text-brand-blue">
              SMVM
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* Core navigation items - always visible (5 links) */}
          <Nav to="/about" label={t("about")} />
          <Nav to="/academics" label={t("academics")} />
          <Nav to="/admissions" label={t("admissions")} />
          <Nav to="/facilities" label={t("facilities")} />
          <Nav to="/contact" label={t("contact")} />
          
          {/* More dropdown with remaining links */}
          <div 
            className="relative"
            onMouseEnter={() => setIsMoreMenuOpen(true)}
            onMouseLeave={() => setIsMoreMenuOpen(false)}
          >
            <Button variant="ghost" className="flex items-center gap-1 text-gray-700 hover:text-brand-orange">
              {t("more")}
              <ChevronDown className="h-3 w-3" />
            </Button>
            
            {isMoreMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2">
                <div className="space-y-1">
                  <Link to="/gallery" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("gallery")}
                  </Link>
                  <Link to="/news" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("news")}
                  </Link>
                  <Link to="/achievements" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("achievements")}
                  </Link>
                  <Link to="/results" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("results")}
                  </Link>
                  <Link to="/alumni" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("alumni")}
                  </Link>
                  <Link to="/faqs" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("faqs")}
                  </Link>
                  <Link to="/parents-message" className="block px-3 py-2 text-sm text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-md transition-colors">
                    {t("parents_message")}
                  </Link>
                </div>
              </div>
            )}
          </div>
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
            <Menu className="h-5 w-5" />
          </Button>
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
