import type { ReactNode } from "react";

export default function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-accent-tint/20 px-4 py-2 text-chip font-space-grotesk font-medium text-accent-chip-text">
      {children}
    </span>
  );
}
