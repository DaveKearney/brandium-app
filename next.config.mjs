/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable webpack configuration
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
};

export default nextConfig;