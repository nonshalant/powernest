import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Solutions from './components/solutions/Solutions';
import Service from './components/service/Service';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/solutions"} element={<Solutions />}></Route>
        <Route path={"/services"} element={<Service />}></Route>
      </Routes>
    </div>
  );
}

export default App;
