import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

function App() {

  const [dark, setDark] = useState(false)

  return (
    <div className="App">
     <Page dark={dark} setDark={setDark}/>
    </div>
  );
}

export default App;
