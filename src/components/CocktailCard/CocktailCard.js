import './CocktailCard.css'

const CocktailCard = ({ cocktail }) => {
  return (
    <div className="cocktail-card">
      <h2>{cocktail.strDrink}</h2>
      {/* <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /> */}
      {/* <p>{cocktail.strInstructions}</p> */}
    </div>
  );
};

export default CocktailCard;