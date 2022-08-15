const url = 'http://192.168.1.35:9999';

localStorage.setItem("url", url);

const get_location = () => {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(position.coords.latitude + ", " + position.coords.longitude);
      temp_x = position.coords.latitude;
      temp_y = position.coords.longitude;

      const result = await fetch(url);
      const data = await result.json();

      var json_data = JSON.parse(data);

      json_data.location_x[localStorage.getItem("index")] = temp_x;
      json_data.location_y[localStorage.getItem("index")] = temp_y;

      const push_json = JSON.stringify(json_data);

      $.ajax({
        url:url,
        type:'POST',
        data: JSON.stringify(push_json)
      });

      localStorage.setItem('x', temp_x);
      localStorage.setItem('y', temp_y);

    });
  } else {
    window.alert("geolocation is not supported in this browser");
  }
}

const start_game = async () => {
  const index = localStorage.getItem("index");
  
  if(index != 0) {

    const result = await fetch(url);
    var data = await result.json();
    var data_json = JSON.parse(data);

    data_json.start = true;
    const push_json = JSON.stringify(data_json);

    $.ajax({
      url:url,
      type:'POST',
      data: JSON.stringify(push_json)
    });
  }
}

const join = async (name) => {

  const result = await fetch(url);
  var data = await result.json();

  var data_json = await JSON.parse(data);
  console.log(data_json + '\n' + data_json.players);

  data_json.players.push(name);
  data_json.location_x.push(0);
  data_json.location_y.push(0);

  const push_json = JSON.stringify(data_json);
  console.log(data_json);

  $.ajax({
    url:url,
    type:'POST',
    data:JSON.stringify(push_json)
  });

  localStorage.setItem("index", 1);
  console.log(localStorage.getItem("index"));

  window.location.href = './waiting.html';
}

const create = (name) => {

    const data = {
      players:[name],
      location_x:[0],
      location_y:[0],
      nfc:false,
      start:false,
      catch: false
    };
    
    const push_json = JSON.stringify(data);
    console.log(push_json);

    $.ajax({
      url:url,
      type:"POST",
      data: JSON.stringify(push_json)
    });

    localStorage.setItem("index", 0);
    console.log(localStorage.getItem("index"));

    window.location.href = './waiting.html';
}

const nfc = async () => {
    console.log("User clicked scan button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log("> Scan started");

      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      ndef.addEventListener("reading", async ({ message, serialNumber }) => {
        console.log(`> Serial Number: ${serialNumber}`);
        consoel.log(`> Records: (${message.records.length})`);

        const result = await fetch(url);
        var data = await result.json();

        var data_json = JSON.parse(data);
        data_json.catch = true;

        $.ajax({
          url:url,
          type:'POST',
          data: JSON.stringify(data_json)
        });
      });
    } catch (error) {
      console.log("Argh! " + error);
  }
}