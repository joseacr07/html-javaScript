var t = ''

window.onkeypress = function(e) {
    if (t.length > 41){
        //recortar t
        t = t.substring(1 , t.length)
    }
    caja=document.querySelector("footer div").innerHTML = t
    caja.innerText = e.key
    t = t + e.key

}


/*window.onload= function(){
    caja=document.querySelector("footer div")

    caja.onclick=function(){
        var text
        var person = prompt("enter text")
        if (person!=null){
            text = "return!"
        }
        caja.innerHTML=text
        let text = "hello world";

        let result = text.substring(+42)

    }
}
*/

//let text = "Hello world!";
//let result = text.substr(1, 4);

/*window.onload = function a (){

let a = document.querySelector("footer div")
a.onclick = function (texto, posicionCaracter){
    if (texto.length){
        if (posicionCaracter >= 0 && posicionCaracter < texto.length){
            let parte1 = texto.substring(0, posicionCaracter);
            let parte2 = texto.substring(posicionCaracter + 1, texto.length);

            return parte1 + parte2;

        } else {
            return texto;
        }
    } else {
        return texto;
    }
}

let texto = 'JavaScript'
console.log(a(texto , 5));  //javaScript
console.log();

texto = ''
console.log(a(texto, 5)); //

console.log();

texto = 'python'

} */