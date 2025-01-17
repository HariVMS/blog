import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Allow only secure sources
        hostname: '**', // Wildcard to match any domain
      },
    ],
  },
};

export default nextConfig;
