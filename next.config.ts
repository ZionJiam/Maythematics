import type { NextConfig } from "next";

// next.config.js
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    // Only keep headers you actually need
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'picture-in-picture=(self "https://www.youtube.com")',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
