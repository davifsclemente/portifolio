// Função para pegar os repositórios do GitHub e exibir na página.
document.addEventListener('DOMContentLoaded', function() {
    const username = 'davifsclemente'; // Substitua pelo seu nome de usuário do GitHub
    const divRepositorios = document.getElementById('repositorios'); // Substitua pelo id da da div onde os repositórios serão exibidos

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {data.forEach(repo => {
                const areaDoRepositorio = document.createElement('div');
                areaDoRepositorio.classList.add('projetos-repositorio');
                areaDoRepositorio.style.alignContent = 'center';
                areaDoRepositorio.style.textAlign = 'center';
                
                const dadosDoRepositorio = document.createElement('a');
                dadosDoRepositorio.href = repo.html_url;
                dadosDoRepositorio.textContent = repo.name;
                dadosDoRepositorio.target = '_blank';
                dadosDoRepositorio.style.color = 'orange';
                
                const descricaoDoRepositorio = document.createElement('p');
                descricaoDoRepositorio.textContent = repo.description || 'Projeto sem descrição.';
                descricaoDoRepositorio.style.color = 'white';

                areaDoRepositorio.appendChild(dadosDoRepositorio);
                areaDoRepositorio.appendChild(descricaoDoRepositorio);
                divRepositorios.appendChild(areaDoRepositorio);
            });
        }).catch(error => console.error('Erro ao pegar os repositórios:', error));
});