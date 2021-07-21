const Header = () => {
    const view = `
        <nav>
            <div class="logo-principal"><a href="/"></a></div>
            <span id="burgerMenu-open-icon"></span>
            <ul class="mainMenu" id="mainMenu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#/productos">Comprar</a></li>
                <li><a href="#">Articulos</a></li>
                <li><a href="#">Sobre nosotros</a></li>
            </ul>
            <div class="closeMenu" id="closeMenu">
                <span class="burgerMenu-close-icon"></span>
            </div>
            <span class="icons">
                <i id="facebook-iconBurger"></i>
                <i id="instagram-iconBurger"></i>></i>
                <i id="facebook-iconBurger"></i>></i>
            </span>
        </nav>
    `
    return view
}

export default Header