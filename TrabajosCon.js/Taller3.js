var Num1 = document.getElementById("Num1");
var Num2 = document.getElementById("Num2");
var Error = document.getElementById("Error");
Error.style.color = "red";

function limpiar() {
  document.getElementById("Formulario de operadores").reset();
}

function sumar() {
  var Nom = parseInt(document.getElementById("Num1").value);
  var Nom1 = parseInt(document.getElementById("Num2").value);
  document.getElementById("El-resultado").innerHTML = Nom + Nom1;
  var mensajeError = [];
  if (Num1.value === null || Num1.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  if (Num2.value === null || Num2.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  Error.innerHTML = mensajeError.join(",");
}

function restar() {
  var Nom = parseInt(document.getElementById("Num1").value);
  var Nom1 = parseInt(document.getElementById("Num2").value);
  document.getElementById("El-resultado").innerHTML = Nom - Nom1;
  var mensajeError = [];
  if (Num1.value === null || Num1.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  if (Num2.value === null || Num2.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  Error.innerHTML = mensajeError.join(",");
}

function Multiplicar() {
  var Nom = parseInt(document.getElementById("Num1").value);
  var Nom1 = parseInt(document.getElementById("Num2").value);
  document.getElementById("El-resultado").innerHTML = Nom * Nom1;
  var mensajeError = [];
  if (Num1.value === null || Num1.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  if (Num2.value === null || Num2.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  Error.innerHTML = mensajeError.join(",");
}

function dividir() {
  var Nom = parseInt(document.getElementById("Num1").value);
  var Nom1 = parseInt(document.getElementById("Num2").value);
  document.getElementById("El-resultado").innerHTML = Nom / Nom1;
  var mensajeError = [];
  if (Num1.value === null || Num1.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  if (Num2.value === null || Num2.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  Error.innerHTML = mensajeError.join(",");
}

function potencia() {
  var Nom = parseInt(document.getElementById("Num1").value);
  var Nom1 = parseInt(document.getElementById("Num2").value);
  let resultado = 1;
  for (let i = 0; i < Nom; i++) {
    resultado = resultado * Nom1;
    document.getElementById("El-resultado").innerHTML = resultado;
  }
  var mensajeError = [];
  if (Num1.value === null || Num1.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  if (Num2.value === null || Num2.value === "") {
    mensajeError.push("Ingrese un numero entero");
  }
  Error.innerHTML = mensajeError.join(",");
  return resultado;
}
