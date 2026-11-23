/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to support API routes
  images: {
    unoptimized: true,
  },
  async redirects() {
    // The homepage now carries the full product lineup.
    return [{ source: '/portfolio', destination: '/#products', permanent: false }];
  },
}

module.exports = nextConfig
