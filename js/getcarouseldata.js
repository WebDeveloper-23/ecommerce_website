
const imagesArr = [
  {
    imgUrl:"https://www.dhl.com/content/dam/dhl/global/delivered/images/smart-grid-press-1375x504/delivered-blog-free-shipping-fact-or-fiction-1.jpg",
    text:"free shipping",
    title:""
  },
  
  {
    imgUrl:"https://static.vecteezy.com/system/resources/previews/004/601/942/non_2x/big-sale-concept-for-mobile-online-shopping-with-various-goods-product-shop-for-template-or-banner-design-poster-free-vector.jpg",
    text:"up to 70% off",
    title:"save more coupons & up to 70% off!!"
  },

  {
    imgUrl:"https://img2.goodfon.com/wallpaper/nbig/0/8c/parfume-versace-bright-crystal-brend-parfium-flakon-aromat.jpg",
    text:"up to 20% off fragrances",
    title:"save more coupons & up to 20% off!!"
  },

  {
    imgUrl:"https://scentgrail.com/wp-content/uploads/2020/11/Dior-Fahrenheit-bottle-and-box-1024x691.jpg",
    text:"DIOR Fahrenheit - 10%",
    title:"only - 110$"
  },
]

const swiperWrapper = document.querySelector('.swiper-wrapper')

function getSwiper() {
  imagesArr.forEach(item => {
    swiperWrapper.innerHTML +=
    `
      <div class="swiper-slide">
        <img src="${item.imgUrl}" alt="">
        <div class="content">
          <h1>${item.text}</h1>
          <h3>${item.title}</h3>
        </div>
      </div>
    `
  })
}
getSwiper()
 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})