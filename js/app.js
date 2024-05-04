// Adiciona o sublinhado quando o mouse passar por cima dos links
const links = document.querySelectorAll('.navegacao_menu_link');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
    });
});
