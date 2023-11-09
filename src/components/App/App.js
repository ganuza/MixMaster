import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Footer from '../Footer/Footer';
import CocktailsContainer from '../CocktailsContainer/CocktailsContainer';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Header className='header'/>
      <Routes>
        <Route path='/' element={
          <Welcome className='welcome'/>
        }
        />
        <Route path='/cocktails' element={
          <CocktailsContainer />
        }
        />
      </Routes>
      <Footer className='footer'/>
    </main>
  )
}

export default App;
