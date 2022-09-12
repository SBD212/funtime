/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "maps.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
