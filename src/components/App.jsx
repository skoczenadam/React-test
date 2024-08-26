/* eslint-disable no-unused-vars */
// import { ClickCounter } from "./Alert";

import { useState, useEffect } from "react";
import { LoginForm } from "./Alert";

const App = () => {
  // Funkcja callback dla przetwarzania submitów formularzy
  const handleLogin = (userData) => {
    // Wykonanie niezbędnych operacji na danych
    console.log(userData);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Przesyłanie callbacku jako propsa formularza */}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default App;
