import React, { Component } from 'react'

export default class AccountRow extends Component {
  render() {
    let { id, item, spent, left } = this.props
    return (
      <>

        <td>
          {id}
        </td>
        <td className='text-capitalize'>{item}</td>
        <td>
          {spent}
        </td>
        <td>
          {left}
        </td>
      </>
    )
  }
}
