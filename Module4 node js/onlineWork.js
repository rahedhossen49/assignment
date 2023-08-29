/*
var http = require('http')

var server = http.createServer(function(req,res){


    res.end("Hello World");
})


server.listen(5050);
console.log("Server Running");


*/


/*
var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url== "/Home") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if (req.url== "/about") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else if (req.url== "/contact") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    } 
});

server.listen(5050);
console.log("Server Running");
*/



/*
var http=require('http');
var URL=require('url');


var server=http.createServer(function (req,res) {

  var myURL="http://rabbil.com/blog.html?year=2020&month=july";

  var  myURLObj= URL.parse(myURL,true);

  var myHostName=myURLObj.host;
  var myPathName=myURLObj.pathname;
 var mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(myHostName);
    res.end();


});

server.listen(5000);
console.log("Server Run Success");


*/
