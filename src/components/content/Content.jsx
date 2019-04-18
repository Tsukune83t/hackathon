import React, { Component } from 'react'
import Api from './components/content/Api';
import Condition from './condition_type/condition.jsx'

export default class Content extends Component {
  render() {
    return (
      <div>
        <Api />
        <Condition />
      </div>
    )
  }
}
