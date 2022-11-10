//// PRODUCT DATA

async function getProductData() {
  try {
    let cardContainer = document.querySelector(".card-container")
    let link = `https://dummyjson.com/products`;
    let prodData = await fetch(link).then((res) => res.json());

    prodData.products.forEach((element) => {
     cardContainer.innerHTML += `
          <div class="card" data-id="card${element.id}" data-filter="${element.category}">
               <div class="card-image">
               <img src="${element.images[0]}" alt="">
             </div>
               <div class="card-desc">
                 <h6 class="brand">${element.brand}</h6>
                 <h4 class="title">${element.title}</h4>
               </div>
               <div class="card-footer">
                 <h4 class="cost">${element.price} $</h4>

                <i class='bx bx-cart card-cart' ></i>

               </div>
          </div>
         `;
    })



    let cardCartBtn = document.querySelectorAll(".card .card-footer .card-cart")
    for (let index = 0; index < cardCartBtn.length; index++) {
      cardCartBtn[index].addEventListener('click',addToCart)
    }

    function addToCart(event) {
      let btn = event.target

      let btnParent = btn.parentElement
      let btnGrandParent = btnParent.parentElement
      let itemName = btnGrandParent.children[1].children[1].innerText
      let itemPrice = btnParent.children[0].innerText
      let itemImg = btnGrandParent.children[0].children[0].src
      
      let cartContent = document.querySelector('.cart-content')

      cartContent.innerHTML += 
      `
        <div class="cart-item">
          <img src="${itemImg}" alt="">
          <div class="cart-item-desc">
            <h5 class="cart-item-title">${itemName}</h5>
            <h3 class="cart-item-price">${itemPrice}</h3>
            <button class="cart-item-remove" type="button">remove</button>
          </div>
        </div>
      `

      let cartItemRemove = document.querySelectorAll('.cart-item-remove')
      for (let index = 0; index < cartItemRemove.length; index++) {
        cartItemRemove[index].addEventListener('click',removeItem)
        
      }

      updateTotalPrice()
      // saveToLocal()
    }

    function removeItem(event) {
      event.target.parentElement.parentElement.remove()
      updateTotalPrice()
    }

    // function saveToLocal () {
    //   let cartItem = document.querySelectorAll('.cart-item')
    //   let arr = []
    //   cartItem.forEach(item => {
    //     let obj = {
    //       img:item.children[0].src,
    //       title:item.children[1].children[0].innerText,
    //       price:item.children[1].children[1].innerHTML,
    //     }
    //     localStorage.setItem('cart',JSON.stringify(arr))
    //     if(localStorage.getItem('cart') === null) {
    //       arr = []
    //     } else {
    //       arr = JSON.parse(localStorage.getItem('cart'))
    //     }
    //     arr.push(obj)
    //     localStorage.setItem('cart',JSON.stringify(arr))
    //   })
    // }


    function updateTotalPrice() {
      let prices = document.querySelectorAll('.cart-item-price')
      let total = 0
      prices.forEach(item => {
        total += parseFloat(item.innerHTML)
      })
      
      let totalAmount = document.querySelector('.totalPrice')
      totalAmount.innerHTML = total + '$'

      let cartItem = document.querySelectorAll('.cart-item')
      for (let index = 0; index < cartItem.length; index++) {
        let count = document.querySelectorAll('.shopping-bag-count')
        for (let index = 0; index < count.length; index++) {
          // if(cartItem === undefined){
          //   count[index].innerText = ''
          //   count[index].classList.remove('active')
          // } else {
          //   count[index].innerText = cartItem.length
          //   count[index].classList.add('active')
          // }

          if(cartItem != null || cartItem != undefined){ 
            count[index].innerText = cartItem.length
            count[index].classList.add('active')
          } else {
            count[index].innerText = ''
            count[index].classList.remove('active')
          }
          // console.log(cartItem.length)
        }
      }
    }


  } catch (error) {
    console.log(error)
  }
}

getProductData()


const searchInput = document.getElementById('search')
const searchBtn = document.querySelector('.search-button')

searchBtn.addEventListener('click',filterCards)
searchInput.addEventListener('keydown', (e) => {
  // filterCards()
  if( e.keyCode === 13 ){
    filterCards()
  }
})

searchInput.addEventListener('keydown', () => {
  if(searchInput.value === '' || searchInput.value === undefined) {
    getProductData()
  }
})


function filterCards() {
  let searchInputVal = searchInput.value
  let productTitle = document.querySelectorAll('.title')
  let cards = document.querySelectorAll('.card')
  let notAvailable = document.querySelector('.notavailable')

  productTitle.forEach(( item , index ) => {
    if(item.textContent.toLowerCase().includes(searchInputVal.toLowerCase())){
      cards[index].style.display = ''
      notAvailable.textContent = ''
      notAvailable.style.display = 'none'
    } else {
      cards[index].style.display = 'none'
      notAvailable.textContent = 'no such product was found'
      notAvailable.style.display = 'block'
    }
  })
}


let cartIcon = document.querySelectorAll('.cart')
let cartContainer = document.querySelector('.cart-container')
cartIcon.forEach(item => {
  item.addEventListener('click', ()=> {
    cartContainer.classList.toggle('active')
  })
})

let continueShoppingBtn = document.querySelector('.continue-shopping').onclick = () => {
  cartContainer.classList.remove('active')
}



