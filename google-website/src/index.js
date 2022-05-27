var api_token ="AIzaSyCEY6YMFUn3rzCTPO_ZA1gX40WQaO6FkPE";
var votes = 0, is_pressed = false;

const create_token = () => {
    var temp = 0;
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
          data[123].players[0] = name.toString();
          document.getElementById('players').innerHTML = data[123].players;
        });

        window.alert("token: " + create_token());
        window.location.href = './waiting.html';
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
      data[123].vote = votes;
      if(data[123].vote > data[123].players.length){
        data[123].start = true;
      }
    });
}

const join = () => {
    var name = document.getElementById('userjoin').value;
    var token = document.getElementById('token').value;
    
    if (token == ""){
        window.alert("please enter a token");
    } else if(token == data.token && !players.includes(name)){
        players.push(name);
        window.location.href = './waiting.html';
        document.getElementById('players').innerHTML += name + ' ';
    } else {
        window.alert("check that everything is valid");
    }
}

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

check_start();

/*
scanButton.addEventListener("click", async () => {
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
  });

writeButton.addEventListener("click", async () => {
    log("User clicked write button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.write("Hello world!");
      log("> Message written");
    } catch (error) {
      log("Argh! " + error);
    }
});
  
makeReadOnlyButton.addEventListener("click", async () => {
    log("User clicked make read-only button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.makeReadOnly();
      log("> NFC tag has been made permanently read-only");
    } catch (error) {
      log("Argh! " + error);
    }
});*/