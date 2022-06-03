var votes = 0, is_pressed = false, token_game = 0;

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
  fetch('http://192.168.1.32:9999/')
    .then(result => result.json())
    .then(data => {
      window.location.href = "./game.html";
      if(name != "" && size != ""){
        data.games.push({players:[], votes: 0, start:false});
      } else {
        window.alert("check that everything is full");
      }
    });
});
