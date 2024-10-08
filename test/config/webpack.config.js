const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname,'..','js','main.webpack.js')
  ],
  resolve:{
    modules:[path.resolve(__dirname,'/../../'),'node_modules']
  },
  output: {
    path: path.resolve(__dirname, '..' ,'dist'),
    filename: 'bundle.js',
  },
};