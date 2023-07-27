/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images : {
    domains: ['http://localhost:3000/']
  },
  compiler: {
    removeConsole: false,
},
}

module.exports = nextConfig
