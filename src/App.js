import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingpage';
import OurMission from './pages/ourmission';
import WhyUs from './pages/whyus';
import MadeBy from './pages/madeby';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <OurMission />
      <WhyUs />
      <MadeBy />
    </div>
  );
}

export default App;
