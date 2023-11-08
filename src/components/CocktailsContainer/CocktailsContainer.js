import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import CocktailCard from '../CocktailCard/CocktailCard';
import './CocktailsContainer.css';
import { getCocktails } from '../../apiCalls';

const CocktailsContainer = () => {
  const [cocktails, setCocktails] = useState([]);
  const [chosenSpirit, setChosenSpirit] = useState('');

  const captureSpirit = (spirit) => {
    setChosenSpirit(spirit);
  };
  console.log('cocktail container cocktails: ', cocktails)
  useEffect(() => {
    if (chosenSpirit) {
      getCocktails(chosenSpirit)
        .then((data) => {
          setCocktails(data.drinks || []);
        })
        .catch((error) => console.log(error));
    }
  }, [chosenSpirit]);

  return (
    <div className="cocktails-oval-container">
      <div className="cocktails-oval cocktails-overlap-3"></div>
      <div className="cocktails-oval cocktails-overlap-2"></div>
      <div className="cocktails-oval cocktails-overlap-1"></div>
      <div className="cocktails-selection-box">
        <Form captureSpirit={captureSpirit} />
        <div className="cocktail-cards">
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CocktailsContainer;