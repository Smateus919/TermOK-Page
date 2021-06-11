import Header from '../template/Header'
import Home from '../pages/Home'
import Footer from '../template/Footer'
import nextSlider from '../utils/nextSlider'
import prevSlider from '../utils/prevSlider'

const routes = {
    '/': Home,
    '/Producto': 'Producto'
}

const router = () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')

    header.innerHTML = Header()
    content.innerHTML = Home()
    footer.innerHTML = Footer()

    let btnNextSlider = document.getElementById('right-arrow')
    btnNextSlider.addEventListener('click', nextSlider) 
    let btnPrevSlider = document.getElementById('left-arrow')
    btnPrevSlider.addEventListener('click', prevSlider)
}
export default router