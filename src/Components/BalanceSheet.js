import React, { Component } from 'react'
import AccountRow from './AccountRow'
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from "nanoid";
import BalanceBook from './BalanceBook';


export default class BalanceSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accounts: [],
      accountid: 100 + "-" + Math.floor(Math.random() * 100),
      // filterOn: false
      expense: 0,
      income: 0,
      balance: 0,
      items: '',
      SNumber: 1
    }
  }

  handleExpenses = (event) => {
    this.setState({
      // balance: balance,
      expense: parseFloat(event.target.value) || 0
    })
  }
  handleBalance = () => {
    let m = this.state.balance
    let balance = this.state.balance - this.state.expense
    // let unique_id = uuidv4();
    let id = nanoid()
    let data = {
      id: id,
      SNumber: this.state.SNumber,
      itemSpentOn: this.state.items,
      amountSpent: this.state.expense,
      leftBalance: m
    }
    
    this.setState((prevState) => ({
      accounts: [...prevState.accounts, data],
      balance: balance,
      items: '',
      expense: 0,
      SNumber: prevState.SNumber + 1
    }))
  }
  

  componentDidMount() {
    
  }
  handleReset = () => {
    this.setState({
      income: "",
      accounts: []
    })
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      income: value,
      balance: value
    });
  };

  render() {
    return (
      <>
        <div className={`container text-${this.props.mode === 'light'?'danger':''} content `} style={{ paddingTop:"2%"}}>
          <div className="bg-primary text-light p-2 rounded">
            <label htmlFor="inputAddress" className="form-label fw-bold">Total Budget</label>
            <div className="input-group mb-3 border border-dark-subtle">
              <span className="input-group-text">&#8377;</span>
              <input type="text" className="form-control " aria-label="Amount (to the nearest rupee)" onClick={this.handleReset} onChange={this.handleChange} value={this.state.income} />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <br />
          <div className="bg-primary text-light p-2 my-2 rounded">
            <label htmlFor="inputAddress" className="form-label fw-bold">Expenditure</label>
            <div className="input-group mb-3 border border-dark-subtle">
              <input type="text" className="form-control" placeholder='Enter the item' onChange={(e) => { this.setState({ items: e.target.value }) }} value={this.state.items} />
            </div>
            <div className="input-group mb-3 border border-dark-subtle">
              <span className="input-group-text">&#8377;</span>
              <input type="text" className="form-control" placeholder="Amount (to the nearest rupee)" aria-describedby="button-addon2" onClick={() => { this.setState({ expense: "" }) }} onChange={this.handleExpenses} value={this.state.expense} />
              <span className="input-group-text">.00</span>
              <button className="btn  bg-success text-light" disabled={this.state.items.length !== 0 ? false : true} type="button" id="button-addon2" onClick={this.handleBalance}>Submit</button>
            </div>
          </div>
        </div>
        <div className="container my-3 p-3" >
          <BalanceBook income={this.state.income} expense={this.state.expense} balance={this.state.balance}/>
        </div>
        <div className="container" >
          <span className='text-center fst-italic fw-bold'><h4>Expenses</h4></span>
          <table className="table table-striped table-hover content">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Amount Spent &#8377;<sup>(in Rupees)</sup></th>
                <th scope="col">Balance Left</th>
              </tr>
            </thead>
            <tbody className='fst-italic fw-medium '>
              {this.state.accounts.map((element) => {
                return <tr className='' key={element.id}>
                  <AccountRow id={element.SNumber} item={element.itemSpentOn} spent={element.amountSpent} left={element.leftBalance} />
                  {/* <td>{element.SNumber}</td>
                  <td>{element.itemSpentOn}</td>
                  <td>{element.amountSpent}</td>
                  <td>{element.leftBalance}</td> */}
                </tr>
              })}
            </tbody>
          </table>




        </div>
      </>
    )
  }
}
