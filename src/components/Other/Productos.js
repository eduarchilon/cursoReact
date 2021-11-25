export const productos = 
[
    {id: 0, title: "Titulo 1", price: 1500.00, pictureUrl: 'https://www.allcitycanvas.com/wp-content/uploads/2019/07/las-portadas-marvel-avengers-1.jpg', descripcion: "Descripción de el producto...", categoria: "marvel"},
    {id: 1, title: "Titulo 2", price: 1500.00, pictureUrl:'https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/02/703729._SX1280_QL80_TTD_.jpg', descripcion: "Descripción de el producto...", categoria: "marvel"},
    {id: 2, title: "Titulo 3", price: 1500.00, pictureUrl: 'https://www.ecccomics.com/content/productos/3727/PORTADA_JPG_WEB_RGB_Batman_Superman_Aliens.jpg', descripcion: "Descripción de el producto...", categoria: "dc"},
    {id: 3, title: "Titulo 4", price: 1500.00, pictureUrl:'http://lacuevadelnerd.com/images/noticias/17/1712/171202adt1.jpg', descripcion: "Descripción de el producto...", categoria: "dc"},
    {id: 4, title: "Titulo 5", price: 1500.00, pictureUrl:'https://www.ecccomics.com/content/productos/9580/PORTADA_JPG_WEB_invencible_1.jpg', descripcion: "Descripción de el producto...", categoria: "image"},
    {id: 5, title: "Titulo 6", price: 1500.00, pictureUrl:'https://www.ecccomics.com/content/productos/9733/PORTADA_JPG_WEB_invencible_ultimate_collection_11.jpg', descripcion: "Descripción de el producto...", categoria: "image"}
]


export default productos;

export  const miPromesa = new Promise((resuelto, rechazado)=>{
    resuelto(true);
})


miPromesa
.then(
    setTimeout(()=>{
        productos.forEach(function(producto) {
            console.log(producto);
          });
    }, 2000)
)
.catch(
    (error)=>{
        console.log("Hubo un error en la promesa");
    })