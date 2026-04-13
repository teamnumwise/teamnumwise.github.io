import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "", // Ensures assets are loaded from the root for your custom domain
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};


export default nextConfig;
