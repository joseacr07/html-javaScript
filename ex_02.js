window.onload = function (){

    mydiv = document.querySelector("footer div")
    var i = 0 
    mydiv.onclick = function(){
        i++
        mydiv.innerText = i
    }

}