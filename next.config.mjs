/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true, // Example config to ignore ESLint during build
    }, experimental: {
        missingSuspenseWithCSRBailout: false, // Disable the experimental feature
    },
};

export default nextConfig;
