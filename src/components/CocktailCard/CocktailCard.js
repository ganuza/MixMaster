import { getRecipe } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CocktailCard.css';

const CocktailCard = ({ cocktail }) => {
  const [expanded, setExpanded] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [recipeFetchError, setRecipeFetchError] = useState('');

  useEffect(() => {
    if (expanded) {
      getRecipe(cocktail.idDrink)
        .then(data => setRecipe(data.drinks[0]))
        .catch(error => setRecipeFetchError(error.message));
    }
  }, [expanded, cocktail.idDrink])

  const extractIngredients = (recipeData) => {
    const ingredients = []

    Object.keys(recipeData).forEach(key => {
      if (key.startsWith('strIngredient') && recipeData[key]) {
        ingredients.push(recipeData[key]);
      }
    });

  

    return ingredients;
  };

  const extractMeasurements = (recipeData) => {

    const measurements = []

    Object.keys(recipeData).forEach(key => {
      if (key.startsWith('strMeasure') && recipeData[key]) {
        measurements.push(recipeData[key])
      }
    })
    return measurements
  }
  console.log('recipe: ', recipe)
  
  const ingredients = expanded && recipe ? extractIngredients(recipe) : [];
  const measurements = expanded && recipe ? extractMeasurements(recipe) : []
  console.log('ingredients: ', ingredients)
  console.log('measurements', measurements)

  
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
      {expanded && recipe && (
        <div className="recipe">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {measurements[index] && `${measurements[index]} `}
              {ingredient}
            </li>
          ))}
        </ul>
        <h3>{recipe.strInstructions}</h3>
      </div>
      )}
    </div>
  );
};

export default CocktailCard;