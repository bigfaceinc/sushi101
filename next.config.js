const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withOptimizedImages(withPWA({
    images: {
        disableStaticImages: true
    },
    reactStrictMode: true,
    handleImages: ['jpeg', 'jpg', 'png'],
}))
