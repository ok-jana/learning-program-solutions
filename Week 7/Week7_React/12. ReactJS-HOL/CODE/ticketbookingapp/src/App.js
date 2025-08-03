import React, { useState } from 'react';

const Guest = () => <h2>Guest View: Browse Flights</h2>;
const User = () => <h2>User View: Book Tickets</h2>;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Ticket Booking App</h1>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
      {loggedIn ? <User /> : <Guest />}
    </div>
  );
};

export default App;