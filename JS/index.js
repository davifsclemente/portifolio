document.addEventListener('DOMContentLoaded', function() {
    const username = 'davifsclemente'; // Substitua pelo seu nome de usuário do GitHub
    const repoList = document.getElementById('repositorios');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoItem = document.createElement('div');
                repoItem.classList.add('repo-item');
                
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                link.title = repo.name;
                link.target = '_blank';
                link.style.color = 'yellow';
                
                const description = document.createElement('p');
                description.textContent = repo.description || 'projeto sem descrição.';
                description.style.color = 'white';

                repoItem.appendChild(link);
                repoItem.appendChild(description);
                repoList.appendChild(repoItem);
            });
        }).catch(error => console.error('Erro ao buscar repositórios:', error));
});

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});