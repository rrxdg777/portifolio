window.addEventListener('load', () => {
    const loader = document.getElementById('ldiv');
    const content = document.getElementById('content');
    loader.style.display = 'none'; // Esconde a tela de carregamento
    content.style.display = 'block'; // Exibe o conteúdo principal
});
