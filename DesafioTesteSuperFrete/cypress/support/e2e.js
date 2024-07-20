Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false para impedir que o Cypress falhe o teste em caso de exceção não tratada
    return false;
  });