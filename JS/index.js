document.addEventListener('DOMContentLoaded', function() {
    const username = 'davifsclemente'; // Substitua pelo seu nome de usuário do GitHub
    const repoList = document.getElementById('repositorios');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                link.target = '_blank';
                listItem.appendChild(link);
                repoList.appendChild(listItem);
            });
        }).catch(error => console.error('Erro ao buscar repositórios:', error));
});