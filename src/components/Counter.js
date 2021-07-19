import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // Your code below

  //loading data from local storage
  useEffect(() => {
    const savedVisits = Number(localStorage.getItem("visitCounter"));
    setCount(savedVisits);
  });

  //saving data in local storage. If the count state changes, the result should be saved in local storage.
  useEffect(() => {
    localStorage.setItem("visitCounter", count);
  }, [count]);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
