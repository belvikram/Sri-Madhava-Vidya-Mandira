import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { getLogo } from "@/lib/imageUtils";
import { Menu, X, BookOpen, Users, FileText, Building, Camera, Newspaper, Trophy, Phone, Award, GraduationCap, HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function Header() {
  const { t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileNavigationItems = [
    { to: "/about", label: t("about") },
    { to: "/academics", label: t("academics") },
    { to: "/admissions", label: t("admissions") },
    { to: "/facilities", label: t("facilities") },
    { to: "/gallery", label: t("gallery") },
    { to: "/news", label: t("news") },
    { to: "/achievements", label: t("achievements") },
    { to: "/results", label: t("results") },
    { to: "/alumni", label: t("alumni") },
    { to: "/faqs", label: t("faqs") },
    { to: "/parents-message", label: t("parents_message") },
    { to: "/contact", label: t("contact") },
  ];

  const navigationCategories = [
    {
      title: t("about"),
      icon: Users,
      items: [
        { to: "/about", label: t("about"), icon: Users, description: "Learn about our school" },
        { to: "/alumni", label: t("alumni"), icon: GraduationCap, description: "Our alumni network" },
        { to: "/parents-message", label: t("parents_message"), icon: MessageCircle, description: "Parent testimonials" },
      ]
    },
    {
      title: t("academics"),
      icon: BookOpen,
      items: [
        { to: "/academics", label: t("academics"), icon: BookOpen, description: "Academic programs" },
        { to: "/results", label: t("results"), icon: Award, description: "Examination results" },
        { to: "/achievements", label: t("achievements"), icon: Trophy, description: "Our achievements" },
      ]
    },
    {
      title: t("admissions"),
      icon: FileText,
      items: [
        { to: "/admissions", label: t("admissions"), icon: FileText, description: "Apply to our school" },
        { to: "/faqs", label: t("faqs"), icon: HelpCircle, description: "Frequently asked questions" },
      ]
    },
    {
      title: t("facilities"),
      icon: Building,
      items: [
        { to: "/facilities", label: t("facilities"), icon: Building, description: "Our campus facilities" },
        { to: "/gallery", label: t("gallery"), icon: Camera, description: "Photo gallery" },
        { to: "/news", label: t("news"), icon: Newspaper, description: "Latest news & events" },
      ]
    },
  ];

  const directLinks = [
    { to: "/contact", label: t("contact"), icon: Phone, description: "Get in touch" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
          {navigationCategories.map((category, categoryIndex) => (
            <DropdownMenu key={categoryIndex}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-gray-700 hover:text-brand-orange">
                  <category.icon className="h-4 w-4" />
                  {category.title}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {category.items.map((item, itemIndex) => (
                  <DropdownMenuItem key={itemIndex} asChild>
                    <Link to={item.to} className="flex items-center gap-3 p-3">
                      <item.icon className="h-4 w-4 text-brand-blue" />
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          
          {directLinks.map((link) => (
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
            <div className="space-y-2">
              {mobileNavigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="block p-3 text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-lg transition-all duration-200"
                >
                  {item.label}
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
