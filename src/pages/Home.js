const Home = () => {
    const view = `
        <section class="main-container">
        <section class="slider-container">
            <!-- Slider #1 -->
            <section class="slider-items">
                <div class="info-slider">
                    <img id="imgFajaPrincipal" src="../src/assets/images/faja-caracteristicas.png" alt="">
                    <div class="info-slider__text">
                        <h2>Compra tu faja termoredutora por un precio especial</h2>
                        <p>Llevala por solo $39,900 + envio GRATIS</p>
                        <a class="btnConocermas" href="#/productos">Conoce más</a>
                    </div>
                </div>
                <img src="" alt="">
            </section> 
            <!-- Slider #2 -->
            <section class="slider-items">
                <div class="info-slider">
                    <img id="imgPaySlider" src="../src/assets/icons/pago-movil.png" alt="">
                    <div class="info-slider__text">
                        <h2>Compra de forma segura y con cualquier medio de pago</h2>
                        <p>Haz tu pago contraentrega o con tu tarjeta crédito, débito, pse, daviplata o puntos baloto, efecty y muchos mas</p>
                        <img src="../src/assets/images/PayOptions.PNG" alt="Opciones de pago">
                    </div>
                </div>
            </section> 
            <!-- Slider #3 -->
            <section class="slider-items">
                <div class="info-slider">
                    <img id="fajaComponents" src="../src/assets/images/characteristicsFaja.png" alt="Caracteristicas principales de la faja">
                    <div class="info-slider__text">
                        <h2>Nuestras fajas</h2>
                        <p>Nos esforzamos por hacer nuestro mejor trabajo, por eso te garantizamos estos detalles y características</p>
                    </div>
                </div>
            </section>
            <!-- Slider #4 --> 
            <section class="slider-items">
                <div class="info-slider">
                    <img src="../src/assets/images/redes-en-dispositivos.png" alt="imagen de celular y tablet mostrando las pagina de inicio de las redes sociales de termOK">
                    <div class="info-slider__text">
                        <h2>Siguenos en nuestras redes sociales</h2>
                        <div class="info-slider__redes-sociales">
                            <a href="https://www.fb.com/TermOk-302000443805723"><img id="logo-redes" src="../src/assets/icons/f_logo_RGB-Blue_58.png" alt="link a facebook de termok"></a>
                            <a href="https://www.instagram.com/termokcol/"><img id="logo-redes" src="../src/assets/icons/Instagram_Glyph_Gradient_RGB.png" alt="link a instagram de termok"></a>
                            <a href="#"><img id="logo-redes" src="../src/assets/icons/WhatsApp_Logo_1.png" alt="link a whatsapp de termok"></a>
                        </div>
                    </div>
                </div>
                <img src="" alt="">
            </section>              
        </section>
        <img class="right-arrow" id="right-arrow" src="../src/assets/icons/flecha-derecha2.png" alt=""> 
        <img class="left-arrow" id="left-arrow" src="../src/assets/icons/flecha-izquierda2.png" alt="">                         
    </section>  
    <script type="text/javascript" src="../src/utils/slider.js"></script>
    <section class="articles">
        <h2>Conoce cómo perder peso con la siguiente información: </h2>
        <section class="articles-items">                
            <article>
                <picture>
                    <source media="(min-width: 770px)" srcset="../src/assets/images/ficha1-laptop.png">
                        <source media="(min-width: 430px)" srcset="../src/assets/images/ficha1-tablet.png">
                            <img src="../src/assets/images/ficha1.png" alt=""> 
                </picture>
                <div class="articles-info">
                    <h3>Batidos para bajar de peso</h3>
                    <p>Las investigaciones sugieren que la manera más segura de perder peso y no volver a aumentarlo es siguiendo una dieta saludable con menos calorías de...</p>
                    <a class="verMas" href="#/articulos">ver más</a>
                </div>
            </article>
            <article>
                <picture>
                    <source media="(min-width: 770px)" srcset="../src/assets/images/ficha2-laptop.png">
                        <source media="(min-width: 430px)" srcset="../src/assets/images/ficha2-tablet.png">
                            <img src="../src/assets/images/ficha2.png  " alt="">
                </picture>
                <div class="articles-info">
                    <h3>Licuados verdes para quemar grasa</h3>
                    <p>Los jugos verdes se han puesto de moda gracias a que en una sola bebida se combinan las propiedades de verduras y frutas que...</p>
                    <a class="verMas" href="#/articulos">ver más</a>
                </div>
            </article>
            <article>
                <picture>
                    <source media="(min-width: 770px)" srcset="../src/assets/images/ficha3.-laptop.png">
                        <source media="(min-width: 430px)" srcset="../src/assets/images/ficha3.-tablet.png">
                            <img src="../src/assets/images/ficha3.png" alt="">
                </picture>
                <div class="articles-info">
                    <h3>Batidos rojos para perder peso naturalmente</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque, repellat 
                        ...</p>
                    <a class="verMas" href="#/articulos">ver más</a>
                </div>
            </article>
        </section>
    </section>
    <section class="OptionPay">
        <img src="../src/assets/images/hombre-mujer-faja.png" alt="modelos mujer y hombre con faja">
        <div class="info-optionPay">
            <h2>Compra faja termoredutora por solo <br>$39,000!!</h2>
            <a href="#/productos">Comprar</a>
        </div>
    </section>    
    `
    return view
}

export default Home