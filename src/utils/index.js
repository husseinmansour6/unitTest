export const findByTestAtrr = (component, name) => {
  return component.find(`[data-test='${name}']`)
}
