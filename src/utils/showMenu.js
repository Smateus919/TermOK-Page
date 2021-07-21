
const showMenu = () => {
    const mainMenu = document.getElementById('mainMenu')
    const closeMenu = document.getElementById('closeMenu')
    mainMenu.style.top = '0'
    mainMenu.style.display = 'flex'
    closeMenu.style.display = 'block'
}
export default showMenu