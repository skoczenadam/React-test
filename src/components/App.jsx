/* eslint-disable no-unused-vars */
// import { ClickCounter } from "./Alert";

import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(() => {
	// Odczyt wartości według klucza
  const savedClicks = window.localStorage.getItem("saved-clicks");

	// Jeśli jest coś do oczytania, zwracamy tę wartość 
  // jako początkową wartość stanu
  if (savedClicks !== null) {
    return ~~savedClicks;
  }

	// W przeciwnym razie zwracamy 
	// dowolną domyślną wartość
  return 0;
});

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default App;