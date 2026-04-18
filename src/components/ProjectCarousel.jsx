import useEmblaCarousel from "embla-carousel-react";

function chunkImages(images, size) {
  const groupedImages = [];

  for (let index = 0; index < images.length; index += size) {
    groupedImages.push(images.slice(index, index + size));
  }

  return groupedImages;
}

export default function ProjectCarousel({ images, title, layout = "default" }) {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  const imagesPerSlide = layout === "phone-pairs" ? 2 : 1;
  const slides = chunkImages(images, imagesPerSlide);

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
    </div>
  );
}
