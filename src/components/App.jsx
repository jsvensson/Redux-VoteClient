import React from 'react'
import {List, Map} from 'immutable'

const pair = List.of('Alien', 'Batman')
const tally = Map({'Alien': 8, 'Batman': 5})

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair})
  }
})
