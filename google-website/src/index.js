const get_location = () => {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude + ", " + position.coords.longitude);
      temp_x = position.coords.latitude;
      temp_y = position.coords.longitude;

      var data = getData();
      var push_data = JSON.stringify(data.location_x[localStorage.getItem("index")] = temp_x);
      push_data = JSON.stringify(data.location_y[localStorage.getItem("index")] = temp_y);
      const push_json = JSON.stringify(push_data);

      $.ajax({
        url:'http://192.168.5.157:9999/',
        type:'POST',
        data: JSON.stringify(push_json)
      });

    });
  } else {
    window.alert("geolocation is not supported in this browser");
  }
}

const start_game = () => {
  const index = localStorage("index");
  
  if(index == 0) {
    const data = getData();

    const push_json = JSON.stringify(data.start = true);

    $.ajax({
      url:'http://192.168.5.157:9999/',
      type:'POST',
      data: JSON.stringify(push_json)
    });
  }
}

const join = async (name) => {

  const result = await fetch('http://192.168.5.157:9999/');
  var data = await result.json();

  console.log(data + '\n' + data.players);

  var push_data = JSON.stringify(data.players[1] = name);

  push_data = JSON.stringify(data.location_x[1] = 0);
  push_data = JSON.stringify(data.location_y[1] = 0);

  const push_json = JSON.stringify(push_data);

  $.ajax({
    url:'http://192.168.5.157:9999/',
    type:'POST',
    data:JSON.stringify(push_json)
  });

  localStorage.setItem("index", 1);
  
  console.log(data);
  console.log(localStorage.getItem("index"));

  window.location.href = './waiting.html';
}

const create = (name) => {

    const data = {
      players:[name, ''],
      location_x:[0, null],
      location_y:[0, null],
      nfc:false,
      start:false
    };
    
    const push_json = JSON.stringify(data);
    console.log(push_json);

    $.ajax({
      url:"http://192.168.5.157:9999/",
      type:"POST",
      data: JSON.stringify(push_json)
    });

    localStorage.setItem("index", 0);
    console.log(localStorage.getItem("index"));
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