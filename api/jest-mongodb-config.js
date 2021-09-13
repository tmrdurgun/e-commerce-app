module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'shoparize-test',
      args: []
    },
    binary: {
      version: '4.0.3',
      skipMD5: true
    },
    autoStart: false
  }
};
