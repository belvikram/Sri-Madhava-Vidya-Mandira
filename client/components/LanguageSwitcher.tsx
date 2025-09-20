import { useI18n } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label={t("kannada")}
        onClick={() => setLang("kn")}
        className={`px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${
          lang === "kn"
            ? "bg-accent text-accent-foreground border-transparent"
            : "bg-white/70 text-foreground hover:bg-white border-gray-200"
        }`}
      >
        ಕನ್ನಡ
      </button>
      <button
        aria-label={t("english")}
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${
          lang === "en"
            ? "bg-accent text-accent-foreground border-transparent"
            : "bg-white/70 text-foreground hover:bg-white border-gray-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}
