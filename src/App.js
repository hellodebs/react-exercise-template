import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello React");
  // Your code below
  useEffect(() => {
    document.title = "Hello neuefische ";
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
