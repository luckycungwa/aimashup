
import './App.css';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <Button label="Upload" onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
