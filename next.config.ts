import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.steamgriddb.com',
        port: '',
        pathname: '/thumb/**',
      },
    ],
  },
  transpilePackages: ['msw'],
};

export default nextConfig;
