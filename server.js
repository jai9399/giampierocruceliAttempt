const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve('./')));
app.get('/',function(){
    res.sendFile('./index.html');
})
app.listen(port,()=>{
   console.log('Server Started!');
});