const birthDay = (document.getElementById('birthdate').value = getCurrentDate())
const currentDate = (document.getElementById('currentdate').value =
  getCurrentDate())

function getCurrentDate() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  return `${month.toString().padStart(2, '0')}/${day
    .toString()
    .padStart(2, '0')}/${year}`
}

function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value)
  const currentdate = new Date(document.getElementById('currentdate').value)
  let age = currentdate.getFullYear() - birthdate.getFullYear()
  let months = currentdate.getMonth() - birthdate.getMonth()
  let days = currentdate.getDate() - birthdate.getDate()

  if (months < 0 || (months === 0 && days < 0)) {
    age--
    months += 12
    if (days < 0) {
      months--
      days += new Date(
        currentdate.getFullYear(),
        currentdate.getMonth(),
        0
      ).getDate()
    }
  }

  const totalMonths = age * 12 + months
  const totalDays = Math.floor(
    (currentdate - birthdate) / (1000 * 60 * 60 * 24)
  )
  const totalHours = Math.floor((currentdate - birthdate) / (1000 * 60 * 60))
  const totalMinutes = Math.floor((currentdate - birthdate) / (1000 * 60))
  const totalSeconds = Math.floor((currentdate - birthdate) / 1000)

  const result = document.getElementById('result')
  result.innerHTML = `<p> = ${age} years, ${months} months, and ${days} days </p>   <p> = ${totalMonths} months,  ${days} days</p>  <p> = ${totalDays} days</p>    <p> ≈ ${totalHours} hours</p>    <p> ≈ ${totalMinutes} minutes</p>   <p>≈ ${totalSeconds} seconds</p `
}
