import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TributePage from "./pages/TributePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TributePage} />
        <Route path="/tribute" exact component={TributePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
