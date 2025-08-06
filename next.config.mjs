/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Existing domain for product images
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
      // Allow Google profile images for next/image
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      // Common GitHub avatars (optional for future)
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
