import React from "react"
import { shallow } from "enzyme"
import Headline from "./index"
import { checkProps } from "../../utils"

import { findByTestAtrr } from "../../utils"

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}

describe("Headline component", () => {
  describe("checking propTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "test header",
        desc: "test desc",
        tempArr: [
          {
            fname: "foo",
            lname: "bar",
            email: "foo@bar.com",
            age: 21,
            onlineStatus: true
          }
        ]
      }

      const propErr = checkProps(Headline, expectedProps)
      expect(propErr).toBeUndefined()
    })
  })

  describe("have props", () => {
    let wrapper
    beforeEach(() => {
      const props = {
        header: "header",
        desc: "description"
      }
      wrapper = setup(props)
    })

    it("renders headline component without errors", () => {
      const HeadlineComponent = findByTestAtrr(wrapper, "HeadlineComponent")
      expect(HeadlineComponent.length).toBe(1)
    })
    it("should render header", () => {
      const headerTage = findByTestAtrr(wrapper, "header")
      expect(headerTage.length).toBe(1)
    })
    it("should render desc ", () => {
      const headerTage = findByTestAtrr(wrapper, "desc")
      expect(headerTage.length).toBe(1)
    })
  })

  describe("have no props", () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup()
    })
    it("should not render", () => {
      const HeadlineComponent = findByTestAtrr(wrapper, "HeadlineComponent")
      expect(HeadlineComponent.length).toBe(0)
    })
  })
})
