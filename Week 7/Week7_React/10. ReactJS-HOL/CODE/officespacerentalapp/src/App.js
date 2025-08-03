import React from 'react';

const offices = [
  { name: 'Office A', rent: 55000, address: 'Address A' },
  { name: 'Office B', rent: 65000, address: 'Address B' },
  { name: 'Office C', rent: 45000, address: 'Address C' }
];

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>Office Space Rental</h1>
    <img src="https://via.placeholder.com/400" alt="Office Space" />
    {offices.map((o, idx) => (
      <div key={idx} style={{ margin: '10px 0' }}>
        <h2>{o.name}</h2>
        <p style={{ color: o.rent < 60000 ? 'red' : 'green' }}>Rent: {o.rent}</p>
        <p>Address: {o.address}</p>
      </div>
    ))}
  </div>
);

export default App;