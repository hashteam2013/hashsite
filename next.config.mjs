import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,  // Preserve existing aliases
      '@home': path.resolve(__dirname, 'src/home'),  // Your custom alias
      '@test': path.resolve(__dirname, 'src/app'),  // Another custom alias (optional)
    };
    return config;
  },
};

export default nextConfig;
