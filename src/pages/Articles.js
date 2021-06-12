const Articles = ()=>{
    const view = `
        <section>
            <div class="Article-container">
                <h2>Titulo de articulo</h2>
                <p>datos de autor / fecha</p>
                <img src="/" alt="">
                <p>Contenido... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur quam libero reiciendis ut eum voluptatibus vel doloremque quibusdam modi doloribus veritatis quod, quasi distinctio culpa quis accusantium minima porro!</p>
            </div>
            <div class="bar-right">
                <h3>Tambien te puede interesar</h3>
                <article class="viweArticle-barR"></article>
                <article class="viweArticle-barR"></article>
                <h3>Reduce medidas con:</h3>
                <article class="viewProduct-barR"></article>
                <article class="viewProduct-barR"></article>
            </div>
        </section>
    `
    return view
}
export default Articles