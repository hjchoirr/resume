module.exports = {
  apps: [
  {
    name: 'resume',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 8500',
    instances: 1,
    exec_mode: 'cluster',
  },
  ],
};