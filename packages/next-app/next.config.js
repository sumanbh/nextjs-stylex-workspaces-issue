const stylexPlugin = require('@stylexswc/nextjs-plugin');
const withMDX = require('@next/mdx')();
const path = require('path');

const rootDir = __dirname;
// const rootDir = path.join(__dirname, '../..');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['@stylexjs/open-props', 'stylex-lib'],
  // Optionally, add any other Next.js config below
  swcMinify: true,
  experimental: {
    mdxRs: true,
    swcPlugins: [
      [
        '@stylexswc/swc-plugin',
        {
          dev: false,
          runtimeInjection: false,
          genConditionalClasses: true,
          treeshakeCompensation: true,
          unstable_moduleResolution: {
            type: 'commonJS',
            rootDir,
          },
        },
      ],
    ],
  },
};

module.exports = stylexPlugin({
  rootDir,
})(withMDX(nextConfig));
