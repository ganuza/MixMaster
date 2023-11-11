import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Welcome from '../Welcome/Welcome'
import Footer from '../Footer/Footer'
import CocktailsContainer from '../CocktailsContainer/CocktailsContainer'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import './App.css'

const App = () => {

  return (
    <main className='App'>
      <Header className='header'/>
      <Routes>
        <Route path='/' element={
          <Welcome className='welcome'/>
        }/>
        <Route path='/cocktails' element={
          <CocktailsContainer />
        }/>
        <Route path='/cocktails/:spirit' element={
          <CocktailsContainer />
        }/>
        <Route path='*' element={
          <ErrorComponent message="The page you're looking for doesn't exist.  Please Select the Home link or the Choose Spirit link above to continue."/>
        }/>
      </Routes>
      <Footer className='footer'/>
    </main>
  )
}

export default App