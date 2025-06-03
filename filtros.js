document.addEventListener('DOMContentLoaded', () => {
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroTipo = document.getElementById('filtro-tipo');
    const materialCards = document.querySelectorAll('.material-card');

    function filtrarMateriais() {
        const categoriaSelecionada = filtroCategoria ? filtroCategoria.value : 'todos';
        const tipoSelecionado = filtroTipo ? filtroTipo.value : 'todos';

        materialCards.forEach(card => {
            const cardCategoria = card.dataset.categoria;
            const cardTipo = card.dataset.tipo;

            const matchesCategoria = (categoriaSelecionada === 'todos' || cardCategoria === categoriaSelecionada);
            const matchesTipo = (tipoSelecionado === 'todos' || cardTipo === tipoSelecionado);

            if (matchesCategoria && matchesTipo) {
                card.style.display = ''; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });
    }

    if (filtroCategoria) {
        filtroCategoria.addEventListener('change', filtrarMateriais);
    }
    if (filtroTipo) {
        filtroTipo.addEventListener('change', filtrarMateriais);
    }

    // Initial filter application on page load (optional, if needed)
    // filtrarMateriais();
});
