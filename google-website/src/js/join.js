joining.addEventListener('click', () => {
    var name = document.getElementById('userjoin').value;
    var token = document.getElementById('token').value;

    fetch('http://192.168.1.32:9999/')
      .then(result => result.json())
      .then(data => {
        if(name != "" && token != ""){
          if(!data.games[parseInt(token)].players.includes(name)){
            data.games[parseInt(token)].players.push(name);
          } else {
            window.alert("this name is taken");
          }
        } else {
          window.alert("check that everything is full");
        }
      });
  });
  