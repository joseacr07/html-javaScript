window.onload = function () {

    /*changeText = document.getElementsByTagName("footer")
    changeText = document.getElementsByTagName("footer");
    for (var i=0; i<changeText.length; i++){
        changeText[0].textContent = "hello World!"
        changeText[0].style.backgroundColor = "#fff"
        changeText[0].style.backgroundColor = "#fff"
    }*/

    document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerText = "hello World!"

}