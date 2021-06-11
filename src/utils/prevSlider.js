import getWidthSlider from './getWidthSlider'
let contador = 1
const prevSlider = ()=>{
    let slider = document.querySelector('.slider-container')
    let sliderIndividual = document.querySelectorAll('.slider-items')
    let width = getWidthSlider()
    if(contador==1){
        slider.style.transform = "translate("+(-width*(sliderIndividual.length-1))+"px)"
        slider.style.transition = "transform .8s"
        contador=sliderIndividual.length  
    }else{
        contador=contador-2
        slider.style.transform = "translate("+(-width*contador)+"px)"
        slider.style.transition = "transform .8s"
        contador++
    }
}
export default prevSlider