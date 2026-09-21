import Image from "next/image";

const photos = [
  { src: "/community/celo-africadao-workshop.jpg", position: "50% 40%" },
  { src: "/community/devconnect-diaries-talk.jpg", position: "60% 50%" },
  { src: "/community/ayahq-workshop-laptops.jpg", position: "center" },
  { src: "/community/betech-afrotalks-group.jpg", position: "50% 40%" },
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
