import { useState } from "react";
import "./style.css";

function NewtonsMethod() {
    const [rootGuess, setRootGuess] = useState("");
    const [newtonResult, setNewtonResult] = useState("");

    function calculateNewton() {
        let x0 = parseFloat(rootGuess);

        if (isNaN(x0)) {
            setNewtonResult("Invalid input");
            return;
        }

        function f(x) {
            return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        }

        function fPrime(x) {
            return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
        }

        let x1 = x0 - f(x0) / fPrime(x0);
        setNewtonResult(x1.toFixed(5));
    }

    return (
        <div className="box">
            <h2>Newton's Method</h2>
            <input type="number" value={rootGuess} onChange={(e) => setRootGuess(e.target.value)} placeholder="Initial Guess" />
            <button onClick={calculateNewton}>Calculate</button>
            <input type="text" value={newtonResult} readOnly placeholder="Root Approximation" />
        </div>
    );
}

export default NewtonsMethod