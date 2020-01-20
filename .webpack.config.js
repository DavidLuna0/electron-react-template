module.exports = config => {
    entry = './index.js';
    config.target = "electron-renderer";
    return config;
  };