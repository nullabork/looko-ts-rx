
const path = require('path');

module.exports = {
  "@reducers": path.resolve(__dirname, 'src/reducers'),
  "@actions": path.resolve(__dirname, 'src/actions'),
  "@store": path.resolve(__dirname, 'src/store'),

  // "@Models": path.resolve(__dirname, 'src/app/models'),
  // "@Interfaces": path.resolve(__dirname, 'src/app/interfaces'),
  "@containers": path.resolve(__dirname, 'src/app/containers'),
  // "@Types": path.resolve(__dirname, 'src/app/types'),
  // "@Store": path.resolve(__dirname, 'src/app/store'),
  // "@Sass": path.resolve(__dirname, 'src/app/sass'),
  "@conf": path.resolve(__dirname, './src/conf'),
  "@components": path.resolve(__dirname, 'src/app/components'),
  // "@Context": path.resolve(__dirname, 'src/app/context')
}