const accordionItems = document.querySelectorAll('.accordion-item')

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded')

  for (i = 0; i < accordionItems.length; i++) {
    accordionItems[i].setAttribute('aria-expanded', 'false')
    accordionItems[i].querySelector('.accordion-content').style.height = 0
    accordionItems[i].classList.remove('active')
  }

  if (itemToggle == 'false' || itemToggle == null) {
    this.setAttribute('aria-expanded', 'true')
    this.querySelector('.accordion-content').style.height =
      this.querySelector('.accordion-content > * ').offsetHeight + 'px'
    this.classList.add('active')
  }
}

accordionItems.forEach((item) => {
  item.addEventListener('click', toggleAccordion)
})
