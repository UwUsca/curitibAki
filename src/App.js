import React from "react";
import Rotas from "./routes/routes";
import changeTheme from "./components/darkmode";
import { AuthGoogleProvider } from "./contexts/authGoogle";

export const App = () => {
  document.title = "CuritibAki";
  return (
    <div className="App">
      <AuthGoogleProvider>
        <Rotas />
      </AuthGoogleProvider>
      {changeTheme()}
    </div>
  );
};
