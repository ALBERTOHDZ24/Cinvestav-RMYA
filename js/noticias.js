const noticias = [

{
    titulo: "Participación en COMRob 2025",
    imagen: "img/noticia1.jpg",
    descripcion:
    "Integrantes del laboratorio participaron en el Congreso Mexicano de Robótica (COMRob 2025), presentando avances en navegación autónoma, robots móviles e interacción humano-robot."
},

{
    titulo: "Investigación en Agricultura Inteligente",
    imagen: "img/noticia2.jpg",
    descripcion:
    "Se desarrollan sistemas autónomos para monitoreo de cultivos en invernaderos mediante visión por computadora, drones y técnicas de control avanzado."
},

{
    titulo: "Proyectos de Vehículos Autónomos",
    imagen: "img/noticia3.jpg",
    descripcion:
    "El laboratorio continúa impulsando el desarrollo de automóviles autónomos a escala mediante algoritmos de navegación, percepción y coordinación multi-robot."
},

{
    titulo: "Publicaciones Científicas Internacionales",
    imagen: "img/noticia4.jpg",
    descripcion:
    "Los investigadores y estudiantes del grupo publican constantemente resultados en revistas y congresos internacionales de alto impacto en robótica y automatización."
}

];

const contenedor =
document.getElementById("contenedor-noticias");

noticias.forEach(noticia => {

contenedor.innerHTML += `

<div class="col-md-6 col-lg-3">

    <div class="card-custom h-100">

        <img src="${noticia.imagen}"
            class="img-fluid rounded mb-3"
            alt="${noticia.titulo}">

        <h4>
            ${noticia.titulo}
        </h4>

        <p>
            ${noticia.descripcion}
        </p>

    </div>

</div>

`;

});