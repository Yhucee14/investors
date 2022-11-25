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
import Squad from "./Components/Squad/Squad";

function App() {
  return (
    // <div className="App">
    //   <Container />
    
    
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Squad" element={<Squad />} />
      <Route path="/Fixtures" element={<Fixtures />} />
      <Route path="/About" element={<About />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
