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

document.addEventListener('DOMContentLoaded', function (){ 
    const projectContainer = document.querySelector(".content-main");

    function getApiGitHub(){ 
        fetch('https://api.github.com/users/thybiagio/starred')
            .then(async res => { 
                if(!res.ok){ 
                    throw new Error('Erro ao buscar os dados da API do GitHub');
                }
                let data = await res.json(); 
                data.forEach(item => { 
                    let project = document.createElement('div');
                    project.classList.add('project');

                    project.innerHTML = `
                        <div> 
                            <h4 class="title">${item.name}</h4> 
                        </div>
                        <div>
                        <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        <span class"language"><span class="circle"></span>${item.language}</span>
                        </div>
                    `; 

                    projectContainer.appendChild(project);
                });
            })
            .catch(error => { 
                console.error('Erro ao buscar a API do GitHub:', error); 
            });
    }

    getApiGitHub();
});