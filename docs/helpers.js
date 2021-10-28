const { version } = require('../package.json');

module.exports = {
  'github-link': (contractPath) => {
    if (typeof contractPath !== 'string') {
      throw new Error('Missing argument');
    }
    return `https://github.com/bulldoginu21/BullDogInu/blob/v${version}/contracts/${contractPath}`;
  },
};
