import Header from '../template/Header'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import Products from '../pages/Product'
import Error404 from '../pages/Error404'
import Footer from '../template/Footer'
import nextSlider from '../utils/nextSlider'
import prevSlider from '../utils/prevSlider'
import getHash from '../utils/getHash'
import showMenu from '../utils/showMenu'
import closedMenu from '../utils/closedMenu'

const routes = {
    '/': Home,
    '/productos': Products,
    '/articulos': Articles
}

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')

    header.innerHTML = await Header()
    let hash = getHash()
    let route = hash === '/' ? hash : `/${hash}`;
    console.log(route)
    let render = routes[route] ? routes[route] :Error404
    content.innerHTML= await render()
    footer.innerHTML = await Footer()

    // SLIDER
    let btnNextSlider = document.getElementById('right-arrow')
    btnNextSlider.addEventListener('click', nextSlider) 
    let btnPrevSlider = document.getElementById('left-arrow')
    btnPrevSlider.addEventListener('click', prevSlider)

    // BURGERMENU
    let openMenu = document.getElementById('burgerMenu-open-icon')
    openMenu.addEventListener('click', showMenu)
    let closeMenu = document.getElementById('closeMenu')
    closeMenu.addEventListener('click', closedMenu)
}
export default router