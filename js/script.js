//HEADER PRINCIPAL NAV
const nav = document.querySelectorAll(".header-nav li a");

function clique(item){
  const link = item.href;
  const url = location.href;
  if(link.includes(url)){
    item.classList.add("ativo");
  }
};
nav.forEach(clique);

//PERGUNTAS FREQUENTES

const lista = document.querySelectorAll(".perguntas button");

function abrirfechar(event){
  const x = event.currentTarget;
  const id = x.getAttribute("aria-controls");
  const resposta = document.getElementById(id);
  resposta.classList.toggle("ativoResposta");

  const ativa = resposta.classList.contains("ativoResposta");
  
  x.setAttribute("aria-expanded", ativa);
  
}

function cliquePerguntas(item){
  item.addEventListener("click", abrirfechar);
}

lista.forEach(cliquePerguntas);

//PLUGIN ANIMAÇÕES

if(window.SimpleAnime){
  new SimpleAnime();
}