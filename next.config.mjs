/** @type {import('next').NextConfig} */

// Vista previa estática en GitHub Pages: `npm run build:pages` (ver README).
// Sin esa variable, el build es el estándar de Next.js (Vercel u otro host Node).
const isPages = process.env.DEPLOY_TARGET === "pages";
const basePath = isPages ? "/avialas-landing" : "";

const nextConfig = {
  // Expuesto al cliente para src/lib/asset.js (next/image no antepone basePath con `unoptimized`)
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages && {
    output: "export",
    basePath,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
