import Image from "next/image";

const photos = [
  { src: "/images/photo-row-1.jpg", position: "50% 62.903%" },
  { src: "/images/photo-row-2.jpg", position: "0% 0.23%" },
  { src: "/images/photo-row-3.jpg", position: "center" },
  { src: "/images/photo-row-4.jpg", position: "50% 50%" },
];

/** How many copies of the 4-photo set sit in the track. The track slides left by
 * exactly one set (-100% / SETS) each loop, so the copies must cover the widest
 * screen plus one set (a set is ~1604px). */
const SETS = 4;

/** Full-bleed photo strip that runs in a continuous loop. Each set carries its
 * own trailing gap, so sliding by one set lines up with the next one and the
 * loop never jumps. Pauses on hover; still for reduced-motion users. */
export default function PhotoStrip() {
  return (
    <div className="my-12 overflow-hidden py-4">
      {/* py-4 above leaves room for a hovered card to grow without being clipped. */}
      <div className="flex w-max hover:[animation-play-state:paused] motion-safe:animate-[photo-marquee_32s_linear_infinite]">
        {Array.from({ length: SETS }, (_, set) => (
          <div
            key={set}
            aria-hidden={set > 0 || undefined}
            className="flex shrink-0 gap-[29px] pr-[29px]"
          >
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="group relative h-[319px] w-[372px] shrink-0 overflow-hidden rounded-panel bg-[#c9c9c9] transition-transform duration-500 ease-out hover:scale-[1.04]"
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="372px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
