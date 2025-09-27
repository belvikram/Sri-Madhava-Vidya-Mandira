import { Link } from "react-router-dom";
import { X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { useI18n } from "@/lib/i18n";
import { getLogo } from "@/lib/imageUtils";

export default function MobileSidebar() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  const { t } = useI18n();

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
    { to: "/donor", label: t("donor") },
    { to: "/contact", label: t("contact") },
  ];

  if (!isMobileMenuOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[99999] md:hidden mobile-sidebar-overlay"
      onClick={closeMobileMenu}
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" />
      
      {/* Sidebar */}
      <div 
        className="absolute right-0 top-0 w-3/4 bg-white shadow-2xl border-l border-gray-200 mobile-sidebar"
        style={{
          transform: 'translateX(0)',
          zIndex: 100000,
          height: '100vh',
          minHeight: '100vh',
          maxHeight: '100vh',
          position: 'fixed'
        }}
      >
        <nav className="h-full flex flex-col" style={{ height: '100vh' }}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src={getLogo()}
                alt="School logo"
                className="h-10 w-10 rounded-full ring-2 ring-brand-orange/30"
              />
              <div className="text-xl font-bold text-brand-blue">
                SMVM
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeMobileMenu}
              className="p-2"
              aria-label="Close mobile menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4 min-h-0">
            <div className="space-y-2 px-4">
              {mobileNavigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="block p-4 text-gray-900 hover:bg-brand-blue/5 hover:text-brand-blue rounded-lg transition-all duration-200 text-base font-medium border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t">
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
    </div>
  );
}
