import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountsPage from './pages/AccountsPage';
import DashboardPage from './pages/DashboardPage';
import MainLayout from './components/Layout/MainLayout';
import GlobalStyles from './GlobalStyles';
import Core from './containers/base/Core';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Core />
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
