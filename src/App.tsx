import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountsPage from './pages/AccountsPage';
import DashboardPage from './pages/DashboardPage';
import PurchasePage from './pages/PurchasePage';
import ComponentPage from './pages/ComponentPage';
import AccountDetailPage from './pages/AccountDetailPage';
import GlobalStyles from './GlobalStyles';
import Core from './containers/base/Core';
import Header from './templates/header/Header';
import Navigation from './templates/navigation/Navigation';
import Content from './templates/content/Content';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Core />
      <Header />
      <Navigation />
      <Content>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/purchase" component={PurchasePage} />
          <Route exact path="/accounts" component={AccountsPage} />
          <Route path="/accounts/detail/:id" component={AccountDetailPage} />
          <Route path="/component" component={ComponentPage} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
}

export default App;

// 콘텐츠라는 컴포넌트를 하나 만들어서
// 744부터 바텀 패딩이 0임
// 743까지 바텀패딩은 5~6rem임 (80px ~)
