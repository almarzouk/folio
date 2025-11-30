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
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e40af 2%, transparent 0%), radial-gradient(circle at 75px 75px, #3b82f6 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            borderRadius: "40px",
            border: "4px solid #3b82f6",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "120px",
              borderRadius: "30px",
              backgroundColor: "#3b82f6",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "40px",
            }}
          >
            JA
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Jumaa Almarzouk
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "42px",
              color: "#93c5fd",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Fullstack Webentwickler
          </div>

          {/* Technologies */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React", "Next.js", "WordPress", "Node.js"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  border: "2px solid #3b82f6",
                  borderRadius: "12px",
                  color: "#60a5fa",
                  fontSize: "28px",
                  fontWeight: "600",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Location */}
          <div
            style={{
              marginTop: "40px",
              fontSize: "24px",
              color: "#94a3b8",
              display: "flex",
              alignItems: "center",
            }}
          >
            📍 Haselünne, Deutschland
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
