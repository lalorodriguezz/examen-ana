const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "qdt398",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
});
