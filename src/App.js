import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";


function App() {
  const logoutBtn = localStorage.removeItem('token')
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logoutBtn} data-testid="logoutButton" href="/">logout</a>
        </header> 
        <Switch>   
         <Route exact path="/" component={Login} />
         <PrivateRoute exact path='/bubblespage' component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.