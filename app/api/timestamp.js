'use strict';

var moment = require('moment');

module.exports = function(app){ //lets us use this function outside the file

    app.get('/:query', function(req, res){ //:query is whatever is after the URL, aka the date
        var date = req.params.query; //this is what was put after the URL
        var unixDate = null;
        var natDate = null;
        //check if unix
        if (+date >= 0){
            unixDate = +date;
            natDate = unixToNat(date);
        }
        //check if natural
        if(isNaN(date) && moment(date, "MMMM D, YYYY").isValid()){
            unixDate = natToUnix(date);
            natDate = unixToNat(unixDate);
        }
        
        //create JSON object
        var dateObj = {"unix": unixDate, "natural": natDate};
        res.send(JSON.stringify(dateObj));
    });
    
        //convert unix to natural
        var unixToNat = function(date){
            return moment.unix(date).format("MMMM D, YYYY");
        }
        //convert natural to unix
        var natToUnix = function(date){
            return moment(date, "MMMM D, YYYY").format("X");
        }
};