const { withKeystone } = require('@keystone-6/core/next')
// const withPreconstruct = require('@preconstruct/next')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  swcMinify: true,
  compress: true,
}

// module.exports = withPreconstruct(nextConfig)
module.exports = withKeystone(nextConfig)
