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
  }, [expanded, cocktail.idDrink]);

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
          <h3>Recipe:</h3>
          <p>{recipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default CocktailCard;