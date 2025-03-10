const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
});
