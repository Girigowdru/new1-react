import React from 'react';
import './App.css';
import Footer from './components/footer';
import MyHeader from './components/header';
import Menu from './components/menu';
import BodyComponent from './components/body';
/*import ReactDOM  from 'react-dom/client';*/


function App() {
  return (
    <div >
      <p className="App-header"><MyHeader /></p>
      <p><Menu/></p>
      <p><BodyComponent /></p>
      <p className="App-footer"><Footer /></p>
    </div>
  );
}


export default App;
