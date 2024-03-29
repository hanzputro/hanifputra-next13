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
});
module.exports = nextConfig;
