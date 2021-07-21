import router from './src/routes'
import nextSlider from './src/utils/nextSlider'
import burgerMenu from './src/utils/burgerMenu'

window.addEventListener('load', router)
window.addEventListener('load', burgerMenu)
window.addEventListener('hashchange', router)
window.addEventListener('hashchange', burgerMenu)

let contador = 1
window.addEventListener('load', setInterval(function(){
    nextSlider(contador)
}, 5000))

