class Pedido {
    constructor(id, tipoPizza, cantidad, detalle) {
        this.id = id;
        this.tipoPizza = tipoPizza;
        this.cantidad = cantidad;
        this.detalle = detalle;
    }
}

class Agregado {
    constructor(id, name) {
        this.id = id;
        this.nombre = name;
    }
}

const agregados = [
    new Agregado(1, "Aceitunas"),
    new Agregado(2, "Jamón"),
    new Agregado(3, "Tomate"),
    new Agregado(4, "Albaca"),
    new Agregado(5, "Jamón Crudo"),
    new Agregado(6, "Morrón"),
    new Agregado(7, "Rúcula"),
    new Agregado(8, "Huevo"),
    new Agregado(9, "Champignones"),
    new Agregado(10, "Ananá"),
    new Agregado(1, "Azucar morena"),
];

let agregadoList = document.getElementById("agregado1");
let agregadoList2 = document.getElementById("agregado2");
let agregadoList3 = document.getElementById("agregado3");
let agregadoList4 = document.getElementById("agregado4");
let agregadoList5 = document.getElementById("agregado5");

agregados.forEach((unAgregado) => {
    let item = document.createElement("option");
    item.value = unAgregado.id.toString();
    item.innerText = unAgregado.nombre;
    agregadoList.append(item);
})

agregados.forEach((unAgregado) => {
    let item = document.createElement("option");
    item.value = unAgregado.id.toString();
    item.innerText = unAgregado.nombre;
    agregadoList2.append(item);
})

agregados.forEach((unAgregado) => {
    let item = document.createElement("option");
    item.value = unAgregado.id.toString();
    item.innerText = unAgregado.nombre;
    agregadoList3.append(item);
})

agregados.forEach((unAgregado) => {
    let item = document.createElement("option");
    item.value = unAgregado.id.toString();
    item.innerText = unAgregado.nombre;
    agregadoList4.append(item);
})

agregados.forEach((unAgregado) => {
    let item = document.createElement("option");
    item.value = unAgregado.id.toString();
    item.innerText = unAgregado.nombre;
    agregadoList5.append(item);
})

const formularioPizza = document.getElementById("pizzaPersonalizada");

class Pizza {
    constructor(id, agreg1, agreg2, agreg3, agreg4, agreg5, comentario) {
        this.id = id;
        this.agreg1 = agreg1;
        this.agreg2 = agreg2;
        this.agreg3 = agreg3;
        this.agreg4 = agreg4;
        this.agreg5 = agreg5;
        this.comentario = comentario;
    }
}

var carritoGuardadoJSON = localStorage.getItem("carrito");
var carritoGuardado = JSON.parse(carritoGuardadoJSON);
let pizzas = [];
let pedidos = carritoGuardado || [];
let numeroPedido = 0;
let numeroBasica = 0;

function agregarPizzaBasica() {
    pizzaCompleta = "Seleccionaste básica! Tu pizza será hecha con una masa cacera y la mejor calidad de muzzarella";
    let item = document.createElement("p");
    item.innerText = pizzaCompleta;
    pedido.append(item);
    const tipoPizza = "Básica";

    let unPedido = new Pedido(
        pedidos.length + 1,
        tipoPizza,
        1,
        "basica"
    )

    pedidos.push(unPedido);

    const pedidoJson = JSON.stringify(pedidos);
    localStorage.setItem("carrito", pedidoJson);

    Swal.fire(
        'Genial',
        'Tu pizza fue agregada correctamente',
        'success'
    )



}



function validarFormulario(data) {
    const agregado1 = document.getElementById("agregado1").value;
    const agregado2 = document.getElementById("agregado2").value;
    const agregado3 = document.getElementById("agregado3").value;
    const agregado4 = document.getElementById("agregado4").value;
    const agregado5 = document.getElementById("agregado5").value;
    const comentarios = document.getElementById("comentario").value;

    const arrayAgregados = [agregado1, agregado2, agregado3, agregado4, agregado5, comentarios];

    const tipoPizza = "Personalizada";

    const unAgregado1 = agregados.find((e) => e.id.toString() === agregado1);
    const unAgregado2 = agregados.find((e) => e.id.toString() === agregado2);
    const unAgregado3 = agregados.find((e) => e.id.toString() === agregado3);
    const unAgregado4 = agregados.find((e) => e.id.toString() === agregado4);
    const unAgregado5 = agregados.find((e) => e.id.toString() === agregado5);

    const unaPizza = new Pizza(
        pizzas.length + 1,
        unAgregado1,
        unAgregado2,
        unAgregado3,
        unAgregado4,
        unAgregado5,
        comentarios
    );

    pizzas.push(unaPizza);

    let pedido = document.getElementById("pedido");
    pedido.innerHTML = "";
    pizzas.forEach((p) => {
        let item = document.createElement("p");
        item.innerText = "Su pizza será personalizada con: " + p.agreg1.nombre + ", " + p.agreg2.nombre + ", " + p.agreg3.nombre + ", " + p.agreg4.nombre + " y " + p.agreg5.nombre;
        pedido.append(item);
    })

    let unPedido = new Pedido(
        pedidos.length + 1,
        tipoPizza,
        1,
        arrayAgregados
    )


    pedidos.push(unPedido);

    const pedidoJson = JSON.stringify(pedidos);
    localStorage.setItem("carrito", pedidoJson);


    Swal.fire(
        'Genial',
        'Tu pizza fue agregada correctamente',
        'success'
    )

    pizzaPersonalizada.reset();

}



formularioPizza.addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario(event.target);
})


function mostrarPedido() {
    let key = "basica" + numeroBasica;
    let basicaCompleto = JSON.parse(localStorage.getItem(toString(key)));

    let item = document.createElement("p");
    item.innerText = "Cantidad:" + p.basicaCompleto.id + ", " + p.basicaCompleto.tipoPizza;
    pedido.append(item);


    for (i = 1; i < numeroPedido; i++) {
        let keypers = "personalizada" + numeroPedido;
        const personalizadaCompleto = JSON.parse(localStorage.getItem(keypers));

        let item = document.createElement("p");
        item.innerText = "Cantidad:" + p.personalizadaCompleto.id + ", " + p.personalizadaCompleto.tipoPizza + ", Detalle: " + p.personalizadaCompleto.detalle;
        pedido.append(item);
    }

}