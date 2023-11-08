import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import './CocktailsContainer.css'
import { getCocktails } from '../../apiCalls'

const CocktailsContainer = () => {
  const [cocktails, setCocktails] = useState([])
  const [chosenSpirit, setChosenSpirit] = useState('')

  const captureSpirit = (spirit) => {
    setChosenSpirit(spirit)
  }

  console.log('chosenSpirit: ', chosenSpirit)

  useEffect(() => {
    if (chosenSpirit) {
      getCocktails(chosenSpirit)
        .then(data => {
          setCocktails(data.drinks || []);
        })
        .catch(error => console.log(error));
    }
  }, [chosenSpirit]);

  return (
    <div className="cocktails-oval-container">
      <div className="cocktails-oval cocktails-overlap-3"></div>
      <div className="cocktails-oval cocktails-overlap-2"></div>
      <div className="cocktails-oval cocktails-overlap-1"></div>
      <div className="cocktails-selection-box">
        <Form captureSpirit={captureSpirit}/>
      </div>
    </div>
  )
}

export default CocktailsContainer