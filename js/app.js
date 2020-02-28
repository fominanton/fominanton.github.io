document.addEventListener("DOMContentLoaded", load)

function load() {
    let price_nav = document.querySelectorAll(".price-nav-item")
    price_nav.forEach(function (item) {
        item.addEventListener("mouseover", ()=>{
            /*
            if(document.querySelector(".price-nav-item .anim.play")){
                return false
            } */
            if( !item.querySelector(".anim").classList.contains("play")) {

           
                item.querySelector(".anim").classList.add("play")
                setTimeout(() => {
                    item.querySelector(".anim").classList.remove("play") 
                }, 2400);
            }
            
        
        })
        item.onclick = function () {
            let category = item.getAttribute("data-nav-price")
            document.querySelector(".price-nav-item.active").classList.remove("active")
            item.classList.add("active")
            document.querySelector(".price-section .price-list-table.active").classList.remove("active")
            document.querySelector(`.price-section .price-list-table[data-price-list='${category}']`).classList.add("active")
            document.querySelector(`.price-section .price-list-table[data-price-list='${category}']`).parentNode.parentNode.querySelector("h3").innerHTML = category
    

            
         


        }
    })
   



    preload()

    function preload() {
        let pictute = []
        for (let i = 9; i <= 48; i++) {
            pictute[i] = new Image()
            pictute[i].src = `https://${window.location.host}/img/price-nav-anim/i0_00000000${i}.png`

        }
    }



    let slider_nav = document.querySelectorAll('.slider-nav')

    slider_nav.forEach((item)=>{
        let slider = item.parentNode.querySelector(".slider-card")
        console.l
        let next = item.querySelector(".next")
        let pre = item.querySelector(".pre")

        next.onclick = function () {
            slider.style.right = "1170px"
            next.classList.remove("active")
            pre.classList.add("active")
        }

        pre.onclick = function () {
            slider.style.right = "0px"
            next.classList.add("active")
            pre.classList.remove("active")
        }
    })







}