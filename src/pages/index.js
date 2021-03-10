let slider = document.querySelector('.slider-container')
let sliderIndividual = document.querySelectorAll('.slider-items')
let contador = 1
let width = sliderIndividual[0].clientWidth
window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth
})

let btnNextSlider = document.querySelector('.right-arrow')
btnNextSlider.addEventListener('click', nextSlider) 
let btnPrevSlider = document.querySelector('.left-arrow')
btnPrevSlider.addEventListener('click', prevSlider)

// setInterval(nextSlider, 3000)
console.log(contador)

function nextSlider(){
    console.log(contador)
    slider.style.transform = "translate("+(-width*contador)+"px)"
    slider.style.transition = "transform .8s"
    contador++
    if(contador==sliderIndividual.length+1){
        slider.style.transform = "translate(0px)"
        slider.style.transition = "transform .3s"
        contador=1
    }    
    console.log(contador)
}

function prevSlider(){
    console.log(contador)
    if(contador==1){
        slider.style.transform = "translate("+(-width*(sliderIndividual.length-1))+"px)"
        slider.style.transition = "transform .8s"
        contador=sliderIndividual.length  
        console.log(contador)
    }else{
        contador=contador-2
        slider.style.transform = "translate("+(-width*contador)+"px)"
        slider.style.transition = "transform .8s"
        contador++
    }    
}