const express = require('express');
const app = express();


app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html');
  console.log(__dirname);
});


app.listen(3069);
console.log("listening on port 3069")
