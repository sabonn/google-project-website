joining.addEventListener('click', () => {
    var name = document.getElementById('userjoin').value;
    var token = document.getElementById('token').value;

    fetch('http://10.78.131.31:9999/data_changes')
      .then(result => result.json())
      .then(data => {
        console.log(data);
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
  