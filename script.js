const resultado = document.getElementById("res");

function insert(num) {
  if (resultado.innerHTML.length <= 13) {
    resultado.innerHTML += num;
  } else {
    alert("Limite maximo de caracteres alcançado");
  }
}

function clean() {
  resultado.innerHTML = "";
}

function apagar() {
  resultado.innerHTML = resultado.innerHTML.substring(
    0,
    resultado.innerHTML.length - 1
  );
}

function calcular() {
  if (resultado.innerHTML) {
    resultado.innerHTML = eval(resultado.innerHTML);
  } else {
    alert("ERRO: nenhum caractere encontrado");
  }
}
