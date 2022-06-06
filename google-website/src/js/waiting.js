localStorage.setItem("pressed", false);

voting.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(result => result.json())
        .then(data => {
            localStorage.setItem("pressed", true);
            window.location = './game.html';
            if(!localStorage.getItem("pressed"))data.games.vote++;
            if(data.games.vote > data.games.length) data.games.start = true;
            if(data.games.start) window.location = './game.html';
    });
});