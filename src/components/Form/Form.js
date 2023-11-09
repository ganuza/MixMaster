import { useState } from 'react'
import './Form.css'


const Form = ({captureSpirit}) => {
  const [spirit, setSpirit] = useState('')

  
    
  captureSpirit(spirit)
  
    
    


  
  return (
    <form>
      <select 
        className='dropdown'
        name='spirit'
        value={spirit}
        onChange={event => {
          setSpirit(event.target.value)
          }}>
        
          <option value=''>Choose Spirit</option>
          <option value='Gin'>Gin</option>
          <option value='Vodka'>Vodka</option>
          <option value='Tequila'>Tequila</option>
          <option value='Bourbon'>Bourbon</option>
          <option value='Whiskey'>Whiskey</option>
          <option value='Rum'>Rum</option>
          <option value='Mezcal'>Mezcal</option>
      </select>

    </form>
  )
}

export default Form