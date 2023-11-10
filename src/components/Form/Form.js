import { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const Form = ({ captureSpirit }) => {
  const [spirit, setSpirit] = useState('')

  const handleSpiritChange = (event) => {
    const selectedSpirit = event.target.value
    setSpirit(selectedSpirit)
    captureSpirit(selectedSpirit)
    clearInput()
  };

  const clearInput = () => {
    setSpirit('')
  }

  return (
    <form>
      <select
        className='dropdown'
        name='spirit'
        value={spirit}
        onChange={handleSpiritChange}
      >
        <option value=''>Choose Spirit</option>
        <option value='Gin'>Gin</option>
        <option value='Vodka'>Vodka</option>
        <option value='Tequila'>Tequila</option>
        <option value='Bourbon'>Bourbon</option>
        <option value='Whiskey'>Whiskey</option>
        <option value='Rum'>Rum</option>
        <option value='Scotch'>Scotch</option>
        <option value='Brandy'>Brandy</option>
        <option value='Mezcal'>Mezcal</option>
        <option value='Grand Marnier'>Grand Marnier</option>
        <option value='Vermouth'>Vermouth</option>
        <option value='Campari'>Campari</option>
      </select>
    </form>
  )
}

export default Form

Form.propTypes = {
  captureSpirit: PropTypes.func.isRequired
}