/*

//------------file read Asyncronus


var fs = require('fs')
var http = require('http');

var server = http.createServer(function(req,res){

    if(req.url==="/"){

 
        fs.readFile("Home.html",function(error,data){


            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }

})

server.listen(4000);
console.log("server running");

*/







/*

//----------------file read syncronus

var fs = require('fs')
var http = require('http')


var server = http.createServer(function(req,res){



    if(req.url=="/"){



        var datafile = fs.readFileSync("Home.html");
        
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(datafile);
        res.end();
    }

})


server.listen(5020);
console.log("server running ");


 */







/*
//------------------write file asyncronus

var fs = require('fs');
var http = require('http');


var server = http.createServer(function (req,res){



    if(req.url=="/"){


        fs.writeFile("demo.text","welcome to node js",function (error){


            if(error){

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("File write fail")
                res.end();
            }

           else{

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("file write")
                res.end();
            }
        })
    }

})
server.listen(5040)
    console.log("server running ");



*/








/*
//----------------------write file syncronus


var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req,res){



    if(req.url=="/"){




        var error = fs.writeFileSync("demo.txt","welcome to syncronus")



            if(error){

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("file  fail");
                res.end();
            }

            else{

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("file success");
                res.end();
            }



    }

})

server.listen(4300);
console.log("server succes");

*/






//------------------- fs File Rename async

/*
var fs = require('fs');
var http = require('http');


var server = http.createServer(function (req,res){


    if(req.url=="/"){


        fs.rename("demonsts.txt","demoNews.txt",function (error){


            if(error){

                res.writeHead(200,{"Content-Type":"text/html"});
                res.write('file rename fail');
                res.end();
            }


            else{

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("file rename succes");
                res.end();
            }
        })
    }


})
    server.listen(4560);
    console.log("server succes");

*/






//------------------fs file rename sync

/*
var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req,res){


    if(req.url=="/"){

        var error = fs.renameSync("demo.txt","demon.txt")

        if(error){

            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("file rename fail")
            res.end();

        }

        else{


            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("file rename succes")
            res.end()
        }
    }

})

server.listen(4350);
console.log("server succes");

*/



// var fs = require('fs');
// var http = require('http');

// var server = http.createServer(function (req, res) {
//     if (req.url == "/") {
//         try {
//             fs.promises.rename("demoNews.txt", "demonststy.txt")
//                 .then(() => {
//                     res.writeHead(200, { "Content-Type": "text/html" });
//                     res.write("file rename success");
//                     res.end();
//                 })
//                 .catch((error) => {
//                     res.writeHead(200, { "Content-Type": "text/html" });
//                     res.write("file rename fail");
//                     res.end();
//                 });
//         } catch (error) {
//             res.writeHead(500, { "Content-Type": "text/html" });
//             res.write("Server error");
//             res.end();
//         }
//     }
// });

// server.listen(4555);
// console.log("server success");








/*
//--------------fs File Delete Async


var fs = require('fs')
var http = require('http')


var server = http.createServer(function (req,res){



    if(req.url=="/"){



        fs.unlink("demon.txt",function (error){

            if(error){

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("file delete fail")
                res.end();
            }

            else{

                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("file delete succes")
                res.end()
            }
        })
    }
})


server.listen(4321)
console.log('server success');

*/




//-----------------fs file delete sync

/*
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req,res){


    if(req.url=="/"){


       var error = fs.unlinkSync("demonstst.txt")

        if(error){

            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("file delete fail")
            res.end()

        }

        else{

            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("file delete succes")
            res.end()
        }

    }

})

server.listen(4444)
console.log("server succes");

*/



var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){

    if(req.url=="/"){

        try{

            fs.promises.unlink("fl.js")

                .then(()=>{

                    res.writeHead(200,{"Content-Type": "text/html"})
                    res.write("file delete succes")
                    res.end()
                })

                .catch((error)=>{

                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("file delete fail")
                    res.end
                })

        }catch(error){

            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("server error")
        }
    }

})

server.listen(8768);
console.log("server running");



































/*
//-------------------fs File Exists aSync


var fs = require('fs')
var http = require('http')


var server = http.createServer(function (req,res){


    if(req.url=="/"){


        fs.exists("demo.txt",function (error){

            if(error){

                res.end("true")
            }

            else{

                res.end("false")
            }
        })

    }

})
    server.listen(4545);
    console.log("server running");


*/









/*
//------------------fs file exists sync

var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req,res){



    if(req.url=="/"){



        var error = fs.existsSync("demo.txt")

        if(error){

            res.end("true");
        }

        else{

            res.end("false");
        }


    }
})


server.listen(4567);
console.log("server running");

*/


