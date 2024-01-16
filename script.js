let gridNumber = 16
function generateGrid () {
  const gridContainer = document.querySelector('.grid-container')
  gridContainer.innerHTML = ''
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.classList.add('grid-item__border')
    gridItem.style.height = `calc(${100}%  / ${gridNumber})`
    gridItem.style.width = `calc(${100}%  / ${gridNumber})`

    gridItem.addEventListener('mouseover', () => {
      // Change background color on hover
      gridItem.style.backgroundColor = '#D47B91'
    })

    const eraserBtn = document.querySelector('.eraser-btn')
    eraserBtn.addEventListener('click', () => {
      gridItem.addEventListener('mouseover', function () {
        // Change background color on hover
        gridItem.style.backgroundColor = '#f0ebe5'
      })
    })

    const colorBtn = document.querySelector('.color-btn')
    colorBtn.addEventListener('click', () => {
      gridItem.addEventListener('mouseover', function () {
        // Change background color on hover
        gridItem.style.backgroundColor = '#D47B91'
      })
    })

    const GridLinesButton = document.querySelector('.lines-btn')
    GridLinesButton.addEventListener('click', () => {
      gridItem.classList.toggle('grid-item__border')
    })

    const rainbowBtn = document.querySelector('.rainbow-btn')
    rainbowBtn.addEventListener('click', () => {
      gridItem.addEventListener('mouseover', function () {
        // Change background color on hover
        gridItem.style.backgroundColor = getRandomColor()
      })
    })

    const clearBtn = document.querySelector('.clear-btn')
    clearBtn.addEventListener('click', () => {
      gridItem.style.backgroundColor = '#f0ebe5'
    })

    const shadingBtn = document.querySelector('.shading-btn')
    shadingBtn.addEventListener('click', () => {
      gridItem.addEventListener('mouseover', function () {})
    })

    gridContainer.appendChild(gridItem)
  }
}
generateGrid()

function getRandomColor () {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}
const changeBtn = document.querySelector('.change-btn')
changeBtn.addEventListener('click', () => {
  const gridNumberInput = document.querySelector('#gridNumber')
  newGridSize = parseInt(gridNumberInput.value)
  if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
    size = newGridSize
    generateGrid()
  } else {
    alert('Please enter a valid number between 1 and 100.')
  }
})
