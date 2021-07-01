const path = require('path');

module.exports = {
  env: {
    URL: '',
    JWT_SIGNING_PRIVATE_KEY: 'randomkeyfornextauthshopifyfirstapp',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['i.ibb.co', 'images.pexels.com', 'm.media-amazon.com'],
  },
};
