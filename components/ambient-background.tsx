/**
 * Quiet page backdrop: one warm glow at the top, a faint grid that fades out,
 * and fine grain for texture. Pure CSS (see .ambient-* in globals.css).
 */
export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-glow" />
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-grain absolute inset-0" />
    </div>
  );
}
