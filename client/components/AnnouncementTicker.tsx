import { useI18n } from "@/lib/i18n";

export default function AnnouncementTicker() {
  const { t } = useI18n();
  const items = [t("ticker_1"), t("ticker_2"), t("ticker_3")];
  
  return (
    <div className="w-full overflow-hidden bg-brand-blue text-white">
      <div className="py-2">
        <div className="relative">
          <div className="whitespace-nowrap animate-stock-ticker will-change-transform">
            {items.concat(items).map((item, idx) => (
              <span key={idx} className="inline-block mx-12 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
