import HeronsFormula from "./components/HeronsFormula.jsx";
import NewtonsMethod from "./components/NewtonsMethod.jsx";
import AmbiguousCase from "./components/AmbiguousCase.jsx";
import PolynomialFunction from "./components/PolynomialFunction.jsx";
import "./components/style.css"

function App() {
  return (
    <div className="container">
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  );
}

export default App
