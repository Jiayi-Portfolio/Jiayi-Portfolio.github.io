/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    // Disable built-in optimization to support static export
    unoptimized: true,
  },
  output: 'export',
  // Prevent refresh/deep-link 404s on static hosts like GitHub Pages
  trailingSlash: true,

  // Optional: if you deploy under a subpath (e.g. https://user.github.io/repo),
  // set NEXT_PUBLIC_BASE_PATH="/repo" in your build environment.
  basePath,
  assetPrefix: basePath,
}

export default nextConfig;
