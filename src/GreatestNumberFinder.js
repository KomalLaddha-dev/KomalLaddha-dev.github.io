import React, { useState } from 'react';

function GreatestNumberFinder() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [greatest, setGreatest] = useState(null);

  const findGreatestNumber = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      const greatestNumber = Math.max(n1, n2, n3);
      setGreatest(greatestNumber);
    } 
    else {
      alert('Please enter valid numbers');
    }
  };

  return (
    <div>
      <h2>Greatest Number Finder</h2>
      <div>
        <label>Number 1: </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <label>Number 2: </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <label>Number 3: </label>
        <input
          type="number"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
        />
      </div>
      <button onClick={findGreatestNumber}>Find Greatest Number</button>
      {greatest && <p>The greatest number is: {greatest}</p>}
    </div>
  );
}

export default GreatestNumberFinder;