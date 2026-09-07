import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/s30/:path*",
        destination: "http://localhost:5173/s30/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
