var votes = 0, is_pressed = false, token_game = 0, username = "";

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
  fetch('http://10.78.131.31:9999/data_changes')
    .then(result => result.json())
    .then(data => {
      console.log(data);
      if(name != "" && size != ""){
        username = name.toString();
        localStorage.setItem("username", username);
        window.location.href = "./waiting.html";
        data.games.push({players:[], votes: 0, start:false});
      } else {
        window.alert("check that everything is full");
      }
    });
});

const get_username = () => {
  return localStorage.getItem("username");
}