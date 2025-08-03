import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

const App = () => {
  const flag = true; // toggle to false to switch
  return (
    <div style={{ padding: 20 }}>
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;