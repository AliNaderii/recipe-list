// tools
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';

// components
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.css';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <ThemeSelector />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/create' element={ <Create /> } />
            <Route path='/recipes/:id' element={ <Recipe /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
