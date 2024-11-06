const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa eventos node aqui
    },
    baseUrl: 'https://developers.getnet.com.br/api#tag/Autenticacao',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false // Adicione esta linha para desativar o arquivo de suporte
  }
})
