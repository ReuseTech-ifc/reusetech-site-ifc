const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});




const caixa = document.querySelector('.caixa');
const image = document.querySelector('.image');
const titulo = document.querySelector('.titulo');
const descricao = document.querySelector('.descricao');

function Componentes(imagem, titulo, descricao) {
  this.imagem = imagem;
  this.titulo = titulo;
  this.descricao = descricao;
}

const placamae = new Componentes('../image/img-card.webp', 'Placa Mãe', 'INTEL - LGA | AMD - AM4');
const processador = new Componentes('../image/img-card.webp', 'Processador', 'processador intel core i5');
const placadevideo = new Componentes('../image/img-card.webp', 'Placa de Vídeo', 'GTX 1650');

let lista = [placamae, processador, placadevideo];


const entrar = () => {

    caixa.classList.add('entrar');

    setTimeout(() => {
        caixa.classList.remove('entrar');
    }, 1500);
}

const sair = () => {
    caixa.classList.add('sair');

    setTimeout(() => {
        caixa.classList.remove('sair');
    }, 1500);
}







