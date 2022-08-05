import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingpage';
import OurMission from './pages/ourmission';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <OurMission />
    </div>
  );
}

export default App;
