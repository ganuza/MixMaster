import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import CocktailCard from '../CocktailCard/CocktailCard'
import { getCocktails } from '../../apiCalls'
import './CocktailsContainer.css'

const CocktailsContainer = () => {
  const [cocktails, setCocktails] = useState([])
  const [cocktailsError, setCocktailsError] = useState('')

  const {spirit} = useParams()
  const navigate = useNavigate()

  const captureSpirit = (chosenSpirit) => {
    navigate(`/cocktails/${chosenSpirit}`)
  };
  
  console.log('cocktail container cocktails: ', cocktails)

  useEffect(() => {
    setCocktailsError('')
    if (spirit) {
      getCocktails(spirit)
        .then((data) => {
          setCocktails(data.drinks || [])
        })
        .catch((error) => setCocktailsError(error.message))
    }
  }, [spirit])

  const cocktailCards = cocktails.map((cocktail) => {
    return <CocktailCard
      key={cocktail.idDrink}
      cocktail={cocktail}
    />
  })

  return (
    <div className="cocktails-oval-container">
      <div className="cocktails-oval cocktails-overlap-3"></div>
      <div className="cocktails-oval cocktails-overlap-2"></div>
      <div className="cocktails-oval cocktails-overlap-1"></div>
      <div className="cocktails-selection-box">
        <div className="current-cocktail-message-form">
          {!spirit ? <h2></h2> : 
          
          <h2>Cocktails Made with {spirit}</h2>}
          <Form captureSpirit={captureSpirit} />
          
        </div>
        <div className="cocktail-cards">
          {cocktailsError ? ( <div className='cocktail-error-message'><h3>ERROR {cocktailsError}. Please try again later.</h3></div>) :
          !cocktails.length && spirit ? (
            <p>Loading...</p>
          ) : (
            cocktailCards
          )}
          
        </div>
      </div>
    </div>
  );
};

export default CocktailsContainer