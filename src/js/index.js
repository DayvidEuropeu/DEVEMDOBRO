function ajustarPaddingTopo() {
  const cabecalho = document.querySelector('.cabecalho');
  const container = document.querySelector('.container');

  const altura = cabecalho.offsetHeight; // pega altura real do cabeçalho

  container.style.paddingTop = altura + 'px';
}

// Ajusta ao carregar a página
window.addEventListener('load', ajustarPaddingTopo);

// Ajusta ao redimensionar a janela, caso altura mude
window.addEventListener('resize', ajustarPaddingTopo);


const botaoFiltrar = document.querySelector('.btn-filtrar');
const campoCategoria = document.querySelector('#categoria');
const campoPreco = document.querySelector('#preco');

// Escutar tecla Enter
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filtrarCartas();
    }
});

// Escutar clique no botão
botaoFiltrar.addEventListener('click', filtrarCartas);

// Escutar digitação nos filtros (filtrar em tempo real)
campoCategoria.addEventListener('input', filtrarCartas);
campoPreco.addEventListener('input', filtrarCartas);

// Função para aplicar os filtros
function filtrarCartas() {
    const categoriaSelecionada = campoCategoria.value;
    const precoMaximoSelecionado = campoPreco.value;
    const cartas = document.querySelectorAll(".carta");

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        if (categoriaSelecionada && categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase()) {
            mostrarCarta = false;
        }

        if (precoMaximoSelecionado && parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
}
