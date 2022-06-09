var index = 0, game_index = 0;

voting.addEventListener('click', () => {
    fetch('http://10.78.131.31:9999/data_changes')
        .then(result => result.json())
        .then(data => {
            console.log(data);
            window.location = './game.html';
            if(!data.games[game_index].pressed[index]){
                data.games[game_index].vote++;
                data.games[game_index].pressed[index] = true;
            }
            if(data.games.vote > data.games.length) data.games.start = true;
            if(data.games.start) window.location = './game.html';
    });
});