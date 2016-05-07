var sass = require('node-sass');
sass.renderSync({
  file: 'public/src/react/style/common.sass',
  outFile: 'dist/style.css',
  outputStyle: 'compressed'
}, function(err, result) { /*...*/ });