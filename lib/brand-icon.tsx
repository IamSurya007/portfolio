import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** Brand mark: dark serif "S" on the site's gold accent (matches the navbar badge). */
export const BRAND_GOLD = "#f2c230";
export const BRAND_INK = "#060607";

/**
 * "circle": gold disc on a transparent background (browser favicon).
 * "square": full-bleed gold square; iOS and Android apply their own rounded mask.
 */
export async function renderBrandIcon(size: number, shape: "circle" | "square") {
  const font = await readFile(join(process.cwd(), "assets/fonts/SourceSerif4-SemiBold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BRAND_GOLD,
          borderRadius: shape === "circle" ? "50%" : 0,
          color: BRAND_INK,
          fontFamily: "Source Serif",
          fontSize: Math.round(size * (shape === "circle" ? 0.62 : 0.56)),
          fontWeight: 600,
          // Serif capitals sit slightly high; nudge down to look optically centred.
          paddingTop: Math.round(size * 0.02),
        }}
      >
        S
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Source Serif", data: font, weight: 600, style: "normal" }],
    }
  );
}
