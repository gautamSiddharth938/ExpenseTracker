import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import BalanceSheet from './Components/BalanceSheet';

export default class App extends Component {
  render() {
    return (
      <>
       <Navbar/> 
       <div className="container my-3">
        <BalanceSheet />
       </div>
      </>
    )
  }
}

