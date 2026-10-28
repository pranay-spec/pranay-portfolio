import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/site-config";

export const alt = "Pranay Gujar — AI Engineer & Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#090B10",
          color: "#F3F4F6",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          border: "2px solid #1E2633",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "18px",
              letterSpacing: "0.15em",
              color: "#C5F36B",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            <span>{SITE_CONFIG.locationShort}</span>
            <span>·</span>
            <span>{SITE_CONFIG.specialization}</span>
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(197, 243, 107, 0.4)",
              backgroundColor: "rgba(197, 243, 107, 0.1)",
              color: "#C5F36B",
              fontSize: "14px",
              fontFamily: "monospace",
            }}
          >
            VIT PUNE &apos;28
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            Pranay Gujar
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#94A3B8",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            {SITE_CONFIG.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid #1E2633",
            color: "#64748B",
            fontSize: "16px",
            fontFamily: "monospace",
          }}
        >
          <span>Equinox Flow · Parallax Edge · Sentinel-X · Flash Crash Sentinel</span>
          <span style={{ color: "#C5F36B" }}>
            {new URL(SITE_CONFIG.url).host}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
