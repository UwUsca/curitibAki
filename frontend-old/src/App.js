import React from "react";
import Rotas from "./rotas";
import changeTheme from "./components/darkmode";

function App() {
  document.title ="CuritibAki";
  return (
    <div className="App">
      <Rotas/>
      {changeTheme()}
    </div>
  );
}

export default App;
