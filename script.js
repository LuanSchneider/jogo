let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let numerosSorteados = [];

document.getElementById("botao").onclick = function() {
  let entrada = document.getElementById("entrada").value;
  tentativas++;
  numerosSorteados.push(entrada);
  
  if (entrada == numeroAleatorio) {
    document.getElementById("resultado").innerHTML = "Parabéns! Você acertou!";
    document.getElementById("tentativas").innerHTML = "Número de tentativas: " + tentativas;
  } else if (entrada < numeroAleatorio) {
    document.getElementById("resultado").innerHTML = "O número é maior.";
  } else {
    document.getElementById("resultado").innerHTML = "O número é menor.";
  }
}