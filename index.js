const express = require('express');
const path = require('path');
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public'))) ;
app.get('/', function(req,res){
    res.send("Welcome");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});