import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    VTEX_APP_KEY: process.env.VTEX_APP_KEY,
    VTEX_APP_TOKEN: process.env.VTEX_APP_TOKEN,
  },
};

export default nextConfig;
