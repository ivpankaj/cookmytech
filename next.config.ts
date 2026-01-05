import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: { unoptimized: true },
  output: "export", // <-- Enable static export
    trailingSlash: true,
};

export default nextConfig;
