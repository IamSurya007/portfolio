/**
 * Subtle fixed starfield + faint nebula glow behind the whole site.
 * Pure CSS (see .stars-* in globals.css): no JS, no hydration cost.
 */
export function StarBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="stars-nebula absolute inset-0" />
      <div className="stars-layer stars-small absolute inset-0" />
      <div className="stars-layer stars-medium absolute inset-0" />
      <div className="stars-layer stars-large absolute inset-0" />
    </div>
  );
}
