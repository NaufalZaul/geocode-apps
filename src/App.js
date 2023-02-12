import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Application from './Component/Application';
import Home from './Component/Home';
import Search from './Component/Search';
import SearchByCoordinatePoint from './Component/Coordinate';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/location-now' element={<Application />} />
          <Route path='/search-country' element={<Search />} />
          <Route path='/search-coordinate' element={<SearchByCoordinatePoint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
