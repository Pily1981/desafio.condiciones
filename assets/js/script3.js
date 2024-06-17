function password() {

    let number1 = document.querySelector("#numero1").value;
    let number2 = document.querySelector("#numero2").value;
    let number3 = document.querySelector("#numero3").value;

    if (number1 === "9" && number2 === "1" && number3 === "1") {
        document.querySelector(".mensaje").innerHTML = "Password 1 correcto"
    } else if (number1 === "7" && number2 === "1" && number3 === "4") {
        document.querySelector(".mensaje").innerHTML = "Password 2 Correcto"
    } else {
        document.querySelector(".mensaje").innerHTML = "Pasword Incorrecto"
    }
}