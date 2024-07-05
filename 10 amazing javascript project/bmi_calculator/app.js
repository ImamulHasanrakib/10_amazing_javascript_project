let height = document.getElementById('height')

document.querySelector('.form_1').addEventListener('submit', function (event) {
  event.preventDefault()
  var heightValue = parseFloat(document.getElementById('height').value)
  console.log(heightValue)
  var weightValue = parseFloat(document.getElementById('weight').value)
  var bmi = weightValue / ((heightValue / 100) * (heightValue / 100))
  var message = document.getElementById('message')

  if (isNaN(heightValue) || isNaN(weightValue)) {
    message.querySelector('p').textContent =
      'Please Enter a Valid Weight and Height'
  } else {
    if (bmi < 18.5) {
      message.style.display = 'block'
      message.style.backgroundColor = '#ffbe0b'
      message.style.color = '#fff'
      message.querySelector('p').textContent =
        'Your BMI is ' + bmi.toFixed(2) + ', which is underweight.'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message.style.display = 'block'
      message.style.backgroundColor = '#4f772d'
      message.style.color = '#fff'
      message.querySelector('p').textContent =
        'Your BMI is ' + bmi.toFixed(2) + ' ,which is normal weight.'
    } else if (bmi >= 25 && bmi <= 29.9) {
      message.style.display = 'block'
      message.style.backgroundColor = '#e76f51'
      message.style.color = '#fff'
      message.querySelector('p').textContent =
        'Your BMI is ' + bmi.toFixed(2) + ', which is overweight.'
    } else {
      message.style.display = 'block'
      message.style.backgroundColor = '#ef233c'
      message.style.color = '#fff'
      message.querySelector('p').textContent =
        'Your BMI is ' + bmi.toFixed(2) + ', which is obese.'
    }
  }
})

const form2 = document.querySelector('.form_2')
const message2 = document.getElementById('message2')

form2.addEventListener('submit', function (event) {
  event.preventDefault()
  let length = parseFloat(document.querySelector('#length').value)
  const from_unit = document.querySelector('#from_unit').value
  const to_unit = document.querySelector('#to_unit').value

  if (isNaN(length)) {
    message2.textContent = 'Please enter a valid number for the length.'
    message2.style.display = 'block'
    return
  }

  let result

  if (from_unit === 'feet' && to_unit === 'cm') {
    result = length * 30.48
    height.value = Number(result.toFixed(2))
  } else if (from_unit === 'cm' && to_unit === 'feet') {
    result = length / 30.48
  } else if (from_unit === 'cm' && to_unit === 'mm') {
    result = length * 10
  } else if (from_unit === 'mm' && to_unit === 'cm') {
    result = length / 10
  } else if (from_unit === 'm' && to_unit === 'cm') {
    result = length * 100
  } else if (from_unit === 'cm' && to_unit === 'm') {
    result = length / 100
  } else if (from_unit === 'm' && to_unit === 'mm') {
    result = length * 1000
  } else if (from_unit === 'mm' && to_unit === 'm') {
    result = length / 1000
  } else if (from_unit === 'feet' && to_unit === 'mm') {
    result = length * 304.8
  } else if (from_unit === 'mm' && to_unit === 'feet') {
    result = length / 304.8
  } else if (from_unit === 'm' && to_unit === 'feet') {
    result = length * 3.28084
  } else if (from_unit === 'feet' && to_unit === 'm') {
    result = length / 3.28084
  } else if (from_unit === to_unit) {
    result = length
  }
  message2.style.display = 'block'
  message2.textContent = `${length} ${from_unit} = ${result.toFixed(
    2
  )} ${to_unit}`
})
