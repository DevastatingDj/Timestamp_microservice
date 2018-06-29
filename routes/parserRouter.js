var express = require('express');

function router() {
    var parserRouter = express.Router();
    parserRouter.route('/')
    .get(function(req, res){
    res.json({"ipaddress": req.connection.remoteAddress, "language": req.headers['accept-language'],
              "software":req.headers['user-agent']});    
    });
    return parserRouter;
}

module.exports = router;