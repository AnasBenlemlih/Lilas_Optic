import { ImageResponse } from "next/og";

/** Favicon onglet : monogramme LO (vert Elephant + or Putty) */
export const size = { width: 32, height: 32 };
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
          background: "#154D4B",
          borderRadius: 7,
          color: "#E4D28B",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.12em",
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, sans-serif',
        }}
      >
        LO
      </div>
    ),
    { ...size }
  );
}
