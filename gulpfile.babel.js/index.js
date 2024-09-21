// Charger Babel avec la configuration
require('@babel/register')({
    presets: ['@babel/preset-env']
  });
  
  // Charger les modules Gulp avec CommonJS
  const { build } = require('./tasks/build');
  const { dev } = require('./tasks/dev');
  
  exports.build = build;
  exports.default = dev;
  