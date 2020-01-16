const log = console.log
const stdout = process.stdout
const pluralize = (word, count) => `${count} ${word}${count === 1 ? "" : "s"}`;

module.exports = class JestSimpleEmojiReporter {
  constructor(_, options) { this._options = options; }

  onRunStart(test) {
    log("🃏");
    log(pluralize("Test suite", test.numTotalTestSuites) + " were found...📝");
    stdout.write("\n");
  }

  onTestResult(_, testResult) {
    const testSuite = testResult
    const logResult = (testStatus, testTitle) => ({
      passed: log(`✅ - ${testTitle}`),
      pending: log(`🔃 - ${testTitle}`),
    }[testStatus])

    testSuite.testResults.forEach(result => (
      result.status === 'failed'
        ? log(`❌ - ${result.title}`)
        : logResult(result.status, result.title)
    ))
  }

  onRunComplete(_, results) {
    const {
      numFailedTests,
      numPassedTests,
      numPendingTests,
      testResults,
      numTotalTests,
      startTime,
    } = results;

    stdout.write("\n");
    testResults.map(({ failureMessage }) => { if (failureMessage) log(failureMessage); });

    if (!results.snapshot.didUpdate && results.snapshot.unchecked) {
      const obsoleteError = pluralize("obsolete snapshot", results.snapshot.unchecked) + " found.";
      this._options.color ? log(`\x1b[31m${obsoleteError}\x1b[0m`) : log(obsoleteError);
    }

    const testDuration = () => {
      const end = new Date();
      const start = new Date(startTime);
      const sec = (end - start) / 1000;
      return `${sec}s`;
    }

    log(`Ran ${numTotalTests} tests in ${testDuration()}`);
    log(`\x1b[32m${numPassedTests || 0} passing\x1b[32m`); stdout.write("\n");
    log(`\x1b[31m${numFailedTests || 0} failing\x1b[31m`); stdout.write("\n");
    log(`\x1b[33m${numPendingTests || 0} pending\x1b[33m`); stdout.write("\n");
  }
}
