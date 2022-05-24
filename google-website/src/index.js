var players = [];
var tokens = "";

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
        players.push(name.toString());
        tokens += create_token();
        window.alert("token: " + tokens);
        window.location.href = './waiting.html';
        document.getElementById('players').innerHTML += name.toString() + ' ';
    } else {
        window.alert("check that everything is full");
    }
}

const join = () => {
    var name = document.getElementById('userjoin').value;
    var token = document.getElementById('token').value;
    
    if (token == ""){
        window.alert("please enter a token");
    } else if(token == tokens && !players.includes(name)){
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