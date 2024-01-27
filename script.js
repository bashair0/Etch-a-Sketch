/* get custom property color values */
const rootStyles = getComputedStyle(document.documentElement)
const colorPink = rootStyles.getPropertyValue('--clr-pink')
const colorWhite = rootStyles.getPropertyValue('--clr-white')

let color = colorWhite
let gridNumber = 16

document.addEventListener('DOMContentLoaded', () => {
  generateGrid()
})

const eraserBtn = document.querySelector('.eraser-btn')
eraserBtn.addEventListener('click', () => {
  color = 'white'
})

const colorBtn = document.querySelector('.color-btn')
colorBtn.addEventListener('click', () => {
  color = 'pink'
})

const rainbowBtn = document.querySelector('.rainbow-btn')
rainbowBtn.addEventListener('click', () => {
  color = 'random'
})

function generateGrid () {
  const gridContainer = document.querySelector('.grid-container')
  gridContainer.innerHTML = ''
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.classList.add('grid-item__border')
    gridItem.style.height = `calc(${100}%  / ${gridNumber})`
    gridItem.style.width = `calc(${100}%  / ${gridNumber})`
    gridContainer.appendChild(gridItem)

    gridItem.addEventListener('mouseover', colorDiv)

    const clearBtn = document.querySelector('.clear-btn')
    clearBtn.addEventListener('click', () => {
      gridItem.style.backgroundColor = colorWhite
    })

    const GridLinesBtn = document.querySelector('.lines-btn')
    GridLinesBtn.addEventListener('click', () => {
      gridItem.classList.toggle('grid-item__border')
    })
  }
}

function getRandomColor () {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

function colorDiv () {
  if (color === 'random') {
    this.style.backgroundColor = getRandomColor()
  } else if (color === 'white') {
    this.style.backgroundColor = colorWhite
  } else {
    this.style.backgroundColor = colorPink
  }
}

const changeBtn = document.querySelector('.change-btn')
changeBtn.addEventListener('click', () => {
  const gridNumberInput = document.querySelector('#gridNumber')
  newGridSize = parseInt(gridNumberInput.value)
  if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
    gridNumber = newGridSize
    generateGrid()
  } else {
    alert('Please enter a valid number between 1 and 100.')
  }
})
