// tools
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/search' element={ <Search /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/recipes/:id' element={ <Recipe /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
