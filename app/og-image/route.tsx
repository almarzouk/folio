import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            borderRadius: "32px",
            border: "4px solid #2563eb",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "120px",
              borderRadius: "28px",
              backgroundColor: "#2563eb",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "36px",
            }}
          >
            JA
          </div>

          <div
            style={{
              fontSize: "68px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Jumaa Almarzouk
          </div>

          <div
            style={{
              fontSize: "40px",
              color: "#93c5fd",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            Fullstack Webentwickler
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React", "Next.js", "WordPress", "Node.js"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 22px",
                  backgroundColor: "rgba(37, 99, 235, 0.2)",
                  border: "2px solid #2563eb",
                  borderRadius: "10px",
                  color: "#bfdbfe",
                  fontSize: "26px",
                  fontWeight: "600",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "36px",
              fontSize: "24px",
              color: "#94a3b8",
            }}
          >
            Haselünne · Deutschland
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
