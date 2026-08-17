import { useState } from "react";
import Contact from "./Contact";

export default function App() {
  const [copiedValue, setCopiedValue] = useState("");

  return (
    <main className="page">
      <style>{`
        :root {
          color-scheme: light;
          font-family: Inter, system-ui, sans-serif;
          background:
            radial-gradient(circle at top, #dbeafe 0%, #f8fafc 42%, #eef2ff 100%);
        }

        body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: transparent;
          color: #0f172a;
        }

        .page {
          width: min(100%, 640px);
          padding: 32px 20px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
          padding: 28px;
          text-align: center;
        }

        .contact-photo {
          border-radius: 999px;
          border: 4px solid white;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
        }

        .contact-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        button {
          border: 0;
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 600;
          background: #1d4ed8;
          color: white;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }

        .status {
          margin-top: 16px;
          color: #0f766e;
          font-weight: 600;
        }
      `}</style>
      <Contact
        name="Surafel Wasihun"
        email="surafelwasihun1324@gmail.com"
        phone="0911223344"
        profile_picture="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' rx='150' fill='%23e5e7eb'/%3E%3Ccircle cx='150' cy='118' r='52' fill='%239ca3af'/%3E%3Cpath d='M70 245c18-39 54-60 80-60s62 21 80 60' fill='%239ca3af'/%3E%3C/svg%3E"
        onCopy={setCopiedValue}
      />
      <p className="status">
        {copiedValue ? `Copied: ${copiedValue}` : "Click a button to copy contact info."}
      </p>
    </main>
  );
}
