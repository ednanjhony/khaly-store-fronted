import React from 'react';

// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ForgotPassword from './pages/ForgotPassword';
// import Dashboard from './pages/Dashboard';
import Lingerie from './pages/Lingerie';
// import ShowDetails from './pages/ShowDetails';
// import Cart from './pages/Cart';
// import Layout from './components/Layout';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Lingerie />
    <GlobalStyle />
  </>
);

export default App;
