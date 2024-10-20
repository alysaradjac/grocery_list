import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Item />
      <Footer />
    </div>
  );
}

export default App;


