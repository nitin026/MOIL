import "./globals.css";

export const metadata = {
  title: "MOIL Mining Intelligence — location feasibility",
  description:
    "Location feasibility and decision support prototype for MOIL block-level mining intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
