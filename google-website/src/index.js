var votes = 0, is_pressed = false, token_game = 0;
//var angle = -45;

var data = {
  games:[]
}

//suppose to rotate the arrow
//document.getElementById("arrow").style.transform = 'rotate(' + angle.toString() + 'deg)';
//angle --;

const create_token = () => {
    var temp = "";
    for(var i = 0; i < 18;i++){
        temp += (Math.round(Math.random()*9) + 1).toString();
    }
    return temp;
}

const get_location = () => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    window.alert("geolocation is not supported in this browser");
  }
}

const showPosition = (position) => {
  alert("Laltitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
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