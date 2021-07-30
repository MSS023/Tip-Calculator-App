import './App.css';
import Calculator from "./Calculator.js";
import Logo from "./Images/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Logo" />
      <Calculator />
    </div>
  );
}

export default App;
