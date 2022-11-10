// function getFaqData() {
//      let accordion = document.querySelector('.accordion')
//      fetch('../json/faq.json').then(res => res.json()).then(data => {
//           data.forEach(item => {
//                accordion.innerHTML += 
//                `
//                     <div class="accordion-item" id="faqid${item.id}">
//                          <div class="accordion-header">
//                               <h3>${item.title}</h3>
//                               <i class="fa-solid fa-plus"></i>
//                          </div>
//                          <div class="accordion-body">
//                               <p>${item.body}</p>
//                          </div>
//                     </div>
//                `
//           })
//      })
// }

// getFaqData()


let accordionHeader = document.querySelectorAll('.accordion-header')
let accordionBody = document.querySelectorAll('.accordion-body')

for (let i = 0; i < accordionHeader.length; i++) {
     accordionHeader[i].addEventListener('click', (e) => {
          for (let j = 0; j < accordionBody.length; j++) {
               accordionBody[i].classList.toggle('active')
          }
     })
}