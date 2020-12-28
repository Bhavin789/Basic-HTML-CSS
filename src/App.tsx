import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TributePage from "./pages/TributePage";
import SurveyFormPage from "./pages/SurveyFormPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TributePage} />
        <Route path="/tribute" exact component={TributePage} />
        <Route path="/survey" exact component={SurveyFormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
