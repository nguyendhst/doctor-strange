/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/book-appointment",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
module.exports = {
  output: "standalone"
}
