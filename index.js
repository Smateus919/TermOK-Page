import router from './src/routes'
import nextSlider from './src/utils/nextSlider'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)

let contador = 1
window.addEventListener('load', setInterval(function(){
    nextSlider(contador)
}, 5000))
