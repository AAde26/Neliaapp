import React from 'react';
import Header from './components/Header';
import Albums from "./components/Albums";
import "./styles.css";



function App() {
  return (
    <div className="App">
    <Header/>
    <Albums />
    </div>
  );
}

export default App;
