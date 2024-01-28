import React, { Component } from 'react'

export default class AccountRow extends Component {
  render() {
    let { id, item, spent, left } = this.props
    return (
      <div>
        {/* <tr> */}
          {/* <th scope="row">{id}</th> */}
          <td>{item}</td>
          <td>{spent}</td>
          <td>{left}</td>
        {/* </tr> */}
      </div>
    )
  }
}
