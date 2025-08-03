import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

const App = () => {
  const [count, setCount] = useState(0);

  const sayHello = () => console.log('Hello! This is a static message.');
  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };
  const decrement = () => setCount(prev => prev - 1);

  const sayWelcome = (msg) => alert(msg);

  const handlePress = () => alert('I was clicked');

  return (
    <div style={{ padding: 20 }}>
      <h1>Event Examples App</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <button onClick={handlePress}>Press Me</button>
      <p>Counter Value: {count}</p>
      <CurrencyConvertor />
    </div>
  );
};

export default App;