var api_token ="AIzaSyCEY6YMFUn3rzCTPO_ZA1gX40WQaO6FkPE";

var index_data;

fetch('../data/index.json')
    .then(response => response.json())
    .then(data => {
      index_data = data;
      console.log(index_data);
    });

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
        index_data[123].players.push(name);
        window.alert("token: " + create_token());
        window.location.href = './waiting.html';
        document.getElementById('players').innerHTML += name + ' ';
    } else {
      window.alert("check that everything is full");
    }
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