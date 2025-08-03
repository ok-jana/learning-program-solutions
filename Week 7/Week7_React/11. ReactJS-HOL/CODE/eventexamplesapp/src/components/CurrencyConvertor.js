import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2);
    setEuros(converted);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rupees to Euro</h2>
      <input
        type="number"
        value={rupees}
        onChange={e => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button type="submit">Convert</button>
      {euros !== null && <p>Euros: {euros}</p>}
    </form>
  );
};

export default CurrencyConvertor;