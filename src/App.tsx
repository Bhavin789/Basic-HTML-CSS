import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TributePage from "./pages/TributePage";
import TributePage2 from "./pages/TributePage2";
import SurveyFormPage from "./pages/SurveyFormPage";
import SurveyFormPage2 from "./pages/SurveyFormPage2";
import DocumentationPage from "./pages/DocumentationPage";
import ShoppingPage from "./pages/ShoppingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TributePage} />
        <Route path="/tribute/2" exact component={TributePage2} />
        <Route path="/tribute" exact component={TributePage} />
        <Route path="/survey" exact component={SurveyFormPage} />
        <Route path="/survey/2" exact component={SurveyFormPage2} />
        <Route path="/documentation" exact component={DocumentationPage} />
        <Route path="/shop" exact component={ShoppingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
