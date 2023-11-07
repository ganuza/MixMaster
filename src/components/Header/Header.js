import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

  return (
    <div className='header'>
      <h1>MixMaster</h1>
      <div className='header-links-container'>
        <NavLink className='home-link' to='/'>Home</NavLink>
        <NavLink className='explore-link' to='/'>Choose Spirit</NavLink>
      </div>
      
    </div>
  )
}

export default Header