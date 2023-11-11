describe('coctails page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila', {
      statusCode: 200,
      fixture: 'cocktails'
    }).as('getCocktails')
    cy.visit('http://localhost:3000/cocktails')
  })

  it('should show a dropdown menu on page load and show a list of coctails for the spirit selected', () => {
    cy.get('.explore-link').should('have.css', 'text-decoration-line', 'underline')
    cy.get('.dropdown').should('contain', 'Choose Spirit').select('Tequila').wait('@getCocktails')
    cy.get('.current-cocktail-message-form > h2').should('contain', 'Cocktails Made with Tequila')
    cy.get('.cocktail-cards').children().should('have.length', 3)
    cy.get('.cocktail-card').first().children().should('have.length', 2)
    cy.get(':nth-child(1) > .cocktail-info > .cocktail-img').should('have.attr', 'src', 'https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg')
    cy.get(':nth-child(1) > .cocktail-info').contains('Amaretto Stone Sour Alternative')
    cy.get(':nth-child(1) > .cocktail-info > .svg-inline--fa').should('exist')
    cy.get(':nth-child(3) > .cocktail-info > .cocktail-img').should('have.attr', 'src', 'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg')
    cy.get(':nth-child(3) > .cocktail-info').contains('Bloody Maria')
    cy.get(':nth-child(3) > .cocktail-info > .svg-inline--fa').should('exist')
  })

  it('should show a recipe when the chevron on a cocktail card is clicked', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16100', {
      statusCode: 200,
      fixture: 'recipe'
    }).as('getRecipe')
    cy.get('.dropdown').should('contain', 'Choose Spirit').select('Tequila').wait('@getCocktails')
    cy.get(':nth-child(1) > .cocktail-info > .svg-inline--fa').click().wait('@getRecipe')
    cy.get('.recipe').children().should('have.length', 3)
    cy.get('.recipe > h3').should('contain', 'Ingredients:')
    cy.get('ul > :nth-child(1)').contains('li', '2 oz', 'Sour mix')
    cy.get('ul > :nth-child(4)').contains('li', 'Add splash Orange juice')
    cy.get('.recipe > :nth-child(3)').contains('h3', 'Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.')
  })

  it('should allow the user to return home on the click of the Home link', () => {
    cy.get('.home-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.home-link').should('have.css', 'text-decoration-line', 'underline')
  })
})