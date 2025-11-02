import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",

  // Replace `my-next-app` with your actual repo name
  basePath: "/sohail",
  assetPrefix: "/sohail/",

  // Disable next/image optimization since GH Pages is static
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
