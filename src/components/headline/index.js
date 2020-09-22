import React, { Component } from "react"

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

export default Headline
