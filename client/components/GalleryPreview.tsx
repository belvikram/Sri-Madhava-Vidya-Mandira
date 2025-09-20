import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getAllSchoolImages } from "@/lib/imageUtils";

const schoolImages = getAllSchoolImages();
const images = schoolImages.map((src, index) => ({
  src,
  alt: `School image ${index + 1}`
}));

export default function GalleryPreview() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <section className="container mx-auto py-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-brand-blue">{t("gallery_title")}</h2>
      </div>
      <Carousel className="relative" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <button
                onClick={() => {
                  setActive(i);
                  setOpen(true);
                }}
                className="group block overflow-hidden rounded-xl border bg-white shadow-sm"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/90" />
        <CarouselNext className="bg-white/90" />
      </Carousel>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span />
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{t("gallery_title")}</DialogTitle>
          <img src={images[active].src} alt={images[active].alt} className="h-full w-full object-cover" />
        </DialogContent>
      </Dialog>
    </section>
  );
}
