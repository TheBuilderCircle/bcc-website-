import { boltPath, DIAL_CENTER, dialTicks, glowPaths } from "@/lib/date-card-art";

/** The Home "13-14 November 2026" card ("Frame 11", 1496x433 in the design),
 * built as markup instead of an exported image. From `lg` up it is the design
 * canvas scaled to the container (positions are % of 1496x433, type is in cqw so
 * it scales with the card); below that it stacks. The ring around the bolt loads
 * in blue along its arc, holds, then restarts. */
export default function DateCard() {
  return (
    <section
      aria-label="BCCG 2026 date and venue"
      className="relative mx-auto w-full max-w-[1496px] overflow-hidden rounded-panel bg-ink [container-type:inline-size] lg:aspect-[1496/433]"
    >
      {/* Inner panel (21,23 1454x388) holding the two blurred blue glows. */}
      <div
        aria-hidden
        className="absolute inset-0 [clip-path:inset(5.31%_1.4%_5.31%_1.4%_round_20px)]"
      >
        <svg
          viewBox="0 0 1496 433"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <defs>
            <filter id="dc-filter1_f" x="223.514" y="-381.983" width="1801.31" height="1282.12" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="217" result="effect1_foregroundBlur_41_3"/>
</filter>
            <filter id="dc-filter5_f" x="-144.182" y="-379.856" width="1911.24" height="1240.83" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="217" result="effect1_foregroundBlur_41_3"/>
</filter>
          </defs>
          <g filter="url(#dc-filter1_f)">
            <path fillRule="evenodd" clipRule="evenodd" d={glowPaths[0]} fill="#007BFF" />
          </g>
          <g filter="url(#dc-filter5_f)">
            <path fillRule="evenodd" clipRule="evenodd" d={glowPaths[1]} fill="#007BFF" />
          </g>
        </svg>
      </div>

      <div className="relative flex flex-col gap-8 px-8 py-10 lg:absolute lg:inset-0 lg:block lg:p-0">
        {/* Dial: frame 28,-1 319x319 on the canvas. */}
        <svg
          aria-hidden
          viewBox="28 -1 319 319"
          overflow="visible"
          className="mx-auto h-[240px] w-[240px] shrink-0 lg:absolute lg:top-[-0.23%] lg:left-[1.87%] lg:h-auto lg:w-[21.32%]"
        >
          <defs>
            <filter id="dc-filter2_di" x="61.1532" y="31.1137" width="263.14" height="263.14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="7.63534" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_41_3"/>
<feOffset dy="4.18344"/>
<feGaussianBlur stdDeviation="23.0089"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_3" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="12.5503" operator="erode" in="SourceAlpha" result="effect2_innerShadow_41_3"/>
<feOffset dy="4.18344"/>
<feGaussianBlur stdDeviation="10.4586"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_41_3"/>
</filter>
            <filter id="dc-filter3_d" x="96.5595" y="62.3365" width="192.327" height="192.327" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5.09022" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_41_3"/>
<feOffset/>
<feGaussianBlur stdDeviation="14.4223"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_3" result="shape"/>
</filter>
            <filter id="dc-filter4_di" x="113.805" y="79.5821" width="157.836" height="157.836" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="6.78697" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_41_3"/>
<feOffset/>
<feGaussianBlur stdDeviation="10.1804"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_3" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="14.4223"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_41_3"/>
</filter>
            <linearGradient id="dc-ring" x1="192.723" y1="96.2714" x2="196.826" y2="226.37" gradientUnits="userSpaceOnUse">
              <stop stopColor="#031B33" />
              <stop offset="1" stopColor="#0A0604" />
            </linearGradient>
            <linearGradient id="dc-bolt" x1="187.526" y1="129.231" x2="187.526" y2="187.769" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E81F9" />
              <stop offset="0.788462" stopColor="#124E93" />
            </linearGradient>
          </defs>
          <g filter="url(#dc-filter2_di)">
            <circle cx={DIAL_CENTER.x} cy={DIAL_CENTER.y} r="77.9166" fill="#031B33" />
          </g>
          <g filter="url(#dc-filter3_d)">
            <circle cx={DIAL_CENTER.x} cy={DIAL_CENTER.y} r="62.2287" fill="url(#dc-ring)" />
          </g>
          <g filter="url(#dc-filter4_di)">
            <circle cx={DIAL_CENTER.x} cy={DIAL_CENTER.y} r="51.7701" fill="#0D121D" />
          </g>
          {/* The ring loads in blue along its arc: a stroked arc drives a mask that
              reveals the ticks in order, holds, then resets and loads again. */}
          <mask id="dc-ring-load" maskUnits="userSpaceOnUse" x="28" y="-1" width="319" height="319">
            <path
              d="M234.14 69.682A98 98 0 0 1 196.143 256.44"
              fill="none"
              stroke="#fff"
              strokeWidth="60"
              pathLength="1"
              strokeDasharray="1"
              className="motion-safe:animate-[date-ring-load_3.6s_ease-in-out_infinite]"
            />
          </mask>
          <g mask="url(#dc-ring-load)">
            {dialTicks.map((d, i) => (
              <path key={i} d={d} fill="#007BFF" />
            ))}
          </g>
          <path d={boltPath} fill="url(#dc-bolt)" />
        </svg>

        <div className="flex flex-col gap-3 lg:absolute lg:top-[69.98%] lg:left-[3.54%] lg:w-[20%] lg:gap-0">
          <p className="font-space-grotesk text-[20px] leading-[1.2] font-bold tracking-[-0.02em] text-white lg:text-[1.337cqw]">
            13&ndash;14 November 2026 &middot;
            <br />
            Accra, Ghana
          </p>
          <p className="font-playfair text-[20px] leading-[1.35] italic tracking-[-0.02em] text-[#a9aaaa] lg:mt-[0.6cqw] lg:text-[1.337cqw]">
            Venue to be confirmed
          </p>
        </div>

        {/* The design's first line is indented with leading spaces, so the
            indent is reproduced here rather than "fixed". */}
        <p className="font-space-grotesk text-[20px] leading-[1.3] font-medium tracking-[-0.02em] text-white lg:absolute lg:top-[33.03%] lg:left-[55.21%] lg:w-[41.38%] lg:text-[1.604cqw] lg:[text-indent:61.4%]">
          Blockchain &amp; Crypto Conference Ghana&nbsp; brings together the builders,{" "}
          <span className="font-playfair font-normal text-[#b2d4f9] italic">
            protocols, infrastructure, capital and talent advancing blockchain innovation and
            shaping Africa&rsquo;s next generation of decentralized technology.
          </span>
        </p>
      </div>
    </section>
  );
}
