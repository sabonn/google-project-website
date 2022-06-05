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
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(result => result.json())
    .then(data => {
      console.log(data);
      window.location.href = "./waiting.html";
      if(name != "" && size != ""){
        data.games.push({players:[], votes: 0, start:false});
      } else {
        window.alert("check that everything is full");
      }
    });
});
