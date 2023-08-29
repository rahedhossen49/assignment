//2 ------------Your First Express Application

/*
var express = require('express');

app=express();

app.get('/',function (req,res){


    res.send("Hello Javascript ");
})


app.listen('8080',function (){

    console.log("Sever running succes");
})
*/






//--------------Express js routing


/*

var express = require('express');

app=express();

app.get('/',function (req,res){



    res.send("This is Home Page");
})


app.post('/about',function (req,res){


    res.send("This is about page");
})


app.put('/contact',function(get,res){


    res.end("This is contact page");
})


app.delete('/Dashboard',function(get,res){


    res.end("This is Dashboard page");
})


app.listen(8585,function (){

    console.log("Server is Running");
})
*/






// ------------Simple String Response


/*

var exprees = require('express');


app=exprees();

app.get('/',function (req,res){


    res.send("Simple String Response");

})

app.listen(8585,function (){

    console.log("Server Running Succes");
})


*/






//-----------Response Status Code

/*

var express = require('express');


app=express();


app.get('/',function (req,res){


 res.status(400).send("Response Status Code");
})


app.listen(8558,function (){


    console.log("Server Running");
})
*/





//---------------- JSON Response

/*

var express = require('express');

app=express();

app.get('/', function (req,res){


 let myjasonArray=[


     {
     Name:"Rahed Hossen",
     Country : "Bangladesh",
     Occupation : "Student",
    },


     {
         Name:"Rakib Hossen",
         City: "Chittagong",
         Occupation: "Engineer",
     },


     {
         Name:"Mehidy Hasan Miraz",
         City: "Rajshai",
         Occupation: "Criketer",
     },

 ]
    res.json(myjasonArray)

})

app.listen(8788,function(){

    console.log("Server Running");


});

*/




//------------------Response Download


/*
var express = require('express');

app=express();



app.get('/',function (req,res){


    res.download('./Downlode/img.jpg');

})


app.listen(8778,function (){


    console.log("Server Running");
})

*/





//---------Response Redirect

/*
var express = require('express');

app = express();

app.get('/Bangladesh', function (req, res) {
    res.redirect("http://localhost:8000/india");
});


app.get('/india', function (req, res) {
    res.send("This is India");
});

app.listen(8000, function () {
    console.log('Server is running ');
});

*/


//--------------Response Header

/*
var express = require('express');


app=express();

app.get('/',function (req,res){


    res.append("Name", "Rahed Hossen");
    res.append("City","Chittagong");
    res.append("Age","21 Years Old");


    res.status(200).end("Hello World")
})

app.listen(8080,function (){

    console.log("Server Running");
})

 */



//---------------- Response Set Cookies

/*

var express = require('express');

app=express()

  app.get('/' , function (req,res){


      res.cookie("Name", "Rahed Hossen");
      res.cookie("Year", "21 Years Old");
      res.cookie("City","Chittagong");
      res.end("Cookie Set Success");

  })

app.listen(8080,function (){

    console.log("Server Run Success");
})

*/





//------------- Response Clear Cookies

/*

var exprees = require('express');


app=exprees()



app.get('/Add',function (req,res){


    res.cookie("Name", "Rahed Hossen");
    res.cookie("City", "Chittagong");
    res.cookie("Country", "Bangladesh");
    res.cookie("Age", "21 Years Old ");
    res.end("Cookie Add Succes");

})


app.get('/Clear', function (req,res){

    res.clearCookie("Name");
    res.clearCookie("Country");
    res.end("Cookie Clear Success")
})

app.listen(8900,function (){

    console.log("Server Running ")
})


 */


//---------------Get Request With URL Query


var express = require('express')

app = express();


app.get('/',function (req,res){



    var firstName =  req.query.firstName;
    var  lastName = req.query.lastName;

    res.end(firstName + " " + lastName)

})


app.listen(8000,function (){

    console.log("Server Running");
})