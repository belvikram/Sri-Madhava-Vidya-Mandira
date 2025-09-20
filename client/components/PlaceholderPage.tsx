import { useI18n } from "@/lib/i18n";

export default function PlaceholderPage({ title }: { title: string }) {
  const { t } = useI18n();
  return (
    <div className="container mx-auto py-10">
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-brand-blue">{title}</h1>
        <p className="mt-2 text-gray-600">
          {t("school_name_full")} — {t("tagline")}
        </p>
        <p className="mt-6 text-sm text-gray-500">
          This page is ready to be filled with rich content in both Kannada and English. Ask to generate detailed sections next.
        </p>
      </div>
    </div>
  );
}
