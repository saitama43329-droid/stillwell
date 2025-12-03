/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
  },
  // Optimize for faster loading
  productionBrowserSourceMaps: false,
  generateEtags: true,
  // Ensure trailing slashes for better routing
  trailingSlash: true,
}

module.exports = nextConfig
