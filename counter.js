export function setupCounter(element,type) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${type?'+':''}${counter}`
  }
  element.addEventListener('click', () => type? setCounter(counter + 1):setCounter(counter-1))
  setCounter(0)
}
