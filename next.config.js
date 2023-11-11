/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/book-appointment',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
