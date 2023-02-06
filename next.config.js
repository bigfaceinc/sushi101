// const withOptimizedImages = require('next-optimized-images');
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  dest: "public",
});
