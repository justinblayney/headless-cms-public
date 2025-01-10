module.exports = {
    images: {
      domains: ["res.cloudinary.com"],
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap'); // Generate sitemap during build
      }
      return config;
    },
  };
  