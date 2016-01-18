'use strict';

module.exports = function(app){
    //when you go to the '/' directory, it sends you to index.html
    app.route('/').get(function(req, res){ 
        //process.cwd() is the Current Working Directory
        //sendFile sends client the file in parentheses
        res.sendFile(process.cwd() + '/public/index.html'); 
    });
};