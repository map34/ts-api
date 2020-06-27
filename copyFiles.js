const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const shell = require('shelljs');

shell.cp('package.json', 'dist/package.json');
shell.cp(isProd ? 'pm2/ecosystem.config.prod.js' : 'pm2/ecosystem.config.dev.js', 'dist/ecosystem.config.js');
