
import './App.css';
import Button from './components/Button';
import FailedCard from './components/FailedCard';
import SuccessCard from './components/SuccessCard';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      {/* <Home />   */}
      <SuccessCard/>
      <FailedCard/>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
