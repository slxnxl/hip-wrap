/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  concurrentFeatures: true,
  async redirects() { return [{
    source: "/api/files/:path*",
    destination: "better-autumn.pockethost.io/api/files/:path*",
    permanent: true,
  }]
  },
  images : {
    domains: ['better-autumn.pockethost.io'],
  },
  compiler: {
    removeConsole: false,
},
}

module.exports = nextConfig
