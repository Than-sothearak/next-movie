/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
        localPatterns: [
          {
            pathname: '/assets/images/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
