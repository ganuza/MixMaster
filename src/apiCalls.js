export const getCocktails = (spirit) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`)
  .then(response => {
    if(!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
}

export const getRecipe = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    })
}