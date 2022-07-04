/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  swcMinify: true,
  compress: true,
  experimental: {
    reactRoot: true,
    urlImports: [
      'https://framerusercontent.com/modules/',
      'https://framer.com/m/',
    ],
    scrollRestoration: true,
  },
  images: {
    domains: [
      'dev-rayat.herokuapp.com',
      'localhost',
      'devrayatstorage.blob.core.windows.net',
      '127.0.0.1',
      'res.cloudinary.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/p/:id',
        destination: '/projects/:id',
      },
    ]
  },
}

const withTM = require('next-transpile-modules')(['is-it-email'])

module.exports = withTM(nextConfig)
