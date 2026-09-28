// Genera el QR de WhatsApp como SVG estático (colores de marca) en public/images/.
// Ejecutar de nuevo si cambia el enlace: node scripts/generate-qr.mjs
import QRCode from "qrcode";
import { writeFileSync } from "node:fs";

const WHATSAPP_URL = "https://wa.me/qr/MWC3VGTPMM4XF1";

const svg = await QRCode.toString(WHATSAPP_URL, {
  type: "svg",
  margin: 1,
  color: { dark: "#1A1A1A", light: "#FFFFFF" },
});

writeFileSync("public/images/whatsapp-qr.svg", svg);
console.log("QR de WhatsApp generado en public/images/whatsapp-qr.svg");
