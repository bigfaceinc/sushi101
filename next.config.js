const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withOptimizedImages(withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
        buildExcludes: [/middleware-manifest.json$/]
    },
    images: {
        disableStaticImages: true
    },
    reactStrictMode: true,
    handleImages: ['jpeg', 'jpg', 'png'],
}))
