module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: "https://meilisearch-production-a533.up.railway.app/",
      // Your master key or private key
      apiKey: "J16jgaTyio2OqwbYWQ6AL1Cm60axKCJI",
    },
  },
});