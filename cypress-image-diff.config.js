const config = {
  ROOT_DIR: 'cypress/visual-tests',
  REPORT_DIR: 'cypress/visual-tests-report',
  FAIL_ON_MISSING_BASELINE: false,
  COMPARISON_OPTIONS: { threshold: 0.001 }, // 0.1% threshold as requested
};

module.exports = config;
