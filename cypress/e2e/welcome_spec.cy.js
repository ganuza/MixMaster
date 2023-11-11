describe('welcome page', () => {
  it('should show the title, a home and Choose Spirit link, and a welcome message', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').should('contain', 'MixMaster')
    cy.get('.header-links-container').children().should('have.length', 2)
    cy.get('.home-link').should('contain', 'Home')
    cy.get('.explore-link').should('contain', 'Choose Spirit')
    cy.get('.selection-box-text').should('contain', 'Welcome to MixMaster, where your favorite cocktail recipes are just a click away! Click the Choose Spirit link above to select a spirit for cocktail recipes!')
  })
  it('should take you to a new page where you can interact with the app, upon clicking the Choose Spirit link', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.explore-link').click()
    cy.url().should('eq', 'http://localhost:3000/cocktails')
  })
})