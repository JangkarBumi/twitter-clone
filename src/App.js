import 'firebase/firebase-auth';
import 'firebase/firestore';
import React from 'react';
import Landing from './components/Landing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing}/>
      <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
      </Switch>
    </Router>
  );
}

export default App;
