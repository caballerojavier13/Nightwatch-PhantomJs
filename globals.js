'use strict'
/* In nightwatch/globals.js */
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: false,
	reportsDirectory: "reports",
	uniqueFilename: true,
	reportFilename: "generatedTestResults.html",
	themeName: "default",
	relativeScreenshots: true
});
module.exports = {
	reporter: reporter.fn,
  beforeEach: function (browser, done) {
    require('nightwatch-video-recorder').start(browser, done)
  },
  afterEach: function (browser, done) {
    require('nightwatch-video-recorder').stop(browser, done)
  }
}
