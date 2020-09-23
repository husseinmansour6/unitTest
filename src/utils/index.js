import checPropTypes from "check-prop-types"

export const findByTestAtrr = (component, name) => {
  return component.find(`[data-test='${name}']`)
}

export const checkProps = (component, expectedProps) => {
  const propErr = checPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  )
  return propErr
}
