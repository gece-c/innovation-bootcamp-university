import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resources/student-handbook",
        destination: "/resources/community-playbook",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
