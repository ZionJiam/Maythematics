import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // HTTP headers
  async headers() {
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

  // URL redirects
  async redirects() {
    return [
      {
        source: '/ourstory',
        destination: '/our-story',
        permanent: true, // 301 redirect
      },
      {
        source: '/testimonial',
        destination: '/testimonials',
        permanent: true, // 301 redirect
      },
      {
        source: '/classes',
        destination: '/programmes',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
