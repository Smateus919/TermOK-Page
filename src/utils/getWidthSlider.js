const getWidthSlider = ()=>{
    let sliderIndividual = document.querySelectorAll('.slider-items')
    let width = sliderIndividual[0].clientWidth
    return width
}
export default getWidthSlider