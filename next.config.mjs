const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/",
  basePath: "/pokeshop",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  trailingSlash: true,
  ...(isGithubActions && { output: "export" }),
  // output: "export"
};

export default nextConfig;
