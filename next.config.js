/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  fallback: true,
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
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
