import Header from '../template/Header'
import Home from '../pages/Home'
import Footer from '../template/Footer'

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
}
export default router