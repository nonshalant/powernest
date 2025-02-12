import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Solutions from './components/solutions/Solutions';
import Service from './components/service/Service';
import Fundrasing from './components/fundrasing/Fundrasing';
import Contact from "./components/contact/Contact";
import { useState } from 'react';

function App() {
  const [blur, setBlur] = useState(false);

  return (
    <div className="App">
      <Navigation setBlur={setBlur} />
      <Routes>
        <Route path={"/"} element={<Home blur={blur} />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/solutions"} element={<Solutions />}></Route>
        <Route path={"/services"} element={<Service />}></Route>
        <Route path={"/fundrasing"} element={<Fundrasing />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
