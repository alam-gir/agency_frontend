
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "res.cloudinary.com",
            },
            {
                hostname: "t4.ftcdn.net",
            },
            {
                hostname: "img.freepik.com"
            }
        ],
    }
};

export default nextConfig;
