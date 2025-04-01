import { useState } from "react";
import "./style.css";

function HeronsFormula() {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [sideC, setSideC] = useState("");
    const [result, setResult] = useState("");

    function calculateHeron() {
        let a = parseFloat(sideA);
        let b = parseFloat(sideB);
        let c = parseFloat(sideC);

        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
            setResult("Invalid input");
            return;
        }

        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        setResult(isNaN(area) ? "Invalid triangle" : area.toFixed(2));
    }

    return (
        <div className="box">
            <h2>Heron's Formula</h2>
            <input type="number" value={sideA} onChange={(e) => setSideA(e.target.value)} placeholder="Side A" />
            <input type="number" value={sideB} onChange={(e) => setSideB(e.target.value)} placeholder="Side B" />
            <input type="number" value={sideC} onChange={(e) => setSideC(e.target.value)} placeholder="Side C" />
            <button onClick={calculateHeron}>Calculate</button>
            <input type="text" value={result} readOnly placeholder="Result" />
        </div>
    );
}

export default HeronsFormula