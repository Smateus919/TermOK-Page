const Products = ()=>{
    const view = `
        <section class="Products">
            <div class="Products-container">
                <div class="Product-optionBuy">
                    <div class="Carrusel-Image">
                        <img id="ImgLargeProduct"src="../src/assets/images/viewProduct.png" alt="Faja termoreductora">
                    </div>                    
                    <div class="bar-rightProd">
                        <div class="bar-rightProd__buy">
                            <h2>Faja termoreductora para quemar calorias</h2>
                            <p>*Envio gratis a nivel nacional</p>
                            <div class="bar-rightProd__valores">
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
                    </div>
                </div>
                <div class="infoProduct">
                    <div class="infoProduct-Description">
                        <h3>Faja termoreductora</h3>
                        <ul>
                            <li><b>Material:</b> Neopreno</li>
                            <li><b>Grosor:</b> 3mm</li>
                            <li><b>Tallas:</b> S-M / L-XL / 2XL-3XL</li>
                            <li><b>Color:</b> Negro-Rosa / Negro-Amarillo</li>
                        </ul>
                        <p>
                            <b>Descripcion:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero impedit consequuntur quisquam ducimus incidunt quos tempora, corrupti ad ipsum laboriosam officiis provident asperiores quasi quis nobis, molestias possimus adipisci.
                            Nobis culpa corrupti, recusandae ducimus odit tempora laborum maiores provident fuga consequatur eius. Suscipit, laboriosam dolorem recusandae nostrum at excepturi deserunt veniam sint ipsum inventore nisi harum molestiae vero neque!
                            Eligendi enim, quam facilis eveniet iure eos error vero neque impedit quis, molestiae cupiditate unde exercitationem atque sunt obcaecati nobis distinctio natus optio. Voluptatem velit ut qui. Vel, doloremque voluptatum?
                            Amet sit magnam minima natus distinctio? Commodi blanditiis sit illum ratione ullam ut, repudiandae magni eligendi voluptatibus fugiat repellat deleniti enim temporibus explicabo nemo amet hic. Ab beatae consequuntur consequatur!
                            Laborum earum, similique quidem quod suscipit eligendi eius beatae? Dignissimos, beatae doloribus? Ad quas eum sapiente omnis animi cumque, veritatis consectetur nisi atque, voluptatum, maiores vitae modi assumenda! Eius, saepe.
                            Deserunt molestiae, suscipit quas recusandae provident modi explicabo, numquam nesciunt qui non ea nam delectus aperiam exercitationem laborum iste dolor hic soluta tempora consequuntur corporis, placeat voluptatem eos maiores! Enim!
                            Quaerat blanditiis magni nemo sequi corporis! Fugiat vel a enim officia exercitationem aperiam, nesciunt iste nobis consequatur omnis laudantium, dolore corrupti repellat sequi facere dolorum, voluptatum odit nisi aliquid rerum!
                        </p>
                    </div>
                    </div>
                 </div>
                <div class="infoProduct-videoPromo">
                                
                </div>
        </section>
            `
    return view
}
export default Products