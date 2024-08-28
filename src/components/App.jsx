/* eslint-disable no-unused-vars */
// import { ClickCounter } from "./Alert";

import { useState, useEffect } from "react";
// import { LangSwitcher } from "./Alert";

const App = () => {
  const [coffeeSize, setCoffeeSize] = useState("sm");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const tablica = [
    { shortBig: "sm", isBig: "Small" },
    { shortBig: "md", isBig: "Medium" },
    { shortBig: "lg", isBig: "Large" },
  ];

  return (
    <>
      <h1>Select coffee size</h1>
      {tablica.map((howBig) => (
        <label key={howBig.shortBig}>
          <input
            type="radio"
            name="coffeeSize"
            value={howBig.shortBig}
            checked={coffeeSize === howBig.shortBig}
            onChange={handleSizeChange}
          />
          {howBig.isBig}
        </label>
      ))}
    </>
  );
};
export default App;
