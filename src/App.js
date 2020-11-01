import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firestore';
import React, { useState } from 'react';
import './App.css';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
<Signup/>
    </div>
  );
}

export default App;
