import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      });
    }

    headers.push({
      headers: [
        {
          key: 'Permissions-Policy',
          value: 'picture-in-picture=(self "https://www.youtube.com")',
        },
      ],
      source: '/:path*',
    });

    return headers;
  },
};

export default nextConfig;