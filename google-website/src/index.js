const get_location = () => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    window.alert("geolocation is not supported in this browser");
  }
}
  
const showPosition = (position) => {
  console.log("Laltitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
}

const get_data = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await result.json();
    
    console.log(data);
    return data;
}

const push_data = (name) => {

    const data = {
      players:[].push(name),
      location_x:[0],
      location_y:[0],
      nfc:false,
      start:false
    };
    const push_json = JSON.stringify(data);

    $.ajax({
      url:"http://192.168.5.157:9999/",
      type:"POST",
      data: JSON.stringify(push_json)
    });
    window.location.href = './waiting.html';
}

//nfc functions
const nfc = async () => {
    console.log("User clicked scan button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log("> Scan started");

      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        console.log(`> Serial Number: ${serialNumber}`);
        consoel.log(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      console.log("Argh! " + error);
  }
}
if(window.location == './waiting.html'){
  check_start();
}

/*
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