describe('Usuário deve conseguir realizar o preenchimento de uma encomenda e o sistema deve calcular o frete com sucesso', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1366, 768);
    cy.visit('https://web.superfrete.com/');
    cy.wait(12000);
  });

  const selecionarOpcaoDropdown = (seletor, textoOpcao) => {
    cy.get(seletor).click().type(textoOpcao).wait(500).get('.MuiAutocomplete-option').contains(textoOpcao).click();
  };

  it('Deve completar o cálculo de frete com sucesso', () => {
    cy.get('#originPostcode').type('08090-284');

    cy.get('#object_format').click();
    cy.get('.Mui-selected').click();

    cy.get('#weight').click();
    cy.get('[data-value="0.3"]').click();

    cy.get('#packageHeight').type('2');
    cy.get('#packageWidth').type('11');
    cy.get('#packageDepth').type('16');

    cy.get('.MuiAccordionSummary-content > .MuiTypography-root').click();

    cy.get('[data-cy="calculator-valueDeclaration"] > .PrivateSwitchBase-input').click();
    cy.get('[data-cy="calculator-objectValue"]').should('be.visible').type('100');

    cy.get('[data-cy="calculator-PostCodeSearch"]').click();
    selecionarOpcaoDropdown('#states', 'São Paulo');
    selecionarOpcaoDropdown('#cities', 'Osasco');
    cy.get('#street').type('Avenida dos Autonomistas');

    cy.get('form > .MuiButton-root').click();

    cy.get(':nth-child(6) > .MuiGrid-container > .MuiGrid-grid-xs-12 > .MuiButtonBase-root').click();
    cy.get('[data-cy="calculator-submit"]').click();

    const textoEsperado = 'PAC';
    cy.get('#calculator-package-type-PAC-container > .MuiGrid-grid-xs-2').should('have.text', textoEsperado);

    cy.get('[data-cy="package-type-PAC"] > .PrivateSwitchBase-input').click();
    cy.contains('button', 'EMITIR FRETE COM DESCONTO').click();

    cy.get('#alert-dialog-slide-description > div > :nth-child(1)').click();
    cy.get('#auth-phoneNumber-input').type('11 99999-9999');
    cy.get('#send-phone-button').click();
  });
});
