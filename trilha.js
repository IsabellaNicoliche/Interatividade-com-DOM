//Pegando os elementos do DOM//
var campoNome = document.getElementById("campoNome");
var btnEnviar = document.getElementById("btnEnviar");
var mensagem  = document.getElementById("mensagem");
var btnModo   = document.getElementById("btnModo");

var modoEscuro = false; // controla o modo atual

//Evento de clique: mostrar mensagem personalizada//
btnEnviar.addEventListener("click", function () {
  var nome = campoNome.value;

  if (nome === "") {
    mensagem.textContent = "Por favor, digite seu nome!";
  } else {
    mensagem.textContent = "Olá, " + nome + "! Bem-vindo(a) à Trilha do Saber PFC.";
  }
});

//Evento de clique: alternar modo claro / escuro //
btnModo.addEventListener("click", function () {
  modoEscuro = !modoEscuro; // inverte o valor

  if (modoEscuro) {
    document.body.style.backgroundColor = "#2b1b3d"; // fundo escuro
    document.body.style.color = "#ffffff";           // texto claro
    btnModo.textContent = "☀️ Modo claro";
  } else {
    document.body.style.backgroundColor = "#ffffff"; // fundo claro
    document.body.style.color = "#2b1b3d";           // texto escuro
    btnModo.textContent = "🌙 Modo escuro";
  }
});
