import React, { Component } from "react"
import Proptypes from "prop-types"

class Headline extends Component {
  render() {
    const { header, desc } = this.props

    if (!header) {
      return null
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header" className="header">
          {header}
        </h1>
        <p data-test="desc" className="desc">
          {desc}
        </p>
      </div>
    )
  }
}

Headline.protoTypes = {
  header: Proptypes.string,
  desc: Proptypes.string,
  tempArr: Proptypes.arrayOf(
    Proptypes.shape({
      fname: Proptypes.string,
      lname: Proptypes.string,
      email: Proptypes.string,
      age: Proptypes.number,
      onlineStatus: Proptypes.bool
    })
  )
}

export default Headline
