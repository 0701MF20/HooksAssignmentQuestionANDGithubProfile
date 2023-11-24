import React, { useState, useMemo, useCallback } from "react";

function Factorials() {
  const [number, setNumber] = useState("");
  const [factorial, setFactorial] = useState(null);

  function CalFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }

  const handleNumberChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const calculatedFact = useMemo(() => CalFactorial(parseInt(number)), [number]);

  const handleCalculateFactorial = useCallback(() => {
    if (!isNaN(calculatedFact)) {
      setFactorial(calculatedFact);
    } else {
      setFactorial(null);
    }
  }, [calculatedFact]);

  return (
    <div>
      <label>
        Enter a number:
        <input type="text" value={number} onChange={handleNumberChange} />
      </label>
      <button onClick={handleCalculateFactorial}>Calculate Factorial</button>
      <p>Factorial is: {factorial}</p>
    </div>
  );
}

export default Factorials;
