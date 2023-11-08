import Form from '../Form/Form'
import './CocktailsContainer.css'

const CocktailsContainer = () => {

  return (
    <div className="cocktails-oval-container">
    <div className="cocktails-oval cocktails-overlap-3"></div>
    <div className="cocktails-oval cocktails-overlap-2"></div>
    <div className="cocktails-oval cocktails-overlap-1"></div>
    <div className="cocktails-selection-box">
      <Form />
    </div>
  </div>
  )
}

export default CocktailsContainer