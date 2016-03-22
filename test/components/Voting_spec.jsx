import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import Voting from '../../src/components/Voting'

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(<Voting pair={["Alien", "Predator"]} />)
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('Alien')
    expect(buttons[1].textContent).to.equal('Predator')
  })

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = (entry) => votedWith = entry

    const component = renderIntoDocument(
      <Voting pair={["Alien", "Predator"]}
        vote={vote}
      />
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])

    expect(votedWith).to.equal('Alien')
  })

})
