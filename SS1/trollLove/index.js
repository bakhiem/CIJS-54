const noButton = document.querySelector('#no')
let isHaveClass = false
noButton.addEventListener('mouseover', (event) => {
  const answer = document.querySelector('.answer')
  // if(isHaveClass) {
  //   answer.classList.remove('row-reverse')
  //   isHaveClass = false
  // } else {
  //   answer.classList.add('row-reverse')
  //   isHaveClass = true
  // }
  answer.classList.toggle('row-reverse')
})