/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    assetPrefix: './',
    basePath: process.env.NODE_ENV === 'production' ? '/' : '',
  };
module.exports = nextConfig
