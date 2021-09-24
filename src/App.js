import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

// importing files
import Navbar from './components/NavbarPage/NavbarPage';
import Landing from './components/LandingPage/LandingPage';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/LoginPage';
import Signup from './components/SignupPage/SignupPage';
import Profile from './components/ProfilePage/ProfilePage';
import Footer from './components/FooterPage/FooterPage';


function App() {
  return (
      <Router>
          <AuthProvider>

        <Navbar/>
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/profile" component={Profile} />

        </Switch>
        <Footer/>
          </AuthProvider>
      </Router>
  );
}

export default App;
