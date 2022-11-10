///  BAR

const bar = document.getElementById('bar')
const close = document.querySelector('.close')
const navbar = document.querySelector('.navbar')
bar.addEventListener('click', () => {
  navbar.classList.add('active')
})
close.addEventListener('click', () => {
  navbar.classList.remove('active')
})


function scroll() {
  let scrollToTop = document.querySelector('.scrollToTop')
  window.addEventListener('scroll', ()=> {
    if(window.pageYOffset > 200) {
      scrollToTop.classList.add('active')
    } else {
      scrollToTop.classList.remove('active')
    }
  })

  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
}

scroll()

