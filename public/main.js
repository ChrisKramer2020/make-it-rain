// setting the frames per second
const FPS = 30

// The function adds a drop to the screen
const makeItRain = () => {
  // telling it to select the main tag
  const main = document.querySelector('main')
  // const drop will create an element in the figure tag
  const drop = document.createElement('figure')
  // telling the drop where top drop starting at 0px at the top.
  drop.style.left = Math.floor(Math.random() *
  document.body.clientWidth) + 'px'
  drop.style.top = '0px'
  //  append child creates the drop. im thinking in the main?
  main.appendChild(drop)
}
// The animate Function makes the drop actually move and animate
const animate = () => {
  // selecting the main function
  const main = document.querySelector('main')
  // let the drop of main.children start from the top and parse int
  // converts the first argument to a string and returns it as an integer
  for (let drop of main.children) {
    let top = parseInt(drop.style.top) + 2
    if (top >= document.body.clientHeight) {
      top = 0
    }
    // telling the drop where to drop
    drop.style.top = `${top}px`
  }
}
// main function is the first thing that gets loaded
const main = () =>
// query selecting a string called button in the document
  const button = document.querySelector('button')
  // adding an event listener to the button and waiting for a click
  // when a click happens make it rain
  button.addEventListener('click', makeItRain) => {
  })
  window.setInterval(animate, 1000 / FPS)
}
document.addEventListener('DOMContentLoaded', main)
