const Products = ()=>{
    const view = `
        <section class="Products">
            <div class="Products-container">
                <h2>Faja termoreductora con gran grosor y costuras reforzadas</h2>
                <img src="../src/assets/images/viewProduct.png" alt="Faja termoreductora">
            </div>
            <div class="bar-rightProd">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum est ducimus pariatur inventore dolore ab impedit repudiandae molestias, autem dolorum maiores temporibus voluptas blanditiis enim id beatae necessitatibus aperiam voluptatem!</p>
                <div>
                    <h3>Valor: </h3><h4>$39,900</h4>
                </div>
                <form class="frmComprar" action="">
                    <label for="Talla">Talla</label>
                        <Select name="Talla">
                            <option value="S-M">S-M</option>
                            <option value="L-XL">L-XL</option>
                            <option value="2XL-3XL">2XL-3XL</option>
                        </Select>
                    <label for="Cantidad">Cantidad</label>
                        <select name="Cantidad" id="SelectCantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                </form>
                <a class="btnComprar" href="#">Comprar</a>               
            </div>
        </section>
    `
    return view
}
export default Products