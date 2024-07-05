const items = document.querySelectorAll('.item')
const infos = document.querySelectorAll('.info')

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    hideInfos()
    infos[index].classList.add('active')
    item.classList.add('active')
  })
})

function hideInfos() {
  infos.forEach((info) => {
    info.classList.remove('active')
  })
  items.forEach((item) => {
    item.classList.remove('active')
  })
}
