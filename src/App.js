import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingpage';
import OurMission from './pages/ourmission';
import WhyUs from './pages/whyus';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <OurMission />
      <WhyUs />
    </div>
  );
}

export default App;
