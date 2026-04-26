import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

function chunkImages(images, size) {
  const groupedImages = [];

  for (let index = 0; index < images.length; index += size) {
    groupedImages.push(images.slice(index, index + size));
  }

  return groupedImages;
}

function ArrowIcon({ direction }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "previous" ? (
        <>
          <path d="m15 18-6-6 6-6" />
          <path d="M9 12h12" />
        </>
      ) : (
        <>
          <path d="m9 18 6-6-6-6" />
          <path d="M3 12h12" />
        </>
      )}
    </svg>
  );
}

export default function ProjectCarousel({ images, title, layout = "default" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const imagesPerSlide = layout === "phone-pairs" ? 2 : 1;
  const slides = chunkImages(images, imagesPerSlide);
  const hasMultipleSlides = slides.length > 1;

  const updateCarouselState = useCallback((api) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return undefined;

    const frameId = window.requestAnimationFrame(() => {
      updateCarouselState(emblaApi);
    });

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      window.cancelAnimationFrame(frameId);
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  return (
    <div className="space-y-4">
      <div
        className={`overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] ${
          layout === "phone-pairs" ? "mx-auto w-fit" : ""
        }`}
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, slideIndex) => (
            <div
              key={`${title}-slide-${slideIndex}`}
              className={`min-w-0 shrink-0 grow-0 ${
                layout === "phone-pairs" ? "basis-auto" : "basis-full"
              }`}
            >
              <div
                className={
                  layout === "phone-pairs"
                    ? "bg-[var(--color-bg)] px-1 py-1.5"
                    : "aspect-[16/9] bg-[var(--color-bg)]"
                }
              >
                <div
                  className={`h-full w-full ${
                    layout === "phone-pairs"
                      ? "mx-auto grid w-fit grid-cols-2 gap-0"
                      : ""
                  }`}
                >
                  {slide.map((image, imageIndex) => {
                    const screenshotNumber = slideIndex * imagesPerSlide + imageIndex + 1;

                    return (
                      <div
                        key={image}
                        className={
                          layout === "phone-pairs"
                            ? "flex w-[10.5rem] items-center justify-center overflow-hidden rounded-2xl bg-[var(--color-surface)] p-0.5"
                            : "h-full w-full"
                        }
                      >
                        <img
                          src={image}
                          alt={`${title} screenshot ${screenshotNumber}`}
                          loading="lazy"
                          decoding="async"
                          className={
                            layout === "phone-pairs"
                              ? "h-full w-full object-contain"
                              : "h-full w-full object-cover"
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {hasMultipleSlides && (
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Ver screenshots anteriores"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] transition-colors hover:text-[var(--color-heading)] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowIcon direction="previous" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Ver próximos screenshots"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] transition-colors hover:text-[var(--color-heading)] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={`${title}-dot-${index}`}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Ir para grupo de screenshots ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === selectedIndex
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
