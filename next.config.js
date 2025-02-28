/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:5001/graphql',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/reviews',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};
