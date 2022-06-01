var angle = 90;
document.getElementById('arrow').style.transform = 'rotate(' + angle.toString() +'deg)';

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