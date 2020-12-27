import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountsPage from "./pages/AccountsPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/accounts" component={AccountsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
