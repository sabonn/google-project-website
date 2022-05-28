var api_token ="AIzaSyCEY6YMFUn3rzCTPO_ZA1gX40WQaO6FkPE";
var votes = 0, is_pressed = false, token_game = 0;

const create_token = () => {
    var temp = "";
    for(var i = 0; i < 18;i++){
        temp += (Math.round(Math.random()*9) + 1).toString();
    }
    return temp;
}

const create_game = () => {
    var name = document.getElementById('username').value;
    var size = document.getElementById('field').value;
    if(name != "" && size != ""){
      fetch('../data/index.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          data.games.push({game:{players:[], votes:0, start:false}});
          data.games[data.games.length-1].players.push(name.toString());
          window.alert("token: " + data.games.length.toString());
        });
    } else {
      window.alert("check that everything is full");
    }
}

const check_start = () => {
  fetch('../data/index.json')
    .then(result => result.json())
    .then(data => {
      if(data[123].start){
        window.location.href = './game.html';
      }
    });
}

const vote = () => {
  if(!is_pressed){
    votes++;
    is_pressed = true;
  } else {
    window.alert("you have all ready voted");
  }

  fetch('../data/index.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById('votes').innerHTML = "votes: " + votes.toString();
      data[token].vote = votes;
      if(data[token].vote > data[token].players.length){
        data[token].start = true;
      }
    });
}

const join = () => {
    var name = document.getElementById('userjoin').value;
    var token = document.getElementById('token').value;
    fetch('../data/index.json')
      .then(responce => responce.json())
      .then(data => {
        if (token == ""){
          window.alert("please enter a token");
        } else if(token <= data.games.length && !data[parseInt(token)].players.includes(name.toString())){
          token_game = parseInt(token);
          data[token_game].players.push(name.toString());
          window.location.href = './waiting.html';
        } else {
          window.alert("check that everything is valid");
        }
    });
}

/*nfc functions
const nfc = async () => {
    log("User clicked scan button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      log("> Scan started");

      ndef.addEventListener("readingerror", () => {
        log("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        log(`> Serial Number: ${serialNumber}`);
        log(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      log("Argh! " + error);
  }
}
if(window.location == './waiting.html'){
  check_start();
}

const write = async () => {
    log("User clicked write button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.write("Hello world!");
      log("> Message written");
    } catch (error) {
      log("Argh! " + error);
    }
});
  
cosnt read_only = async () => {
    log("User clicked make read-only button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.makeReadOnly();
      log("> NFC tag has been made permanently read-only");
    } catch (error) {
      log("Argh! " + error);
    }
});*/