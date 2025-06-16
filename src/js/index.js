/* passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS */
const botaoFiltrar = document.querySelector('.btn-filtrar');


/* passo 2- escutar o clique no botao de aplicar filtros */
botaoFiltrar.addEventListener('click', function () {



    // passo 3 - pegar os valores dos campos de categorias e preços
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    // passo 4- para cada carta, verificar se ela deve ser mostrada ou escondida, baseado nos filtros que a pessoa digitou
    //parte 1
    const cartas = document.querySelectorAll(".carta");

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';
        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) { mostrarCarta = false };

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) { mostrarCarta = false };

        if (mostrarCarta === true) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }

    });
});