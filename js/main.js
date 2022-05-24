//ELEMENTS
const closePur = document.getElementById('close-purchase')
const purchaseOutput = document.getElementById('purchase')

const searchBtn = document.getElementById('search-btn')
const searchCheck = document.getElementById('search-check')
const searchInput = document.getElementById('searchForm')
const homeEl = document.getElementById('home')

const sidebarOpenBtn = document.getElementById('sidebar-open-btn')
const sidebarCloseBtn = document.getElementById('sidebar-close-btn')
const sidebarEl = document.getElementById('sidebar')

const enBtn = document.getElementById('en-btn')
const usdBtn = document.getElementById('usd-btn')

let oldPrice = document.querySelectorAll('.old-price')
let newPrice = document.querySelectorAll('.new-price')

//CLOSE PURCHASE
closePur.addEventListener('click', () => {
    purchaseOutput.style.display = "none";
})

//PRICES EN USD
const prices = [
  {
    enOldPrice: 60,
    enNewPrice: 56
  },

  { usdOldPrice: 74,
    usdNewPrice: 69
  }
]

function dollarPrice(){
  for(let i = 0; i < oldPrice.length; i++){
    oldPrice[i].textContent = "$" + prices[1].usdOldPrice + '.00';
    newPrice[i].textContent = "$" + prices[1].usdNewPrice + '.00';
  }
}
dollarPrice()

function poundPrice(){
  for(let i = 0; i < oldPrice.length; i++){
    oldPrice[i].textContent = "£" + prices[0].enOldPrice + '.00';
    newPrice[i].textContent = "£" + prices[0].enNewPrice + '.00';
  }
}

enBtn.addEventListener('click', () => {
  poundPrice()
})
usdBtn.addEventListener('click', () => {
  dollarPrice()
})

//SERACH INPUT
searchBtn.addEventListener('click', () => {
    if (searchCheck.checked == false){
        searchInput.style.display = "block";
        homeEl.style.marginBottom = '-174px'
        homeEl.style.top = '-174px'
    } else {
        searchInput.style.display = "none";
        homeEl.style.marginBottom = '-136px'
        homeEl.style.top = '-136px'
    }
})

//OPEN SIDEBAR
sidebarOpenBtn.addEventListener('click', () => {
    sidebarEl.style.right = "0%";
})
//CLOSE SIDEBAR
sidebarCloseBtn.addEventListener('click', () => {
    sidebarEl.style.right = "-100%";
})

//STICKY NAV
const el = document.querySelector(".navigation")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

//SLIDER
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 41,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },breakpoints: {
      1170: {
        slidesPerView: 4,
        spaceBetween: 41,
      },
      862: {
        slidesPerView: 3,
        spaceBetween: 41,
      },
      712: {
        slidesPerView: 2.5,
        spaceBetween: 41,
      },
      565: {
        slidesPerView: 2,
        spaceBetween: 41,
      },
      426: {
        slidesPerView: 1.6,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }
});
