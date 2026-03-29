import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
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
  const [api, setApi] = useState<CarouselApi>();

  // Auto-slide effect
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="container mx-auto py-8 sm:py-12 px-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-brand-blue">{t("gallery_title")}</h2>
      </div>
      
      <div className="relative group">
        <Carousel 
          setApi={setApi}
          className="w-full" 
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, i) => (
              <CarouselItem key={i} className="pl-2 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <button
                  onClick={() => {
                    setActive(i);
                    setOpen(true);
                  }}
                  className="group/btn block w-full overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="h-full w-full object-cover transition duration-500 group-hover/btn:scale-110" 
                    />
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Overlay Navigation Arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-white/80 backdrop-blur-sm border-none shadow-md hover:bg-white transition-opacity md:opacity-0 md:group-hover:opacity-100" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-white/80 backdrop-blur-sm border-none shadow-md hover:bg-white transition-opacity md:opacity-0 md:group-hover:opacity-100" />
        </Carousel>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span />
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <DialogTitle className="sr-only">{t("gallery_title")}</DialogTitle>
          <div className="relative aspect-video w-full">
            <img 
              src={images[active].src} 
              alt={images[active].alt} 
              className="h-full w-full object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
