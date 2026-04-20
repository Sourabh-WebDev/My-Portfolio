/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['vm-8hl3vsua49aioadebptyqn0u.vusercontent.net'],
}

export default nextConfig
