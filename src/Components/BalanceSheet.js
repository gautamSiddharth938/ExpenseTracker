import React, { Component } from 'react'
import AccountRow from './AccountRow'

export default class BalanceSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accounts: [],
      accountid: 0,
      // filterOn: false
      expense: 0,
      income: 0,
      balance: 0,
      items: '',
    }
  }
  handleExpenses = (event) => {
    this.setState({
      // balance: balance,
      expense: parseFloat(event.target.value) || 0
    })
  }
  handleBalance = () => {
    let balance = this.state.balance - this.state.expense
    let data = {
      id: this.state.accountid + 1,
      itemSpentOn: this.state.items,
      amountSpent: this.state.expense,
      leftBalance: this.state.balance
    }
    this.setState({
      balance: balance,
      items: '',
      expense: 0
    })
    return JSON.stringify(data)
  }

  componentDidMount() {
    /* fetch('/api/accounts')*/
    // if (this.state.clicked) {
    let getAccounts = this.handleBalance()
    this.setState({
      accounts: getAccounts,
    })
    // }

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
        <div className="container">
          <label htmlFor="inputAddress" className="form-label">Total Budget</label>
          <div className="input-group mb-3">
            <span className="input-group-text">&#8377;</span>
            <input type="text" className="form-control" aria-label="Amount (to the nearest rupee)" onClick={() => { this.setState({ income: "" }) }} onChange={this.handleChange} value={this.state.income} />
            <span className="input-group-text">.00</span>
          </div>
          <br />
          <label htmlFor="inputAddress" className="form-label">Expenditure</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder='Enter the item' onChange={(e) => { this.setState({ items: e.target.value }) }} value={this.state.items} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">&#8377;</span>
            <input type="text" className="form-control" placeholder="Amount (to the nearest rupee)" aria-describedby="button-addon2" onClick={() => { this.setState({ expense: "" }) }} onChange={this.handleExpenses} value={this.state.expense} />
            <span className="input-group-text">.00</span>
            <button className="btn btn-outline-secondary" disabled={this.state.items.length !== 0 ? false : true} type="button" id="button-addon2" onClick={this.handleBalance}>Submit</button>
          </div>
        </div>
        <div className="container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Total Budget</th>
                <th scope="col">Amount Spent &#8377;<sup>(in Rupees)</sup></th>
                <th scope="col">Balance Left</th>
              </tr>
            </thead>
            <tbody id="expensesTableBody">
              <tr>
                {/* <td colSpan={4}>No expenses added yet.</td> */}
                <td>{this.state.income}</td>
                <td>{this.state.expense}</td>
                <td>{this.state.balance}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <h5>Expense List:</h5><br />
          <table>
            <tbody className="row my-5">
              {this.state.accounts.forEach(() => {
                return <tr className="row-md-4" key={id}>
                  <AccountRow item={itemSpentOn} spent={amountSpent} left={leftBalance} />
                </tr>
              })}


              {/* {this.state.accounts.map((element) => {
              return <tr className="row-md-4" key={element.id}>
                <AccountRow item={element.itemSpentOn} spent={element.amountSpent} left={element.leftBalance}/>
              </tr>
            })} */}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
