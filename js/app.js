document.addEventListener("DOMContentLoaded", load)

function load() {
    let price_nav = document.querySelectorAll(".price-nav-item")
    price_nav.forEach(function (item) {
        item.addEventListener("mouseover", () => {
            /*
            if(document.querySelector(".price-nav-item .anim.play")){
                return false
            } */
            if (!item.querySelector(".anim").classList.contains("play")) {


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
            document.querySelector(`.price-section .price-list-table[data-price-list='${category}']`).scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
        }
    })

/*
    let portfolio_slider_item = document.querySelectorAll(".slider.portfolio .slider-card .slider-item")
    let slider_count = 8
    for (let i = 0; i < slider_count; i++) {
        portfolio_slider_item[i].classList.add("show")
        if (portfolio_slider_item[i].classList.contains("big")) {
            slider_count--
        }
    }
    document.querySelector(".slider.portfolio").setAttribute("data-last-item", slider_count);
    document.querySelector(".slider.portfolio").setAttribute("data-first-item", 0);
    document.querySelector(".slider.portfolio").setAttribute("data-slide", 1);
    document.querySelector(".slider.portfolio").setAttribute("data-count", 7);

*/
   


    document.querySelector("header .more").addEventListener("click" , function(){
        document.querySelector(`main`).scrollIntoView({  inline: "center", behavior: "smooth" });
    })
    let slider_nav = document.querySelectorAll('.slider-nav')
    /*
    slider_nav.forEach((item) => {
        let slider = item.parentNode
        let next = item.querySelector(".next")
        let pre = item.querySelector(".pre")
        let count = slider.getAttribute("data-count")

        next.onclick = function () {
            let slide = slider.getAttribute("data-slide")
            let first_item = slider.getAttribute("data-first-item")
            let last_item = slider.getAttribute("data-last-item")
            
        

            let slider_items = slider.querySelectorAll(".slider-item")
            show = 0
            if (last_item < slider_items.length) {
                console.log(`${last_item} - ${slider_items.length}`)
                for (let i = 0; i < slider_items.length; i++) {

                    if (i < last_item) {
                        slider_items[i].classList.remove("show")
                    }
                    if (i >= last_item && show <= count) {
                        
                        slider_items[i].classList.add("show")
                        show++
                        if (slider_items[i].classList.contains("big")) {
                            count--
                        }
                        if (i + 1 == slider_items.length) {
                            next.classList.remove("active")
                            next.setAttribute("disabled", "")
                        }

                    }

                }
            }
            document.querySelector(".slider.portfolio").setAttribute("data-last-item", (+last_item + +count));
            document.querySelector(".slider.portfolio").setAttribute("data-first-item", ++last_item);
            document.querySelector(".slider.portfolio").setAttribute("data-slide", ++slide);

        }

        pre.onclick = function () {
            let slider_items = slider.querySelectorAll(".slider-item")
            show = 0

        }
    })
*/
    
        slider_nav.forEach((item) => {
            let slider = item.parentNode.querySelector(".slider-card")
            console.l
            let next = item.querySelector(".next")
            let pre = item.querySelector(".pre")
    
            next.onclick = function () {
                let width = slider.clientWidth
                slider.style.right = `${width}px`
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
preload()

function preload() {
    let pictute = []
    for (let i = 9; i <= 48; i++) {
        pictute[i] = new Image()
        pictute[i].src = `https://${window.location.host}/http-praktikciti.ru/img/price-nav-anim/i0_00000000${i}.png`

    }
}