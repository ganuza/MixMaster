describe('error handling', () => {
  it('should show a 404 error message if the network request for cocktails for a given spirit fails', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila', {
      statusCode: 404,
      body: ''
    }).as('getCocktails')
    cy.visit('http://localhost:3000/cocktails')
    cy.get('.dropdown').select('Tequila').wait('@getCocktails')
    cy.get('.cocktail-error-message').should('contain', 'ERROR 404 Not Found. Please try again later.')
  })

  it('should show a 500 error message if the network request for cocktails for a given spirit fails', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila', {
      statusCode: 500,
      body: ''
    }).as('getCocktails')
    cy.visit('http://localhost:3000/cocktails')
    cy.get('.dropdown').select('Tequila').wait('@getCocktails')
    cy.get('.cocktail-error-message').should('contain', 'ERROR 500 Internal Server Error. Please try again later.')
  })

  it('should show a 404 error message if the network request for a cocktail recipe fails', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila', {
      statusCode: 200,
      fixture: 'cocktails'
    }).as('getCocktails')
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16100', {
      statusCode: 404,
      body: ''
    }).as('getRecipe')
    cy.visit('http://localhost:3000/cocktails')
    cy.get('.dropdown').select('Tequila').wait('@getCocktails')
    cy.get(':nth-child(1) > .cocktail-info > .svg-inline--fa').click().wait('@getRecipe')
    cy.get('.recipe-error-message').should('contain', 'ERROR 404 Not Found. Apologies, please try again later.')
  })

  it('should show a 500 error message if the network request for a cocktail recipe fails', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila', {
      statusCode: 200,
      fixture: 'cocktails'
    }).as('getCocktails')
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16100', {
      statusCode: 500,
      body: ''
    }).as('getRecipe')
    cy.visit('http://localhost:3000/cocktails')
    cy.get('.dropdown').select('Tequila').wait('@getCocktails')
    cy.get(':nth-child(1) > .cocktail-info > .svg-inline--fa').click().wait('@getRecipe')
    cy.get('.recipe-error-message').should('contain', 'ERROR 500 Internal Server Error. Apologies, please try again later.')
  })
})