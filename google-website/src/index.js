var api_token ="AIzaSyCEY6YMFUn3rzCTPO_ZA1gX40WQaO6FkPE";
var votes = 0, is_pressed = false, token_game = 0;

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

joining.addEventListener('click', () => {
  var name = document.getElementById('username').value;
  var size = document.getElementById('field').value;
  if(name != "" && size != ""){
    fetch('../data/index.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.games.push({game:{players:[name.toString()], votes:0, start:false}});
        window.alert("token: " + data.games.length.toString());
      });
  } else {
    window.alert("check that everything is full");
  }
});

create.addEventListener('click', () => {
    var name = document.getElementById('username').value;
    var size = document.getElementById('field').value;
    if(name != "" && size != ""){
      fetch('../data/index.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          data.games.push({game:{players:[name.toString()], votes:0, start:false}});
          window.alert("token: " + data.games.length.toString());
        });
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