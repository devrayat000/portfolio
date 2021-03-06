/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  swcMinify: process.env.NODE_ENV === 'production',
  compress: process.env.NODE_ENV === 'production',
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
