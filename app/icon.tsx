import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#171717",
          borderRadius: "20%",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: "bold",
          fontFamily: "sans-serif", // next/og uses a generic sans-serif by default, which is clean.
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  );
}
