import * as path from 'path'

export default function jsonplaceholderModule(options) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options,
  });
};
