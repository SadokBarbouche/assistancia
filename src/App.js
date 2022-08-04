import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingpage';
import Description from './pages/decription';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Description />
    </div>
  );
}

export default App;
