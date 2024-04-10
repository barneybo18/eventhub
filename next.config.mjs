/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration options
  
  // Example: If you use `next-compose-plugins` to configure plugins
  // plugins: [
  //   // Add your plugins here
  // ],

  // Example: If you need to define custom webpack configuration
  // webpack: (config, options) => {
  //   // Modify webpack config here
  //   return config;
  // },

  // Example: If you need to specify additional paths or settings
  // basePath: '/your-base-path',

  // Example: If you have custom headers or redirects
  // async headers() {
  //   return [
  //     // Add your custom headers here
  //   ];
  // },

  // Example: If you want to add a webpack alias for components.json
  webpack: (config, { isServer }) => {
    // Add webpack alias for components.json
    config.resolve.alias['components.json'] = isServer ? './components.server.json' : './components.client.json';
    return config;
  }
};

export default nextConfig;

