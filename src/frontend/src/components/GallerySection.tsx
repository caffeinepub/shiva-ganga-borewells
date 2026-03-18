import { useRef } from "react";

const images = [
  "/assets/uploads/IMG-20260318-WA0018-1.jpg",
  "/assets/uploads/IMG-20260318-WA0021-2.jpg",
  "/assets/uploads/IMG-20260317-WA0009-3.jpg",
  "/assets/uploads/IMG-20260317-WA0011-4.jpg",
];

type GalleryItem = { src: string; key: string };

// Duplicate for seamless infinite loop
const track: GalleryItem[] = [
  ...images.map((src, i) => ({ src, key: `a${i}` })),
  ...images.map((src, i) => ({ src, key: `b${i}` })),
  ...images.map((src, i) => ({ src, key: `c${i}` })),
];

export default function GallerySection() {
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ background: "oklch(0.22 0.055 225)" }}
      data-ocid="gallery.section"
    >
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "oklch(0.70 0.13 50)" }}
        >
          Photo Gallery
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "oklch(0.97 0 0)" }}
        >
          Our Fleet &amp; Work Gallery
        </h2>
        <p
          className="mt-3 text-sm md:text-base max-w-xl mx-auto"
          style={{ color: "oklch(0.75 0.03 225)" }}
        >
          A glimpse into our drilling operations, machinery, and job sites
          across Telangana.
        </p>
      </div>

      {/* Scrolling strip */}
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          ref={stripRef}
          className="flex gap-4 w-max gallery-scroll"
          style={{ animationDuration: "35s" }}
          onMouseEnter={() => {
            if (stripRef.current)
              stripRef.current.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (stripRef.current)
              stripRef.current.style.animationPlayState = "running";
          }}
        >
          {track.map((item) => (
            <div
              key={item.key}
              className="flex-shrink-0 w-72 h-64 md:h-72 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 8px 32px oklch(0.10 0.04 225 / 0.6)",
              }}
            >
              <img
                src={item.src}
                alt={`Shiva Ganga Borewells work ${item.key}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
