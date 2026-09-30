import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resources/student-handbook",
        destination: "/resources/community-playbook",
        permanent: true
      },
      {
        source: "/opportunities",
        destination: "/internships",
        permanent: true
      },
      {
        source: "/opportunities/internships",
        destination: "/internships",
        permanent: true
      },
      {
        source: "/opportunities/internships/:slug",
        destination: "/internships/:slug",
        permanent: true
      },
      {
        source: "/opportunities/internships-data",
        destination: "/internships",
        permanent: true
      },
      {
        source: "/opportunities/internships-data/:slug",
        destination: "/internships/:slug",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
