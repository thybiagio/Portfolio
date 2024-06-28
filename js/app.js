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

function fetchGitHubRepos(thybiagio) {
    fetch(`https://api.github.com/users/${thybiagio}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById('repo-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `https://${thybiagio}.github.io/${repo.name}`;
                link.textContent = repo.name;
                link.target = '_blank';
                listItem.appendChild(link);
                repoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubRepos('thybiagio'); 
});