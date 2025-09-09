import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
    implementation: 'sass',
    api: 'modern',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
  experimental: {
    useCache: true,
  },
};

export default nextConfig;
