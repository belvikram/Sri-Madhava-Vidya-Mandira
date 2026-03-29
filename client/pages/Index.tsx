import AnnouncementTicker from "@/components/AnnouncementTicker";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import { useI18n } from "@/lib/i18n";
import Activities from "@/components/Activities";
import GalleryPreview from "@/components/GalleryPreview";

export default function Index() {
  const { t } = useI18n();

  return (
    <main>
      <AnnouncementTicker />
      <Hero />
      <QuickLinks />
      <Activities />
      <GalleryPreview />

    </main>
  );
}
