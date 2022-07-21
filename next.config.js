/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { router } = require('./routers/router');

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  poweredByHeader: false,
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return router;
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
});
