/** @type {import('next').NextConfig} */
const { join } = require("path");
//
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  swcMinify: true,
  skipMiddlewareUrlNormalize: true,
  env: {
    API_URL: process.env.API_URL,
    IMAGES_HOST: process.env.IMAGES_HOST,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.IMAGES_HOST ?? "**",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: process.env.IMAGES_HOST ?? "**",
        port: "",
        pathname: "/**",
      },
    ],
  },

  sassOptions: {
    additionalData: `@import "src/shared/styles/mixins/mixins";`,
    // includePaths: [join(__dirname, "styles")],
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
