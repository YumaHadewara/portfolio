const settingImg = document.querySelector(".settingImg")
const settingFolder = document.querySelector(".setting-folder")
const menuBar = document.querySelector(".menu-bar")
const menuString = document.querySelector(".menu-string")
const menuStringOnMenu = document.querySelector(".menu-string-on-menu")
const coverWhenMenuOpen = document.querySelector(".cover-when-menu-open")

//click event
function toggleClickEvent(clickStf, elem, className){
    clickStf.addEventListener("click", () =>{
        elem.classList.toggle(className)
    })
}

toggleClickEvent(settingImg, settingFolder, "show");
toggleClickEvent(menuString, menuBar, "show-menu");
toggleClickEvent(menuString, menuString, "string-move");
toggleClickEvent(menuString, coverWhenMenuOpen, "cover-entire-page");

coverWhenMenuOpen.addEventListener("click", ()=>{
    coverWhenMenuOpen.classList.remove("cover-entire-page")
    menuBar.classList.remove("show-menu")
    menuString.classList.remove("string-move")
})
//



//images moving (first section)
const firstSecBackground = document.querySelector(".first-section")
const firstSecWords = document.querySelector(".first-section-h3")
const firstSecImgs = document.querySelector(".imgs-appear")
const firstSecImgs2 = document.querySelector(".imgs-appear2")

window.addEventListener("scroll", ()=>{
    if(window.scrollY + 100 > firstSecWords.offsetTop){
        firstSecBackground.classList.add("first-section-change")
        firstSecWords.classList.add("first-section-h3-change")
        firstSecImgs.classList.add("imgs-appear-show")
        firstSecImgs2.classList.add("imgs-appear-show")

    }else{
        firstSecBackground.classList.remove("first-section-change")
        firstSecWords.classList.remove("first-section-h3-change")
        firstSecImgs.classList.remove("imgs-appear-show")
        firstSecImgs2.classList.remove("imgs-appear-show")
    }
})

const SPEED = 0.0009

function get(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop))
}

function set(elem, prop, val){
    elem.style.setProperty(prop, val)
}

function increase(elem, prop, inc){
    set(elem, prop, get(elem, prop) + inc)
}

function movingElem(delta){
    increase(firstSecImgs, "--left", delta * SPEED * -1)
    increase(firstSecImgs, "--right", delta * SPEED * -1)
    increase(firstSecImgs, "--top", delta * SPEED * -1)
    increase(firstSecImgs, "--bottom", delta * SPEED * -1)
    if(get(firstSecImgs, "--left") <= -5){
        increase(firstSecImgs, "--left", 30)
    }
    if(get(firstSecImgs, "--right") <= -5){
        increase(firstSecImgs, "--right", 70)
    }
    if(get(firstSecImgs, "--top") <= 10){
        increase(firstSecImgs, "--top", 70)
    }
    if(get(firstSecImgs, "--bottom") <= -5){
        increase(firstSecImgs, "--bottom", 70)
    }
}

function movingElem2(delta){
    increase(firstSecImgs2, "--left", delta * SPEED * -1)
    increase(firstSecImgs2, "--top", delta * SPEED * -1)

    if(get(firstSecImgs2, "--left") <= 50){
        increase(firstSecImgs2, "--left", 20)
    }
    if(get(firstSecImgs2, "--top") <= 10){
        increase(firstSecImgs2, "--top", 70)
    }
}

let lastTime
function update(time){
    if(lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime
    movingElem(delta)
    movingElem2(delta)
    lastTime = time
window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)
//





//for second section
const secondSec = document.querySelector(".second-section")
const circle = document.querySelector(".second-sec-circle")
    window.addEventListener("scroll", ()=>{
        if(window.scrollY + 100 > secondSec.offsetTop){
            secondSec.classList.add("second-section-change");
            circle.classList.add("second-sec-circle-change")
        }else{
            secondSec.classList.remove("second-section-change")
            circle.classList.remove("second-sec-circle-change")
        }
    })




//third section see more
const forBeginnerDet = document.querySelector(".beginner-detail")
const forIntermediateDet = document.querySelector(".intermediate-detail")
const forAdvanceDet = document.querySelector(".advanced-detail")
const forBeginnerBtn = document.querySelector(".for-beginner")
const forIntermediateBtn = document.querySelector(".for-intermediate")
const forAdvancedBtn = document.querySelector(".for-advanced")
const movingBorder = document.querySelector(".moving-border")

toggleClickEvent(forBeginnerBtn, forBeginnerDet, "plan-detail-show");
toggleClickEvent(forIntermediateBtn, forIntermediateDet, "plan-detail-show");
toggleClickEvent(forAdvancedBtn, forAdvanceDet, "plan-detail-show");


const thirdSecH2 = document.querySelector(".third-sec-h2")
window.addEventListener("scroll", ()=>{
    if(window.scrollY + 500 > thirdSecH2.offsetTop){
        movingBorder.classList.add("moving-border-move")
    }else{
        movingBorder.classList.remove("moving-border-move")
    }
})
