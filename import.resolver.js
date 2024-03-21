const path = require('path');
const baseResolver = require('@tokopedia/skipper/resolver/base');

const resolver = baseResolver();

module.exports = {
  resolve: {
    ...resolver,
    alias: {
      ...resolver.alias,
      '@': path.resolve(__dirname, `src`),
      // Add a new alias here (if any)
    },
  },
};
