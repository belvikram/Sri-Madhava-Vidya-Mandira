import { useI18n } from "@/lib/i18n";

export default function AnnouncementTicker() {
  const { t } = useI18n();
  const items = [t("ticker_1"), t("ticker_2"), t("ticker_3")];
  return (
    <div className="w-full overflow-hidden bg-brand-blue text-white">
      <div className="container mx-auto flex items-center gap-3 py-2">
        <span className="px-2 py-0.5 rounded bg-brand-orange text-[11px] font-bold uppercase tracking-wide">{t("announcements")}</span>
        <div className="relative flex-1">
          <div className="whitespace-nowrap animate-marquee will-change-transform">
            {items.concat(items).map((item, idx) => (
              <span key={idx} className="mx-6 text-sm opacity-90">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
