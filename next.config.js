/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://cdn.sanity.io"],
  },
};

module.exports = nextConfig;
