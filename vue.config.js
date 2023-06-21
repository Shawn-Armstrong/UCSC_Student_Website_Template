const { defineConfig } = require('@vue/cli-service');
const details = require('./src/assets/details.js');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/~' + details.cruzId + '/' 
        : '/',
    transpileDependencies: ['vuetify'],
};