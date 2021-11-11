const withOptimizedImages = require('next-optimized-images');


/** @type {import('next').NextConfig} */
module.exports = withOptimizedImages({
    images: {
        disableStaticImages: true
    },
    reactStrictMode: true,
    handleImages: ['jpeg', 'jpg', 'png'],
})
