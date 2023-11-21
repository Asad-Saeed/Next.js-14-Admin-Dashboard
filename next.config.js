/** @type {import('next').NextConfig} */
const nextConfig = {
        async redirects() {
          return [
            {
              source: '/',
              destination: '/login',
              permanent: true,
            },
          ]
        },
        images:{
          remotePatterns:[
            {
              protocol:"https",
              hostname:"media.istockphoto.com" 
            }
          ]
        }
}

module.exports = nextConfig
