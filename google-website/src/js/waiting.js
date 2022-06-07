var index = 0;

voting.addEventListener('click', () => {
    fetch('http://10.78.131.31:9999/data_changes')
        .then(result => result.json())
        .then(data => {
            iwindow.location = './game.html';
            if(!data.games[index].pressed){
                data.games.vote++;
                data.games[index].pressed = true;
            }
            if(data.games.vote > data.games.length) data.games.start = true;
            if(data.games.start) window.location = './game.html';
    });
});