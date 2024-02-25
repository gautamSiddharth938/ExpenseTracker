import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import BalanceSheet from './Components/BalanceSheet';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
     mode: 'light'   
    }
  }

  changeMode = () => {
    if (this.state.mode === 'dark') {
      this.setState({mode: 'light'})
      document.body.style.backgroundColor = 'white'      
    } else {
      this.setState({mode: 'dark'})
      document.body.style.backgroundColor = '#1e1b4b'      
    };
  }
  render() {
    return (
      <>
       <Navbar mode={this.mode} toggleMode={this.changeMode}/> 
       <div className="container my-3 overflow-hidden">
        <BalanceSheet mode={this.mode} toggleMode={this.changeMode} />
       </div>
      </>
    )
  }
}

