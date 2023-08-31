
var bebida=prompt("menu");

switch(bebida){
case "carne":
alert("vino tinto");
break;
case"pescado":
alert("vino blanco");
break; 
case"verdura":
alert("agua");
break;
default:
alert("elija carne pescado o verdura")
}

var menu=["carne","pescado","verdura"];
menu.push("pollo");


for(let i=0;i<menu.length;i++){

    console.log("el menu guardado en la posicion " + i + " es " + menu[i])
}

var numero=0;
while(numero<11){
    console.log("el " + numero + " es mas chico que 11");
    numero=numero+1;
  
}
console.log("el fin del bucle")





