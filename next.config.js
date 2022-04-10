/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  swcMinify: true,
  compress: true,
  images: {
    domains: [
      'dev-rayat.herokuapp.com',
      'localhost',
      'devrayatstorage.blob.core.windows.net',
      "127.0.0.1",
    ],
  },
}

module.exports = nextConfig
