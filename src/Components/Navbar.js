import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-lg bg-${this.props.mode === 'light'?'light':'dark'} navbar-${this.props.mode === 'light'?'light':'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ExpenseTracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            {/* <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={() => { this.props.toggleMode('dark') }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {this.props.mode === 'light' ? 'dark' : 'light'} Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}
