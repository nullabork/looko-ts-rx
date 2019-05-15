
const path = require('path');

module.exports = {
  "@reducers": path.resolve(__dirname, 'src/reducers'),
  "@actions": path.resolve(__dirname, 'src/actions'),
  "@store": path.resolve(__dirname, 'src/store'),

  // "@Models": path.resolve(__dirname, 'src/app/models'),
  // "@Interfaces": path.resolve(__dirname, 'src/app/interfaces'),
  // "@Containers": path.resolve(__dirname, 'src/app/containers'),
  // "@Types": path.resolve(__dirname, 'src/app/types'),
  // "@Store": path.resolve(__dirname, 'src/app/store'),
  // "@Sass": path.resolve(__dirname, 'src/app/sass'),
  // "@Config": path.resolve(__dirname, 'src/app/config'),
  "@components": path.resolve(__dirname, 'src/components'),
  // "@Context": path.resolve(__dirname, 'src/app/context')
}