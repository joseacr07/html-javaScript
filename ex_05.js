var tamn = 100;
const incrDecr = 50;

//cambiamos el fondo de la caja segun el color seleccionado
function fondo(){
    despl = document.getElementsByTagName("div").item(2)
    colorFond = colorSel.value
    despl.style.backgroundColor = colorSel.value;
}

//cambiamos el tamado de forma inc o dec
function tamano(valor){
    if(valor == "+"){
        tamn += incrDecr;
        cadena = tamn+"%";
        todo.style.fontSize = cadena;
    }
    else if(valor == "-"){
        tamn -= incrDecr;
        cadena = tamn+"%";
        todo.style.fontSize = cadena;
    }
}

//anadimos el atributo de ejecutar la funcion
//en el body
window.onload = function(){
    botMas = document.getElementsByTagName("button").item(0);
    botMenos = document.getElementsByTagName("button").item(1);
    colorSel = document.getElementsByTagName("select").item(0);
    todo = document.getElementsByTagName("body").item(0);

    //anadimos atributos a los dos botones
botMas.setAttribute("onclick", "tamano('+')");
botMenos.setAttribute("onclick", "tamano('-')");
colorSel.setAttribute("onclick", "fondo()");

}
/*btns=document.querySelectorAll("footer div button")[0]

btnmas=btns[0]
btnmas.onclick = function(){
    //aumenta el tamano de los caracteres 
}






btnmenos=btns[1]
btnmenos.onclick = function(){
     //disminuye el tmaanos de los caracteres 
}*/