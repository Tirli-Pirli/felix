import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Private from "./components/PrivateRoute/Private"


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <PrivateRoute exact path="/content">
              <Private/>
          </PrivateRoute>
          <Redirect from="/" exact to={localStorage.getItem('token') ? '/content' : '/home'}/>
        </Switch>
        
        <Footer />
      </div>
    </Router>
    
  );
};

export default App;
