import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Header className='header'/>
      <Routes>
        <Route path='/' element={
          <Welcome />
        }
        />
      </Routes>
    </main>
  )
}

export default App;
