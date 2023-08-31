var topping = Number(prompt("que topping quere? 1 - oreo - kitkat, 3 - kinder"));
var precio=0;
var precioFinal=0;
var helado=10;

if(topping ==1){
    precio = 10;
    precioFinal= helado + precio;
    alert("El helado cuesta $ " + precioFinal);
}else if(topping == 2){
    precio = 15;
    precioFinal= helado + precio;
    alert("El helado cuesta $ " + precioFinal);
}else if(topping ==3){
    precio = 25
    precioFinal= helado + precio;
    alert("El helado cuesta $ " + precioFinal);
}else{
    alert("No tenemos este topping")
}
