import { getRecipe } from '../../apiCalls'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './CocktailCard.css'

const CocktailCard = ({ cocktail }) => {
  const [expanded, setExpanded] = useState(false)
  const [recipe, setRecipe] = useState(null)
  const [recipeFetchError, setRecipeFetchError] = useState('')

  useEffect(() => {
    if (expanded) {
      getRecipe(cocktail.idDrink)
        .then((data) => setRecipe(data.drinks[0]))
        .catch((error) => setRecipeFetchError(error.message))
    }
  }, [expanded, cocktail.idDrink])

  const extractIngredients = (recipeData) => {
    const ingredients = []

    Object.keys(recipeData).forEach((key) => {
      if (key.startsWith('strIngredient') && recipeData[key]) {
        ingredients.push(recipeData[key])
      }
    });
    return ingredients;
  };

  const extractMeasurements = (recipeData) => {
    const measurements = []

    Object.keys(recipeData).forEach((key) => {
      if (key.startsWith('strMeasure') && recipeData[key]) {
        measurements.push(recipeData[key])
      }
    })
    return measurements
  }

  const ingredients = expanded && recipe ? extractIngredients(recipe) : []
  const measurements = expanded && recipe ? extractMeasurements(recipe) : []

  return (
    <div className={`cocktail-card ${expanded ? 'expanded' : ''}`}>
      <div className="cocktail-info">
        <img className='cocktail-img' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <h2>{cocktail.strDrink}</h2>
        <FontAwesomeIcon
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      {recipeFetchError && (
        <div className='recipe-error-message'><h3>ERROR {recipeFetchError}. Apologies, please try again later.</h3></div>
      )}
      {!recipeFetchError && (
        expanded && !recipe ? (
          <p>Fetching Recipe...</p>
        ) : (
        <div className="recipe">
        {expanded && (
          <>
            <h3>Ingredients:</h3>
            <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {measurements[index] && `${measurements[index]} `}
                {ingredient}
              </li>
            ))}
            </ul>
            <h3>{recipe?.strInstructions}</h3>
          </>
        )}
        </div>
        )
      )}
    </div>
  )
}

export default CocktailCard

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string,
  }),
}