import { getRecipe } from '../../apiCalls';
import { useState, useEffect } from 'react'
import './CocktailCard.css'

const CocktailCard = ({ cocktail }) => {

  const [expanded, setExpanded] = useState(false)
  const [recipe, setRecipe] = useState(null)
  const [recipeFetchError, setRecipeFetchError] = useState('')

  useEffect(() => {
    if (expanded) {
      getRecipe()
        .then(data => setRecipe(data))
        .catch(error => setRecipeFetchError(error.message))
    } 
  }, [expanded])

  return (
    <div className="cocktail-card">
      <img className='cocktail-img' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h2>{cocktail.strDrink}</h2>
    </div>
  );
};

export default CocktailCard;