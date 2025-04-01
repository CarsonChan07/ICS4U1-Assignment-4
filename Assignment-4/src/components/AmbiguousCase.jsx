import { useState } from "react";
import "./style.css";

function AmbiguousCase() {
    const [angleA, setAngleA] = useState("");
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [result, setResult] = useState("");

    function calculateAmbiguous() {
        let A = parseFloat(angleA);
        let a = parseFloat(sideA);
        let b = parseFloat(sideB);

        if (isNaN(A) || isNaN(a) || isNaN(b) || A <= 0 || a <= 0 || b <= 0) {
            setResult("Invalid input");
            return;
        }

        let h = b * Math.sin(A * (Math.PI / 180));
        let res = "No triangle";

        if (A < 90) {
            if (a < h) res = "No triangle";
            else if (a === h) res = "Right triangle";
            else if (a > b) res = "One triangle";
            else res = "Two triangles (Ambiguous case)";
        } else {
            res = a <= b ? "No triangle" : "One triangle";
        }
        setResult(res);
    }

    return (
        <div className="box">
            <h2>Ambiguous Case</h2>
            <input type="number" value={angleA} onChange={(e) => setAngleA(parseFloat(e.target.value) || "")} placeholder="Angle A" />
            <input type="number" value={sideA} onChange={(e) => setSideA(parseFloat(e.target.value) || "")} placeholder="Side A" />
            <input type="number" value={sideB} onChange={(e) => setSideB(parseFloat(e.target.value) || "")} placeholder="Side B" />
            <input type="text" value={result} readOnly placeholder="Result" />
            <button onClick={calculateAmbiguous}>Calculate</button>
        </div>
    );
}

export default AmbiguousCase