export const getCocktails = (spirit) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`)
  .then(response => {
    if(!response.ok) {
      throw new Error(`${statusCode} ${statusText}`)
    }
    return response.json()
  })
}