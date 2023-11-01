//--------------------------------------------------------------FUNCIONES FLECHA

const saludoBienvenida = (nombreCliente) => {
  alert("Hola " + nombreCliente + ", apriete ACEPTAR para ingresar al catálogo");
};

const saludoDespedida = (nombreCliente) => {
  alert("Gracias por visitar TomaDos, sr/sra " + nombreCliente + ", vuelva pronto");
};

//-------------------------------------------------------------LISTA DE OBJETOS

const bebidasSinAlcohol = [
  { bebida: "Jugo", precio: 550, marca: "Baggio Naranja" },
  { bebida: "Jugo", precio: 600, marca: " Baggio Manzana" },
  { bebida: "Gaseosa", precio: 1000, marca: "Coca-Cola" },
  { bebida: "Gaseosa", precio: 900, marca: "Sprite" },
];

const bebidasConAlcohol = [
  { bebida: "Cerveza", precio: 1100, marca: "Quilmes" },
  { bebida: "Cerveza", precio: 1200, marca: "Corona" },
  { bebida: "Fernet", precio: 3500, marca: "Branca" },
  { bebida: "Fernet", precio: 2200, marca: "Buho Negro" },
];

alert("Bienvenido a TomaDos, acceso permitido solo a mayores de 18 años"); // AVISO DE EDAD MINIMA PARA INGRESAR

let edadUsuario = prompt("Ingrese su edad, por favor:");// FILTRO EDAD

if (parseInt(edadUsuario) >= 18) {
  let nombreCliente = prompt("Acceso permitido, Ingrese su nombre:");

  saludoBienvenida(nombreCliente); //SALUDO BIENVENIDA

  let categoriaElegida = prompt("¿Qué está buscando? : 1-Bebidas SIN ALCOHOL, 2-Bebidas CON ALCOHOL, 0-Salir");

  // ---------------------------------------------------------VARIABLES GENERALES 

  let montoTotal = 0;
  let cantidadALLevar = 0;
  let listaDeCompras = []; // Nuevo objeto para almacenar las sugerencias del usuario

  while (categoriaElegida != "0") {
    switch (categoriaElegida) {
      case "1":
        let jugoOGaseosa = prompt("Elija el producto a agregar al carrito: 1-Jugo Baggio de Naranja , 2-Jugo Baggio de Manzana, 3-Gaseosa Coca Cola , 4-Gaseosa Sprite");

        switch (jugoOGaseosa) {
          case "1":
            agregarProducto(bebidasSinAlcohol[0], "cantidadJugoNaranja");
            break;
          case "2":
            agregarProducto(bebidasSinAlcohol[1], "cantidadJugoManzana");
            break;
          case "3":
            agregarProducto(bebidasSinAlcohol[2], "cantidadCocaCola");
            break;
          case "4":
            agregarProducto(bebidasSinAlcohol[3], "cantidadSprite");
            break;
          default:
            alert("ERROR: Ingrese una opción válida");
            break;
        }
        break;
      case "2":
        let cervezaOFernet = prompt("Elija el producto a agregar al carrito: 1-Cerveza Quilmes 1L , 2-Cerveza Corona 750ML, 3-Fernet Branca 750ml , 4-Fernet Buho Negro");

        switch (cervezaOFernet) {
          case "1":
            agregarProducto(bebidasConAlcohol[0], "cantidadCervezaQuilmes");
            break;
          case "2":
            agregarProducto(bebidasConAlcohol[1], "cantidadCervezaCorona");
            break;
          case "3":
            agregarProducto(bebidasConAlcohol[2], "cantidadFernetBranca");
            break;
          case "4":
            agregarProducto(bebidasConAlcohol[3], "cantidadFernetBuhoNegro");
            break;
          default:
            alert("ERROR: Ingrese una opción válida");
            break;
        }
        break;
      default:
        alert("ERROR: Ingrese una opción válida");
        break;
    }

    categoriaElegida = prompt("¿Qué está buscando? : 1-Bebidas SIN ALCOHOL, 2-Bebidas CON ALCOHOL, 0-Salir/Finalizar compra");
  }

  //--------------------------------------------------------------FUNCIONES
  function agregarProducto(producto, cantidadVariable) {
    alert(`El precio por unidad de ${producto.marca} es: ${producto.precio}`);
    let cantidad = prompt(`Ingrese la cantidad de ${producto.marca} que desea llevar:`);
    let precioTotal = producto.precio * parseInt(cantidad);
    montoTotal += precioTotal;
    alert(`El precio total de ${cantidad} unidades de ${producto.marca} es: ${precioTotal}`);

    listaDeCompras.push(producto); // USE PUSH COMO UNOS DE LOS METODOS DE FUNCIONES DE ORDEN SUPERIOR
  }

  alert("El monto total de su compra es: " + montoTotal);

  // Mostrar las sugerencias del usuario
  if (listaDeCompras.length > 0) {
    let productosAgregados = "Usted agregó al carrito:\n";
    listaDeCompras.forEach((producto) => {
      productosAgregados += `${producto.marca}\n`;
    });
    alert(productosAgregados);
} else {
    alert("El cliente no agregó productos al carrito.");
  }
  

  saludoDespedida(nombreCliente);
} else {
  alert("Acceso DENEGADO, eres menor de 18 años");
}
