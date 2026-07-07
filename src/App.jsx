import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(currentCount => {
      // First, increment by 1
      const newCount = currentCount + 1;

      // Then check if the new count is divisible by 5
      // If so, add an additional 100
      if (newCount % 5 === 0) {
        return newCount + 100;
      }

      return newCount;
    });
  };

  const add100 = () => {
    setCount(currentCount => currentCount + 100);
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
