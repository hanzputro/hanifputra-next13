/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: ["app-build-manifest.json"],
});

const nextConfig = withPWA({
  // next config
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_STRAPI_ASSETS_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_STRAPI_ASSETS_HOSTNAME,
        port: process.env.NEXT_PUBLIC_STRAPI_ASSETS_PORT,
      },
    ],
  },
});
module.exports = nextConfig;
