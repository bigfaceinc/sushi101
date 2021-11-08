const withOptimizedImages = require('next-optimized-images');


/** @type {import('next').NextConfig} */
module.exports = withOptimizedImages({
  assetPrefix: 'https://www.sushi101.ca',
  reactStrictMode: true,
  handleImages: ['jpeg', 'png'],
})
