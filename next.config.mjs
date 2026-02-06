/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/vultr-ds-tailwind",
  assetPrefix: "/vultr-ds-tailwind",
};

export default nextConfig;
