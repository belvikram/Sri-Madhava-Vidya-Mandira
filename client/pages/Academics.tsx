import PlaceholderPage from "@/components/PlaceholderPage";
import { useI18n } from "@/lib/i18n";

export default function Academics() {
  const { t } = useI18n();
  return <PlaceholderPage title={t("academics")} />;
}
