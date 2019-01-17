const pluralize = (word, count) => `${count} ${word}${count === 1 ? "" : "s"}`;

class JestSimpleEmojiReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunStart(test) {
    console.log("🃏");
    console.log(
      pluralize("Test suite", test.numTotalTestSuites) + " were found...📝"
    );
    process.stdout.write("\n");
  }

  onRunComplete(test, results) {
    const {
      numFailedTests,
      numPassedTests,
      numPendingTests,
      testResults,
      numTotalTests,
      startTime
    } = results;

    process.stdout.write("\n");

    testResults.map(({ failureMessage }) => {
      if (failureMessage) {
        console.log(failureMessage);
      }
    });

    if (!results.snapshot.didUpdate && results.snapshot.unchecked) {
      const obsoleteError =
        pluralize("obsolete snapshot", results.snapshot.unchecked) + " found.";
      if (this._options.color) console.log(`\x1b[31m${obsoleteError}\x1b[0m`);
      else console.log(obsoleteError);
    }

    console.log(`Ran ${numTotalTests} tests in ${testDuration()}`);
    process.stdout.write(`\x1b[32m${numPassedTests || 0} passing\x1b[32m`);
    process.stdout.write("\n");
    process.stdout.write(`\x1b[31m${numFailedTests || 0} failing\x1b[31m`);
    process.stdout.write("\n");
    process.stdout.write(`\x1b[33m${numPendingTests || 0} pending\x1b[33m`);
    process.stdout.write("\n");

    function testDuration() {
      const end = new Date();
      const start = new Date(startTime);
      const sec = (end - start) / 1000;
      return `${sec}s`;
    }
  }

  onTestResult(test, testResult) {
    for (let i = 0; i < testResult.testResults.length; i++) {
      if (testResult.testResults[i].status === "passed") {
        process.stdout.write("  ✅");
      } else if (testResult.testResults[i].status === "pending") {
        process.stdout.write("  🔃");
      } else {
        process.stdout.write("  ❌");
      }
    }
  }
}
module.exports = JestSimpleEmojiReporter;
