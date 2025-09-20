import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", alt: "assembly" },
  { src: "https://images.unsplash.com/photo-1580584128409-8e5f0b24b1f8?q=80&w=1200&auto=format&fit=crop", alt: "classroom" },
  { src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop", alt: "sports" },
  { src: "https://images.unsplash.com/photo-1580584128409-8950b8067e2e?q=80&w=1200&auto=format&fit=crop", alt: "lab" },
  { src: "https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=1200&auto=format&fit=crop", alt: "cultural" },
];

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
