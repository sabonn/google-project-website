import data from './index'

joining.addEventListener('click', () => {
    var name = document.getElementById('userjoin').value;
    var token = document.getElementById('token').value;
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
  