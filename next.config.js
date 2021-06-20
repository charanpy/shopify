const path = require('path');

module.exports = {
  env: {
    EMAIL_USERNAME: 'jstspydb@gmail.com',
    EMAIL_PASSWORD: 'Webdevds@123',
    URL: 'http://localhost:3000',
    JWT_SIGNING_PRIVATE_KEY: 'randomkeyfornextauthshopifyfirstapp',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['i.ibb.co', 'images.pexels.com', 'm.media-amazon.com'],
  },
};
