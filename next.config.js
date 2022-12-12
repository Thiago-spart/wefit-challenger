/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.imagemhost.com.br',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
