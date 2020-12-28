import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountsPage from "./pages/AccountsPage";
import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/accounts" component={AccountsPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
