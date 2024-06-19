/** @type {import('next').NextConfig} */

  
const nextConfig = {
    images:{
        remotePatterns:[
            {
              protocol:"https",
              hostname:"res.cloudinary.com"  
            }
        ]
    },
    experimental:{
    serverActions: {
        bodySizeLimit: '2mb'
    }
}};

export default nextConfig;
