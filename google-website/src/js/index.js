var votes = 0, is_pressed = false, token_game = 0;

var data = {
  games:[]
}

const create_token = () => {
    var temp = "";
    for(var i = 0; i < 18;i++){
        temp += (Math.round(Math.random()*9) + 1).toString();
    }
    return temp;
}

create.addEventListener('click', () => {
  var name = document.getElementById('username').value;
  var size = document.getElementById('field').value;
  window.location.href = "./game.html";
  if(name != "" && size != ""){
    data.games.push({players:[], votes: 0, start:false});
  } else {
    window.alert("check that everything is full");
  }
});
