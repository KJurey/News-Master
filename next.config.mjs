/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.nyt.com",
      },
      {
        protocol: "https",
        hostname: "**.fox.com",
      },
      {
        protocol: "https",
        hostname: "**.foxsports.com",
      },
      {
        protocol: "https",
        hostname: "**.cbsistatic.com",
      },
      {
        protocol: "https",
        hostname: "**.foxnews.com",
      },
      {
        protocol: "https",
        hostname: "**.cbsnewsstatic.com",
      },
      {
        protocol: "http",
        hostname: "**.cdn.turner.com",
      },
      {
        protocol: "https",
        hostname: "**.mktw.net",
      },
      {
        protocol: "https",
        hostname: "**.npr.org",
      },
      {
        protocol: "https",
        hostname: "**.mercopress.com",
      },
      {
        protocol: "https",
        hostname: "latinamericanpost.com",
      },
      {
        protocol: "https",
        hostname: "**.mit.edu",
      },
      {
        protocol: "https",
        hostname: "**.rferl.org",
      },
      {
        protocol: "https",
        hostname: "**.euractiv.com",
      },
      {
        protocol: "https",
        hostname: "**.france24.com",
      },
      {
        protocol: "https",
        hostname: "**.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.mirror.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.guim.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.dailystar.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.scmp.com",
      },
      {
        protocol: "https",
        hostname: "**.i-scmp.com",
      },
      {
        protocol: "https",
        hostname: "thediplomat.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.asianscientist.com",
      },
      {
        protocol: "https",
        hostname: "**.haymarketmedia.asia",
      },

      // Add more patterns as needed
    ],
  },
};

export default nextConfig;
