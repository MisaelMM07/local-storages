let mensaje = document.getElementById('mensaje');
let email = document.getElementById('email');
let password = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
let boton = document.getElementById('boton');

let leer = document.getElementById('leer');
let registro = document.getElementById('registros');

let valor = "Misael Morales";
/* let registro = [
    {
        email: email.value,
        password: password.value,
        checkbox: checkbox.value
    }
]; */
let registros = [];

mensaje.innerHTML = localStorage.getItem("Resgistro");

boton.addEventListener('click', function (e) {

    //Objeto
    let elemento =
    {
        email: email.value,
        password: password.value,
        checkbox: checkbox.value
    };
    console.log(elemento);
    //alert();
    e.preventDefault();
    //localStorage.setItem("Email", email.value);
    //localStorage.setItem("Password", password.value);
    //localStorage.setItem("Checkbox", checkbox.value);

    registros.push(elemento);

    localStorage.setItem("Registros", JSON.stringify(registros));


});
// LEER DATOS
leer.addEventListener('click', function () {
    registros = JSON.parse(localStorage.getItem("Registros"));

    registros.forEach(function (elemento, indice) {
        console.log(indice + ": " + elemento.email + ", " + elemento.password + ", " + elemento.checkbox);
        registro.innerHTML = registro.innerHTML + indice + ": " + elemento.email + ", " + elemento.password + ", " + elemento.checkbox + "<br>";
    });

});