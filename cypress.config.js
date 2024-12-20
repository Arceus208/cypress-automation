const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    "cypress\\config",
    "config",
    `${file}.json`
  );

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "zzwf4j",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
    baseUrl: "http://www.webdriveruniversity.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    testIsolation: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env: {
      first_name: "Manh",
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    retries: {
      runMode: 0,
      openMode: 1,
    },
  },
});
