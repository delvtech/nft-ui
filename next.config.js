/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.example.com", "element-fi.mypinata.cloud"],
  },
};

module.exports = nextConfig;
