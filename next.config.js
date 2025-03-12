/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Portfolio',
  // 在生产环境下，静态资源的前缀也要设置成相同的路径
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  output: 'export',
  //images: { unoptimized: true } 
}

module.exports = nextConfig;