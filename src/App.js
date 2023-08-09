import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListPage from './pages/Dashboard/ListPage';
import FunctionsBar from './pages/Dashboard/FunctionsBar';
import ContentAdmin from './pages/Dashboard/ContentAdmin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <DashboardRoutes />
        </Route>
        <Route>
          <DefaultRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function DefaultRoutes() {
  return (
    <div className="wrapper-content">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/post">
          <PostDetailPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function DashboardRoutes() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flexBasis: '20%', marginLeft: '40px', textAlign: 'center' }}>
          <FunctionsBar />
        </div>
        <div style={{ flexBasis: '70%', marginRight: '40px' }}>
          <Switch>
            <Route path="/dashboard/list">
              <ListPage />
            </Route>
            <Route path="/dashboard/content">
              <ContentAdmin />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
