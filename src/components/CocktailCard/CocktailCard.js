import './CocktailCard.css'

const CocktailCard = ({ cocktail }) => {
  return (
    <div className="cocktail-card">
      <img className='cocktail-img' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h2>{cocktail.strDrink}</h2>
    </div>
  );
};

export default CocktailCard;