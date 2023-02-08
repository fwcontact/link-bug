/** @type {import('next').NextConfig} */
const nextConfig = {
  // this will make Link component behave wrong
  basePath: '/test',

  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
