const colorPlateContainer = document.querySelector('.color_plate_container')
const message = document.querySelector('.message')

for (let i = 0; i < 100; i++) {
  colorPlateContainer.innerHTML += `
      <div class="color_plate" id="color_plate_${i}"></div>
    `
}

// This code creates and appends 6 boxes to each color plate, with a random background color
const colorPlates = document.querySelectorAll('.color_plate')

colorPlates.forEach((colorPlate) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  const paddedColor = randomColor.padStart(6, '0')
  for (let i = 0; i < 5; i++) {
    const opacity = (i + 1) / 5

    const color = `rgba(${parseInt(paddedColor.slice(0, 2), 16)}, ${parseInt(
      paddedColor.slice(2, 4),
      16
    )}, ${parseInt(paddedColor.slice(4, 6), 16)}, ${opacity})`

    const box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundColor = color

    box.addEventListener('click', (e) => {
      function rgbaToHex() {
        // Parse the red, green, blue, and alpha components from the rgba string
        const match = color.match(
          /^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d?\.?\d+)\)$/
        )
        const red = parseInt(match[1])
        const green = parseInt(match[2])
        const blue = parseInt(match[3])
        const alpha = parseFloat(match[4])

        console.log(red, green, blue, alpha)

        // Convert the red, green, and blue components to a hex color string
        const hex = ((1 << 24) + (red << 16) + (green << 8) + blue)
          .toString(16)
          .slice(1)

        // If the alpha component is not 1.0, add the alpha component to the hex color string
        if (alpha !== 1) {
          const alphaHex = Math.round(alpha * 255).toString(16)
          return `#${hex}${alphaHex}`
        } else {
          return `#${hex}`
        }
      }

      const hexColor = rgbaToHex()
      message.innerText = hexColor
      copyToClipboard(hexColor)
      message.classList.add('show')

      setTimeout(() => {
        message.classList.remove('show')
      }, 3000)
    })

    colorPlate.appendChild(box)
  }
})

// This function copies a string to the clipboard
function copyToClipboard(text) {
  const tempInput = document.createElement('input')
  tempInput.value = text
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  document.body.removeChild(tempInput)
}
