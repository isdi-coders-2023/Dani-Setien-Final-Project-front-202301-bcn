/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icqwpkxwddqofeibjqcj.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
