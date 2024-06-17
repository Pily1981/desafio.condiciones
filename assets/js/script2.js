function counter(){
    let suma1 = Number(document.querySelector('#cd1').value)
    let suma2 = Number(document.querySelector('#cd2').value)
    let suma3= Number(document.querySelector('#cd3').value)
    let sumaTotal = (suma1 + suma2 + suma3)

    if(sumaTotal <=10){
        document.querySelector('.mensaje').innerHTML= 'Llevas ' + sumaTotal + ' stickers'
    }else{
        document.querySelector('.mensaje').innerHTML= 'Te excediste en la cantidad de stickers'
    }

}