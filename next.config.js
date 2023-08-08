/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: ['http://localhost:3000/']
  },
  compiler: {
    removeConsole: false,
},
}

module.exports = nextConfig
