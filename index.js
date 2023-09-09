const reflectjs = require('reflectjs-core');
const path = require('path');

new reflectjs.Server({
  port: 3000,
  rootPath: path.join(__dirname, 'docroot'),
});
