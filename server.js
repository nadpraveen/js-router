const express = require('express');
const app = express();
var morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('*', function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});

app.listen(7000, function(){
	console.log('Server runing on port 7000');
});