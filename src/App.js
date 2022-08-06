import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingpage';
import OurMission from './pages/ourmission';
import WhyUs from './pages/whyus';
import MadeBy from './pages/madeby';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <OurMission />
      <WhyUs />
      <MadeBy />
      <Footer />
    </div>
  );
}

export default App;
