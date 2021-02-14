let slider = document.querySelector('.slider-container')
let sliderIndividual = document.querySelectorAll('.slider-items')
let contador = 1
let width = sliderIndividual[0].clientWidth
console.log('Holaaaaaaaaaaa')
window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth
})


function Slider(){
    slider.style.transform = "translate("+(-width*contador)+"px"
    contador++
}