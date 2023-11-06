/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["spoonacular.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
