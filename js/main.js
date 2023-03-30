let cantidadPizzas = prompt("Ingrese cantidad de pizzas deseadas. Sólo puede ordenar hasta 3")
let pizzaCompleta;
let primeraPizza;
let segundaPizza;
let terceraPizza;

function ordenarPizza(){
    let tipoPizza = prompt("Ingresa basica si querés la muzza o personalizada para armarla a tu gusto");
    let cantidadAgregados = 5;
    let primerAgregado;
    let segundoAgregado;
    let tercerAgregado;
    let quintoAgregado;

    if (tipoPizza == ""){
        alert("No ingresaste que tipo de pizza");
    } else if (tipoPizza == "basica" || tipoPizza == "Basica"){
        alert("Seleccionaste básica! Tu pizza será hecha con una masa cacera y la mejor calidad de muzzarella");
        pizzaCompleta = "Seleccionaste básica! Tu pizza será hecha con una masa cacera y la mejor calidad de muzzarella";
    } else if (tipoPizza == "personalizada" || tipoPizza == "Personalizada"){
        alert("Seleccionaste personalizada");
        for (let i = 1; i <= cantidadAgregados; i++){
            let ingresarAgregado = prompt("Escribe el agregado te gustaría ponerle?");
            if(i == 1){
                primerAgregado = ingresarAgregado;
            } else if (i == 2){
                segundoAgregado = ingresarAgregado;
            } else if (i == 3){
                tercerAgregado = ingresarAgregado;
            } else if (i == 4){
                cuartoAgregado = ingresarAgregado;
            } else{
                quintoAgregado = ingresarAgregado;
            }
        }
        pizzaCompleta = "Tu pizza será personalizada con "+ primerAgregado +" "+ segundoAgregado +" "+ tercerAgregado +" "+ cuartoAgregado +" y "+ quintoAgregado; 
        
    } else {
        alert("Debes ingresar basica o personalizada");
    }
}

if (cantidadPizzas == 1){
    ordenarPizza();
    alert( pizzaCompleta);
} else if (cantidadPizzas == 2) {
    ordenarPizza();
    primeraPizza = pizzaCompleta;
    ordenarPizza();
    segundaPizza = pizzaCompleta;
    alert("Primera Pizza: "+primeraPizza+" Segunda pizza: "+segundaPizza );
} else if (cantidadPizzas == 3){
    ordenarPizza();
    primeraPizza = pizzaCompleta;
    ordenarPizza();
    segundaPizza = pizzaCompleta;
    ordenarPizza();
    terceraPizza = pizzaCompleta;
    alert("Primera Pizza: "+primeraPizza+" "+"Segunda pizza: "+segundaPizza+" Tercera pizza: "+terceraPizza );
}else{
    alert("Debes ordenar un máximo de 3 pizzas, por favor indique el número de pizzas a ordenar:")
}
