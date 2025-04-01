import { useState } from "react";
import "./style.css";

function PolynomialFunction() {
    const [coeffs, setCoeffs] = useState("");
    const [exps, setExps] = useState("");
    const [xValue, setXValue] = useState("");
    const [polyResult, setPolyResult] = useState("");
    const [polyEvalResult, setPolyEvalResult] = useState("");

    function calculatePolynomial() {
        let coeffArray = coeffs.split(" ").map(Number);
        let expArray = exps.split(" ").map(Number);
        let x = parseFloat(xValue);

        if (coeffArray.length !== expArray.length || isNaN(x)) {
            setPolyResult("Invalid input");
            setPolyEvalResult("");
            return;
        }

        let polyString = "";
        let result = 0;

        for (let i = 0; i < coeffArray.length; i++) {
            if (i > 0) polyString += coeffArray[i] >= 0 ? " + " : " - ";
            polyString += Math.abs(coeffArray[i]) + "x^" + expArray[i];
            result += coeffArray[i] * Math.pow(x, expArray[i]);
        }

        setPolyResult("f(x) = " + polyString);
        setPolyEvalResult("f(" + x + ") = " + result.toFixed(2));
    }

    return (
        <div className="box">
            <h2>Polynomial Function</h2>
            <input type="text" value={coeffs} onChange={(e) => setCoeffs(e.target.value)} placeholder="Coefficients" />
            <input type="text" value={exps} onChange={(e) => setExps(e.target.value)} placeholder="Exponents" />
            <input type="number" value={xValue} onChange={(e) => setXValue(e.target.value)} placeholder="x Value" />
            <button onClick={calculatePolynomial}>Calculate</button>
            <input type="text" value={polyResult} readOnly placeholder="Polynomial Function (Result)" />
            <input type="text" value={polyEvalResult} readOnly placeholder="Polynomial Evaluation (Result)" />
        </div>
    );
}

export default PolynomialFunction
