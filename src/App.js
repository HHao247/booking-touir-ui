import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import dashboard
import FunctionsBar from './pages/Dashboard/FunctionsBar';
import AdminPage from './pages/Dashboard/AdminPage';
import HeaderAdmin from './pages/Dashboard/Header';
import ListTour from './pages/Dashboard/ListTourAdmin';
import ListUsersPage from './pages/Dashboard/ListUsersAdmin';
import ProfilePage from './pages/ProfilePage';
import ListCardPage from './pages/Dashboard/ListCartAdmin';
import ListCartUserPage from './pages/ListCartUser';

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
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/cart-user">
          <ListCartUserPage />
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
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ flexBasis: '25%', padding: '20px', textAlign: 'center', height: '100%', background: '#FFFFFF' }}>
          <FunctionsBar />
        </div>
        <div style={{ flexBasis: '75%' }}>
          <HeaderAdmin />
          <Switch>
            <Route path="/dashboard" exact>
              <AdminPage />
            </Route>
            <Route path="/dashboard/cart">
              <ListCardPage />
            </Route>
            <Route path="/dashboard/list-tour">
              <ListTour />
            </Route>
            <Route path="/dashboard/users">
              <ListUsersPage />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
