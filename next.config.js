/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    // 关闭内置优化以支持静态导出 (Github Pages 需要)
    unoptimized: true,
  },
  output: 'export',
  // 防止在 Github Pages 等静态主机上出现刷新 404 问题
  trailingSlash: true,

  // 设置基础路径
  basePath: basePath,
  assetPrefix: basePath,
}

// 核心区别在这里：使用 module.exports 而不是 export default
module.exports = nextConfig;