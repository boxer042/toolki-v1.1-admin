import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountsPage from './pages/AccountsPage';
import DashboardPage from './pages/DashboardPage';
import MainLayout from './components/v1/Layout/MainLayout';
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
          <Route path="/accounts" component={AccountsPage} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
}

export default App;

// 콘텐츠라는 컴포넌트를 하나 만들어서
// 744부터 바텀 패딩이 0임
// 743까지 바텀패딩은 5~6rem임 (80px ~)
