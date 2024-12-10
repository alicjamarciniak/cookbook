/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["spoonacular.com", "img.spoonacular.com"],
    minimumCacheTTL: 60,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
