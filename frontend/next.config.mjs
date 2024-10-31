/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**', // permite todas las rutas dentro de este dominio
      },
    ],
  },
};
  
export default nextConfig;
  
