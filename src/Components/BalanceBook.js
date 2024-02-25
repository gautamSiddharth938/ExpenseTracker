import React, { Component } from 'react'

export default class BalanceBook extends Component {
    
  render() {
    return (
      <>
      <table className="table table-striped table-hover border border-primary  list rounded text-white  " >
            <thead className='text-center'>
              <tr >
                <th scope="col">Total Budget</th>
                <th scope="col">Amount Spent &#8377;<sup>(in Rupees)</sup></th>
                <th scope="col">Balance Left</th>
              </tr>
            </thead>
            <tbody className="table-group-divider fw-medium fst-italic" id="expensesTableBody">
              <tr>
                {/* <td colSpan={4}>No expenses added yet.</td> */}
                <td>{this.props.income}</td>
                <td>{this.props.expense}</td>
                <td>{this.props.balance}</td>
              </tr>
            </tbody>
          </table>
      </>
    )
  }
}
