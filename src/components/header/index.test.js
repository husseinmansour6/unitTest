import React from "react"
import { shallow } from "enzyme"
import Header from "./index"

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe("Header component", () => {
  let component
  beforeEach(() => {
    component = setup()
  })

  it("renders Header component with no errors", () => {
    expect(component.length).toBe(1)
  })

  it("renders the wrapper div", () => {
    const wrapper = component.find(".wrapper")
    expect(wrapper.length).toBe(1)
  })

  it("renders the logo div", () => {
    const logo = component.find(".logo")
    expect(logo.length).toBe(1)
  })
})
