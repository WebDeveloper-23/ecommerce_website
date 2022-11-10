const quoteInput = document.querySelector('.quote-input')
const quoteSearchBtn = document.querySelector('.quote-search-button')
const quotes = document.querySelector('.quotes')


function quotesData() {
     fetch('https://dummyjson.com/quotes').then(res => res.json()).then(data => {
          data.quotes.forEach(element => {
               quotes.innerHTML += 
               `
                    <div class="quote-card" id="id${element.id}"> 
                         <h4 class="quote-author">${element.author}</h4>
                         <div class="quote-card-body">
                              <p class="quote-text">${element.quote}</p>
                         </div>
                    </div>
               `
          })
     })                            
}

quotesData()



quoteSearchBtn.addEventListener('click', filterQuotes)

quoteInput.addEventListener('keydown', (e) => {
     if( e.keyCode === 13 ){
          filterQuotes()
     }

     if(quoteInput.value === '' || quoteInput.value === undefined || quoteInput.value === null) {
          filterQuotes()
     }
})

function filterQuotes() {
  let quoteInputVal = quoteInput.value
  let quoteAuthors = document.querySelectorAll('.quote-author')
  let quoteCards = document.querySelectorAll('.quote-card')
  
  quoteAuthors.forEach((item,index) => {
     if(item.textContent.toLowerCase().includes(quoteInputVal.toLowerCase())){
          quoteCards[index].style.display = 'block'
     } else {
          quoteCards[index].style.display = 'none'
     }
  })
}



