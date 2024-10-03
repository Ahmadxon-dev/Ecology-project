/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"localhost:5000"
            }
        ]
    }
}

module.exports = nextConfig
