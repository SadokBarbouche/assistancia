import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import OurMission from './pages/ourmission';
import WhyUs from './pages/whyus';
import MadeBy from './pages/madeby';
import Footer from './components/Footer';
import Login from './pages/login';
import NavBar from './components/navbar';
import WholeLandingPage from './pages/wholeLandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<WholeLandingPage />} />
          <Route path="/Login" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
