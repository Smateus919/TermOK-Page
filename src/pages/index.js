let slider = document.querySelector('.slider-container')
let sliderIndividual = document.querySelectorAll('.slider-items')
let contador = 1
let width = sliderIndividual[0].clientWidth
console.log('Holaaaaaaaaaaa')
window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth
})
// setInterval(Slider, 3000)
function Slider(){
    slider.style.transform = "translate("+(-width*contador)+"px)"
    slider.style.transition = "transform .8s"
    contador++
    if(contador==sliderIndividual.length+1){
        slider.style.transform = "translate(0px)"
        slider.style.transition = "transform .3s"
        contador=1
    }
}