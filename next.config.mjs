/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
