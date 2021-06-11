import getWidthSlider from './getWidthSlider'
let contador = 1
const nextSlider = () =>{
    let slider = document.querySelector('.slider-container')
    let sliderIndividual = document.querySelectorAll('.slider-items')
    let width = getWidthSlider()
    slider.style.transform = "translate("+(-width*contador)+"px)"
    slider.style.transition = "transform .8s"
    contador++
    if(contador==sliderIndividual.length+1){
        slider.style.transform = "translate(0px)"
        slider.style.transition = "transform .3s"
        contador=1
    }    
    console.log(width)
}
export default nextSlider