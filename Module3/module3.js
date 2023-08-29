
/*
var obj = {price:"32usd",computer:"monitor"};
var jbo = {
    computer:{
        monito:"348usd",
        mouse:"100usd",
    }
}
console.log(obj);
console.log(obj['price']);
console.log(jbo['computer']['mouse']);
console.log(jbo);
*/


/*
var obj = {price:"32usd",computer:"monitor"};

for(let pros in obj){

    console.log(pros+ " = " +obj[pros]);
}
*/


/*

var obj = {price:"32usd",computer:"monitor"};


if(obj['price']=="32usd"){

    console.log("Price is right")
}

else{

    console.log("not match price");
}

*/

//res perametter

/*

function something(...x){
    

    console.log(x);
}

something(1,2,3,5,6,"a","b","c","D","e")
*/



//function returns

/*
function first(){

    return 10
}


function two(){

   // return 20
   return first
}


console.log(first());

*/


// anonymous functions

/*

var Fun = function(){

    return "Rahed Hossen";

}


//console.log(Fun("Rahed Hossen"));
//console.log(Fun(1,2,3,4,5));


var Fun = function(){

    return "Rahed Hossen Rakib";
}
 
console.log(Fun());

*/


//arrow function

/*

var myfun = ()=>{


    return "Hello World";
}

console.log(myfun());
*/



//Simple Arrays


/*
var myarr = ['A','B','C','D'];


var arr = new Array(1,2,3,4,5,6,);


for(let item of myarr){

    console.log(item);
}

*/

//Multidimensional Arrays 

/*
var Bangladesh = ["Chittagong","Rangpur","Cumilla"];

var India = ["Kolkata","Bharat","Mumbai"];

var   Country = ["Bangladesh","Korean","NewZeeland"];


var Result = [Bangladesh,India,Country];


//console.log(Result[0][0]);
console.log(Result);
*/



//Array de structuring

/*

var Country = ['Bangladesh','NewZeeland','Korea'];

var [,,b] = Country;

console.log(b);

*/


// es6 map

/*

var myMap = new Map();

myMap.set("key1","Bangladesh");
myMap.set("key2", "Japan");
myMap.set("key3","NewZeeland");
myMap.set("key4","Korea");


//console.log(myMap.keys());

console.log(myMap.values());

*/



// es6 map for of loop


/*
var mymap = new Map();

mymap.set('key1','Bangladesh');
mymap.set('key2','Korea');
mymap.set('key3','Japan');
mymap.set('key4','NewZeeland');


//for(var myitem of mymap.values())
{

//console.log(myitem);


for(var mykey of mymap.keys())

    console.log(mykey);

}

*/

//eac6 

/*
var mymaps = new Map();

mymaps.set('key1','Bangladesh');
mymaps.set('key2','Korea');
mymaps.set('key3','Japan');
mymaps.set('key4','NewZeeland');
mymaps.set("key5","Nepal");


//mymaps.delete('key1');
//mymaps.delete('key2');

//mymaps.clear();

//for(var myitems of mymaps.values()){

//console.log(myitems);
//}

//console.log(mymaps.get ("key5"));


if(mymaps.has('key1')){

    console.log("Yes");
}

else(

    console.log("No")
)

*/


//Set

/*
var myset = new Set();

myset.add("Bangladesh");
myset.add("Korea");
myset.add("NewZeeland");
myset.add("Japan");
myset.add("Nepal");

console.log(myset)

*/



//Set

/*
var myset = new Set();

myset.add('Bangladesh');
myset.add('Korea');
myset.add('Japan');
myset.add('NewZeeland');
myset.add("Nepal");


//myset.delete('Bangladesh');
//myset.clear()
//myset.values()
//console.log(myset.size)


if(myset.has("Nepal")){

    console.log("Yes");
}

else{

    console.log("No");
}
*/


// es6 create class and use

/*

class myclass {

    Fun1() {

        console.log("Hi");
    }

    Fun2() {

        console.log("I am ");
    }

    Fun3() {

        console.log("Rahed Hossen");
    }
    
    Fun4(name){

        console.log(name)
    }
}


var obj = new myclass;

obj.Fun1();
obj.Fun2();
obj.Fun3();

obj.Fun4('Hello World');

*/


//class constructor

/*
class myclass{

constructor(a,b){

    this.firstnumber = a;
    this.secondnummber = b;

}

add(){


    let Result = this.firstnumber + this.secondnummber;
    console.log(Result);

}

}

var obj = new myclass(10,20)

obj.add()

*/

/*
class myclass{

    constructor(a,b){
    
        this.firstnumber = a;
        this.secondnummber = b;
    
        let Result = this.firstnumber + this.secondnummber;
        console.log(Result);
    
    }
    
    }
    var obj = new myclass(10,20)
    
    */

//static keyword

/*
class myclass{


 Hello(){
    console.log("Hello World")
   }
}

var obj = new myclass()
obj.Hello()
    
*/

//static

/*
class myclass{


   static Hello(){
       console.log("Hello World")
      }
   }
   
    myclass.Hello()
   
*/


//class inheritance

/*
class parent {
    Hello1(params) {
        console.log("Hello World");
    }
    Hello2(params){

        console.log("Hello Everywone");
    }
}
class child extends parent{
}
var obj = new child();

obj.Hello1();

obj.Hello2();

*/

//super keyword

/*
class parent{

   hello(){
    console.log("Hello world");
   }
}

class child extends parent{

    demo(){ 
        super.hello() 
        super.hello() 
    }
}

var obj = new child()

obj.demo()

*/

var a = 10;
var b = 20; 
var c = 30;

var result = a,b,c;

if(a>b && a>c && b>a && b>c && c>a && c>b){

    console.log(result);
}
