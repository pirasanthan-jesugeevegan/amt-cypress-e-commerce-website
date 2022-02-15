/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default;

// promisified fs module
const fs = require('fs-extra');
const path = require('path');

logPath = process.env.LOG_DIR || path.join(__dirname, '..', 'log');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  config.env.username = process.env.USERNAME;
  config.env.password = process.env.PASSWORD;
  // accept a configFile value or use qa by default
  const file = config.env.configFile || 'prod';

  return getConfigurationByFile(file);
};
