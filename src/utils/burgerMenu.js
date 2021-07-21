const burgerMenu = () => {
    const mainMenu = document.getElementById('mainMenu')
    let openMenu = document.getElementById('burgerMenu-open-icon')
    openMenu.addEventListener('click', showMenu)
    let closeMenu = document.getElementById('closeMenu')
    closeMenu.addEventListener('click', closedMenu)
    const showMenu = () => {
        const mainMenu = document.getElementById('mainMenu')
        const closeMenu = document.getElementById('closeMenu')
        mainMenu.style.top = '0'
        mainMenu.style.display = 'flex'
        closeMenu.style.display = 'block'
    }
    const closedMenu = () => {
        mainMenu.style.top = '-100%'
    }
}
export default burgerMenu