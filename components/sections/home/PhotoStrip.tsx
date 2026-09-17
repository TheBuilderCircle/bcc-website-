import Image from "next/image";

const photos = [
  { src: "/images/photo-row-1.jpg", position: "50% 62.903%" },
  { src: "/images/photo-row-2.jpg", position: "0% 0.23%" },
  { src: "/images/photo-row-3.jpg", position: "center" },
  { src: "/images/photo-row-4.jpg", position: "50% 50%" },
];

/** Full-bleed 4-photo strip that intentionally overflows both page edges,
 * per the design brief. */
export default function PhotoStrip() {
  return (
    <div className="my-16 flex justify-center gap-[29px]">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative h-[319px] w-[372px] shrink-0 overflow-hidden rounded-panel bg-[#c9c9c9]"
        >
          <Image
            src={photo.src}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: photo.position }}
          />
        </div>
      ))}
    </div>
  );
}
