const reflectjs = require('reflectjs-core');
const path = require('path');

new reflectjs.Server({
  port: 3001,
  rootPath: path.join(__dirname, 'docroot'),
});
