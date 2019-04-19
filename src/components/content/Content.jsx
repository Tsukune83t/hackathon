import React, { Component } from 'react'
import Api from './Api';
import Condition from './condition_type/condition.jsx'

export default class Content extends Component {
  render() {
    return (
      <div>
        <Condition />
      </div>
    )
  }
}
