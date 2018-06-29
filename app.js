var express = require('express');
var app = express();

var timeRouter = require('./routes/timeRouter')();
var parserRouter = require('./routes/parserRouter')();
           
app.use('/api', timeRouter);
app.use('/whoami', parserRouter);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Server is running on port: "+ port);
});





