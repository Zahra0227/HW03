let change = document.querySelectorAll('.change');
for (let element of change) {
  element.addEventListener('click', () => {
    element.style.backgroundColor = 'red'
  })
}