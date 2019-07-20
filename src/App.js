import React from 'react';
import './App.css';
import CountersList from "./components/CountersList";
import AddCounter from "./components/AddCounter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="counters-app p-5">
      <Navbar />
      <AddCounter />
      <CountersList />
    </div>
  );
}

export default App;
