module.exports = {
  apps : [{
    script: 'index.js',
    name: 'api-dev',
    exec_mode: 'cluster',
    node_args: '--harmony',
    instances: 1,
    env: {
      'NODE_ENV': 'development',
      'PORT': 5001
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
