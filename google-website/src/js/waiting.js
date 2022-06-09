import fetch from "node-fetch";

fetch("./voting.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));