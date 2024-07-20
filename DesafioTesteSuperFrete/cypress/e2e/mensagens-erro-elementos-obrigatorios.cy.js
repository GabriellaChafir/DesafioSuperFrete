describe('Verificar texto de erro ao não informar os elementos obrigatórios e inválidos', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1366, 768);
  });

  it('Deve exibir mensagens de erro quando os campos obrigatórios e inválidos não são preenchidos', () => {
    cy.visit('https://web.superfrete.com/');
    cy.wait(12000);

    cy.get('#object_format').click();
    cy.get('.Mui-selected').click();
    cy.wait(2000);

    cy.get('#weight').click();
    cy.wait(2000);

    cy.get('[data-value="0.3"]').click();
    cy.wait(1000);

    cy.get('#packageHeight').type('0.3');
    cy.get('#packageWidth').type('7');
    cy.get('#packageDepth').type('12');
    cy.wait(2000);

    cy.get('[data-cy="calculator-submit"]').click();

    function verificarTexto(seletor, textoEsperado) {
      cy.get(seletor).should('have.text', textoEsperado);
    }

    const validacoes = [
      { seletor: '#originPostcode-helper-text', texto: 'CEP de origem é obrigatório' },
      { seletor: '#destinationPostcode-helper-text', texto: 'CEP de destino é obrigatório' },
      { seletor: '#packageHeight-helper-text', texto: 'Altura mínima 0.4 cm.' },
      { seletor: '#packageWidth-helper-text', texto: 'Largura mínima 8 cm.' },
      { seletor: '#packageDepth-helper-text', texto: 'Comprimento mínimo 13 cm.' },
    ];

    validacoes.forEach(validacao => {
      verificarTexto(validacao.seletor, validacao.texto);
    });
  });
});
