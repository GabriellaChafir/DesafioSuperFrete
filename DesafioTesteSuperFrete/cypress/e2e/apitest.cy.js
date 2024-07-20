describe('API Test', () => {
    it('Deve retornar um status 200', () => {
      cy.request('GET', 'https://web.superfrete.com/', {
     
      }).then((response) => {
        expect(response.status).to.eq(200);
  
      });
    });
  });