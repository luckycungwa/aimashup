// import { Card } from "@mui/material";
import "./App.css";
import Button from "./components/Button";
import FailedCard from "./components/FailedCard";
import SuccessCard from "./components/SuccessCard";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="App-header ">
        <Home />
        <div className="cardSection">
          {/* <SuccessCard /> */}
          {/* <FailedCard /> */}
        </div>
      </div>

      {/* <Dashboard/>  */}
    </div>
  );
}

export default App;
