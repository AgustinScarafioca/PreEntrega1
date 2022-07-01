
// Teniendo en cuenta que como proyecto tengo pensado hacer una tienda de Funko Pop, estableci la siguiente clase y los arrays
// alert("Abra la consola")
class Producto{
    constructor (name, id, precio, stock,){
    this.name =  name;
    this.id = id;
    this.precio = precio
    this.stock = stock;
}
    aumentarStock(ingreso = 1){
        this.stock = this.stock + ingreso
    }
    disminuirStock(egreso = 1){
        this.stock = this.stock - egreso
    }
    aumentoPrecio(porcentaje = 1){
        this.precio = precio * porcentaje
        // this.precio *= porcentaje
    }
    mostrarSeleccion(){
        console.log(`Usted selecciono el producto ${this.nombre}`)
    }
}

const producto1= new Producto ("Sauron", 1, 1500, 5)
const producto2= new Producto ("Frodo Bolson", 2, 2000, 1)
const producto3= new Producto ("Smaug", 3, 1800, 3)
const producto4= new Producto ("Stormtrooper", 4, 800, 25)
const producto5= new Producto ("Darth Vader", 5, 1200, 10)
const producto6= new Producto ("Han Solo", 6, 1400, 15 )

const ProductosLotr = [producto1, producto2, producto3]
const ProductosSw = [producto4, producto5, producto6]

const AllProducts = ProductosLotr.concat(ProductosSw)

// console.table(AllProducts)

const names = AllProducts.map(nombre => nombre.name)
const ident = AllProducts.map(identificador => identificador.id)

alert("Los pops disponibles son " + names + " y cada uno es respectivamente reconocido por su numero de id que son: " + ident)

const carro = []

class Cart{
    constructor(object, quantity){
        this.id = object.id,
        this.name = object.name
        this.price = object.price,
        this.quantity = quantity
    }
}


const agregarAlCarrito = (id,quantity=1) =>{
    const Products = Products.find(p => p.id == id)
    if(!AllProducts){
        return "El producto no existe"
    } else if (AllProducts.stock <=quantity){
    return "No hay suficiente stock"
    }

    const productosEnCarrito = carro.find(p => p.id == id);
    if(productosEnCarrito){
    productosEnCarrito.quantity +=quantity
    } else{
    carro.push ((new Cart(AllProducts,quantity)))
    }
    AllProducts.stock -= quantity;
    return carro;
}

console.table(agregarAlCarrito(1,5))
console.table(agregarAlCarrito(2,8))




// Muestra de todos los productos que tenemos
/*
AllProducts.forEach(funkos => {
    console.table(funkos)
});
*/
// Suponemos una busqueda de usuario de un Pop 

// console.log(AllProducts.filter(funkoBuscado => funkoBuscado.name == "Han Solo")) 
/*


console.log (preciosSeleccionados)
*/

