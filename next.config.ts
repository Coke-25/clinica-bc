import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repoName.toLowerCase().endsWith(".github.io");
const basePath = isGithubActions && repoName && !isUserOrOrgSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clinicabc.es",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
