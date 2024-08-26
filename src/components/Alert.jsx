// // import { useState } from 'react';

// export const ClickCounter = ({ value, onUpdate }) => {
// 	return <button onClick={onUpdate}>Current: {value}</button>
// };

import { useState } from "react";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};
