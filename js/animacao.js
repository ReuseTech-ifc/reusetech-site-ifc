const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});




const cards = document.querySelectorAll('.card');
const image = document.querySelectorAll('.image');
const titulo = document.querySelectorAll('.titulo');
const descricao = document.querySelectorAll('.descricao');

function Componentes(imagem, titulo, descricao) {
  this.imagem = imagem;
  this.titulo = titulo;
  this.descricao = descricao;
}

const placamae = new Componentes('../image/img-card.webp', 'Placa Mãe', 'INTEL - LGA | AMD - AM4');
const processador = new Componentes('../image/img-card.webp', 'Processador', 'processador intel core i5');
const placadevideo = new Componentes('../image/img-card.webp', 'Placa de Vídeo', 'GTX 1650');

let lista = [placamae, processador, placadevideo];



setInterval(() => {
  lista.shift();
  lista.push(placamae, processador, placadevideo);
  image[0].src = lista[0].imagem;
  titulo[0].innerHTML = lista[0].titulo;
  descricao[0].innerHTML = lista[0].descricao;
}, 2000);

