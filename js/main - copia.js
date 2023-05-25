class Pizzas {
    constructor(tipo, cantidad, agregados) {

        this.tipo = tipo;
        this.cantidad = cantidad;
        this.agregados = agregados.toUpperCase();
    }

}

class ListaAgregados {
    constructor(id, nombreAg, disponible){
        this.id = id;
        this.nombreAg = nombreAg;
        this.disponible = disponible;
    }
}

class Cliente {
    constructor(nombre, direccion, metodoPago) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.metodoPago = parseInt(metodoPago);
    }

    toString = function () {
        return this.nombre;
    }
}

let cantidadPizzas = prompt("Ingrese cantidad de pizzas deseadas") //variable que contiene 
let pizzaCompleta; //variable que se utiliza para mostrar el detalle de cada pizza
let pizzasCompletas = [];
let agregadosPermitido = [];

//Agrego los items permitidos para personalizar la pizza.
agregadosPermitido.push(new ListaAgregados("1","TOMATE","true"));
agregadosPermitido.push(new ListaAgregados("2","HUEVO","true"));
agregadosPermitido.push(new ListaAgregados("3","JAMON","true"));
agregadosPermitido.push(new ListaAgregados("4","ACEITUNA","true"));
agregadosPermitido.push(new ListaAgregados("5","MORRON","true"));
agregadosPermitido.push(new ListaAgregados("6","ANANA","true"));
agregadosPermitido.push(new ListaAgregados("1","JAMON CRUDO","true"));
agregadosPermitido.push(new ListaAgregados("1","RUCULA","true"));

function ordenarPizza() {

    let tipoPizza = prompt("Ingresa 1 si querés la muzza basica o 2 para armarla a tu gusto");
    let arrayAgregado = [];
    let cantidadAgregados;
    

    if (tipoPizza == "") {
        // compruebo que se ingresara un tipo de pizza para continuar
        alert("No ingresaste que tipo de pizza");
    } else if (tipoPizza == 1) {
        pizzaCompleta = "Seleccionaste básica! Tu pizza será hecha con una masa cacera y la mejor calidad de muzzarella";
        cantidadAgregados = 0;
    } else if (tipoPizza == 2) {
        alert("Seleccionaste personalizada");
        //Se consulta la cantidad de agregados al usuario
        cantidadAgregados = prompt("Ingresa la cantidad de agregados que deseas. El máximo permitido es 5");
        while (cantidadAgregados > 5) {
            cantidadAgregados = parseInt(prompt("No se permiten mas de 5 agregados. Cuantos desea?"))
        }
        for (let i = 1; i <= cantidadAgregados; i++) {
            //Se pide al usuario que ingrese los agregados de a 1
            let ingresarAgregado = prompt("Escribe el agregado número "+ i +" que te gustaría ponerle?");
            //Se comprueba que el agregado que el usuario ingreso, se encuentre entre la lista de los permitidos antes de agregarlo
            let comprueboAgregado = agregadosPermitido.some((ag) => ag.nombreAg.includes(ingresarAgregado.toUpperCase()));
            if(comprueboAgregado){
                arrayAgregado.push(ingresarAgregado);
            }else{
                alert("Lamentablemente el agregado que deseas no esta disponible. Por favor agrega otro");
                i= i-1;
            }
        }

        pizzaCompleta = "Tu pizza será personalizada con: " + arrayAgregado.join(",\n");

    } else {
        alert("Debes ingresar 1 para Básica o 2 para Personalizada");
    }
    pizzasCompletas.push(new Pizzas(tipoPizza,cantidadAgregados,arrayAgregado.join(", ")));
}



for(let i = 1; i <= cantidadPizzas; i++){
    ordenarPizza();
    alert(i +" - " + pizzaCompleta);
}
console.log("--> El pedido completo es el siguiente: ", pizzasCompletas);

let nuevoCliente = new Cliente("", "", "");
nuevoCliente.nombre = prompt("Nombre de la persona que recibirá el pedido");
nuevoCliente.direccion = prompt("A que dirección debemos enviar el pedido?");
nuevoCliente.metodoPago = prompt("Cómo desea pagar el pedido? Ingrese 1 para abonar en efectivo al momento de recibirlo o 2 para abonar con tarjeta");

while (nuevoCliente.metodoPago > 2) {
    nuevoCliente.metodoPago = prompt("Debe ingresar 1 o 2. Ingrese 1 para abonar en efectivo al momento de recibirlo o 2 para abonar con tarjeta");
}
if (nuevoCliente.metodoPago == 1) {
    console.log("-->Revice los datos de entrega antes de continuar:\n Nombre de quién recibirá el pedido:", nuevoCliente.nombre);
    console.log("-->Dirección:", nuevoCliente.direccion);
    console.log("-->El metodo de pago seleccionado es Efectivo, por lo que el pedido será abonado al momento de la entrega. Gracias por su compra!");
} else if (nuevoCliente.metodoPago == 2) {
    console.log("-->Revice los datos de entrega antes de continuar:\n Nombre de quién recibirá el pedido:", nuevoCliente.nombre);
    console.log("-->Dirección:", nuevoCliente.direccion);
    console.log("-->El metodo de pago seleccionado es Tarjeta, por lo que serás redireccionado para que el pedido será abonado antes de la entrega. Gracias por su compra!");
} 

function mostrarPedido(){
    
}
