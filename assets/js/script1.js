
function toggleBorder(){
    var foto = document.querySelector('img')
    if(foto.style.border){
        foto.style.border = ''
    }
    else {
        foto.style.border = '2px solid red'
    }
}