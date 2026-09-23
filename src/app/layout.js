import { Poppins, Mulish } from "next/font/google";
import "./globals.css";

/* Sustitutos web de Century Gothic (titulares) y Tahoma (cuerpo) — ver README */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://avialas-landing.vercel.app"),
  title: "AVIALAS S.A. | Avícola y Alimento Animal S.A. — MINAG, Cuba",
  description:
    "AVIALAS S.A., entidad mixta cubana del MINAG dedicada a la actividad avícola y de alimentos balanceados. Gestionamos inversión extranjera con calidad, eficiencia y sostenibilidad.",
  keywords: [
    "AVIALAS",
    "avícola",
    "alimento animal",
    "MINAG",
    "GEALAV",
    "inversión extranjera",
    "Cuba",
    "alimentos balanceados",
  ],
  authors: [{ name: "AVIALAS S.A." }],
  openGraph: {
    type: "website",
    title: "AVIALAS S.A. | Avícola y Alimento Animal S.A.",
    description:
      "Entidad mixta cubana del MINAG dedicada a la actividad avícola y de alimentos balanceados. Desarrollo sostenible e inversión extranjera.",
    images: ["/logo-avialas-color.png"],
    locale: "es_CU",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${mulish.variable}`}>
      <body className="min-h-screen bg-white font-body text-avialas-dark antialiased">
        {children}
      </body>
    </html>
  );
}
