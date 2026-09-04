import type { NextConfig } from "next";

// STATIC_EXPORT=1 → builds a fully static site into ./out (used for GitHub Pages)
// default        → standalone server output (used for local/sandbox runs)
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  images: isStaticExport ? { unoptimized: true } : undefined,
  trailingSlash: isStaticExport,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
