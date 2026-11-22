/** Padding per logo shape, so wide wordmarks and round badges read at a similar
 * visual size inside the same tile: wordmarks are width-limited (tight sides),
 * badges are height-limited (tight top and bottom). */
export const fitPadding = {
  wide: "px-4 py-3",
  badge: "p-2",
  default: "p-3",
} as const;
