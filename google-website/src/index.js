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

  const get_data = () => {
    $.ajax({
        url:"http://127.0.0.1:9999",
        type:"GET",
        dataType:"json",
        success: (data) => {
            console.log(data);
        }
    });
}

const push_data = (data) => {

    if(data != ""){
    const dict_values = {data};
    const s = JSON.stringify(dict_values);
    console.log(s);

    $.ajax({
        url:"http://127.0.0.1:9999",
        type:"POST",
        data: JSON.stringify(s)});

    window.location.href = './waiting.html';
    } else {
      window.alert("enter value");
    }
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