import components from './components';
import paths from './paths';
import schemas from './schemas';

export default {
  openapi: '3.0.1',
  info: {
    title: 'WiredCraft',
    description: '',
    version: '1.0.0',
    license: {
      name: 'MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  paths,
  schemas,
  components,
};
