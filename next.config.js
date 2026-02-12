/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sell-upgrade',
        destination: '/sell-and-upgrade',
        permanent: true,
      },
      {
        source: '/express',
        destination: '/33-day-express',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
