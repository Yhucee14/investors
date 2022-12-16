import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
 import Container from './Components/Container/Container';
import Fixtures from "./Components/Fixtures/Fixtures";
import Login from './Components/Login/Login';
import Signup from "./Components/Signup/Signup";
import Squad from "./Components/Squad/Squad";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/container" element={<Container />} />
      <Route path="/Squad" element={<Squad />} />
      <Route path="/Fixtures" element={<Fixtures />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
    
     
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
