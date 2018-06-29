var express = require('express');

function router() {
    var timeRouter = express.Router();
    timeRouter.route('/timestamp/:timestamp').get(function(req, res){
    var temp = req.params.timestamp;
    var date_array = temp.split('-');
    if (date_array.length == 1) {
        var date = new Date(parseInt(date_array[0],10));
        if(date.getTime() && date.toUTCString())
        res.json({    
                  "unix": date.getTime(), "utc" : date.toUTCString()
        }); else res.json({    
                  "error": "Invalid Date"
        });
    } else if(date_array.length == 3) {
        var date = new Date(parseInt(date_array[0],10),parseInt(date_array[1],10),parseInt(date_array[2],10));
        if(date.getTime() && date.toUTCString())
        res.json({    
                  "unix": date.getTime(), "utc" : date.toUTCString()
        }); else res.json({    
                  "error": "Invalid Date"
        });
    }
    });
    return timeRouter;
}

module.exports = router;