console.log('hola desde app.js')

let gmail = 'coderhouse@gmail.com';
let mail = prompt ('Ingrese su email');

while(gmail != mail)
{
    alert('Dirección de email incorrecta')
    mail = prompt ('Ingrese su email');
}
alert ('Dirección de email correcta')

let clave ='coder';
let contraseña = prompt ('Ingrese su contraseña');

while(contraseña != clave)
{
    alert('Contraseña incorrecta')
    contraseña = prompt ('Ingrese su contraseña');
}
alert ('Contraseña correcta, ¡Bienvenido!')

const menu = prompt('Seleccione la marca que desea comprar: Lenovo, HP, Asus')
{
   switch (menu) {
    case "Lenovo".toLowerCase():
        alert('Seleccionaste Lenovo, contamos con notebooks disponibles.')
        break;
   case "HP".toLowerCase():
        alert('Seleccionaste HP, tenemos 2 notebooks disponibles.')
        break;
   case "Asus".toLowerCase():
        alert('Seleccionaste Asus, contamos con 1 notebook disponible.')
        break;
    default:
        alert('El producto seleccionado no se encuentra disponible, puedes adquirir los productos disponibles en la lista.')
        break;
   }
    
}


// Mis Productos
const producto1 = { sku: '1234578', marca: 'Lenovo', modelo: 'IdeaPad Gaming 3', descripcion: 'Procesador AMD Ryzen™ 5 5600H; Sistema Operativo: Windows 11 Home Single Language 64; Pantalla: 15.6" FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, 120Hz, LED Backlight, Narrow Bezel; 8 GB RAM; 512 GB SSD', precio: '$224000'}
const producto2 = { sku: '8725348', marca: 'HP', modelo: '15-EC1035LA AMD R5', descripcion: 'Procesador AMD Ryzen™ 5 5600H; Sistema Operativo: Windows 11 Home Single Language 64; Pantalla: 15.6" FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, 120Hz, LED Backlight, Narrow Bezel; 8 GB RAM; 256 GB SSD', precio: '$189999'}
const producto3 = { sku: '0990426', marca: 'HP', modelo: 'NOTEBOOK R7 15-EH0009LA', descripcion: 'Procesador AMD Ryzen™ 7 5600H; Sistema Operativo: Windows 11 Home Single Language 64; Pantalla: 15.6" FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, 120Hz, LED Backlight, Narrow Bezel; 12 GB RAM; 1T GB hdd', precio: '$138999'}
const producto4 = { sku: '7653462', marca: 'Asus', modelo: 'NOTEBOOK ASUS X515EA-EJ1343T', descripcion: 'Procesador Intel Core i5 5600H; Sistema Operativo: Windows 11 Home Single Language 64; Pantalla: 15.6" FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, 120Hz, LED Backlight, Narrow Bezel; 16 GB RAM; 1T GB SSD', precio: '$234999'}

const Productos = [producto1, producto2, producto3, producto4]
console.log(Productos)

for(const Producto of Productos) {
    console.log(Producto.marca, Producto.precio)
}

// Eventos (Botones Carrito)
const botonClick = document.querySelector('#botonClick')
console.log(botonClick);

const mostrarMensaje = () => {
    alert('El producto seleccionado se ha agregado al Carrito. Seleccione su producto desde la sección "Carrito de Compras" para efectuar su compra. ')
}

botonClick.addEventListener('click', mostrarMensaje) 


const botonesAgregarCarrito = document.querySelectorAll('#agregarCarrito')

const mostrarEvento = (datosDelEvento) => {
    datosDelEvento.target.innerHTML = 'Se agregó al carrito'

}

botonesAgregarCarrito.forEach((boton) => {
boton.addEventListener('click', mostrarEvento)
})

// Barra de buscador
const searchBar = document.querySelector('#search')

const search = () => {
    const query = searchBar.value 
    const searchResult = Productos.filter((Producto) => Producto.marca.toLowerCase().includes(query))
    console.log(searchResult);
}
searchBar.addEventListener('input', search)
