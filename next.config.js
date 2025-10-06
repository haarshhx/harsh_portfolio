/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production build
  },
  typescript: {
    ignoreBuildErrors: true, // Also ignore TypeScript build errors if any
  },
};

module.exports = nextConfig;
