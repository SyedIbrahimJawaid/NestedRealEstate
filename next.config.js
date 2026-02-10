/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
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
        destination: '/45-day-express',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
