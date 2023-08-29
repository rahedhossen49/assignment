//২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

/*
var i = 58;

for(i=58;i<99;i++){


console.log(i);
    
}

*/





/*

//৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

var i = 412;

while(i<457){

    if(i % 2 == 0){

        console.log(i);
    }

    i++;

}

*/



//৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

/*

var i = 581;

while(i<623){

    if(i % 2 != 0){

        console.log(i);
    }

    i++;
}

*/

//৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array 
//এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

/*
var array = ["foorLoop","while Loop","Do while loop","array"];

for(i=0;i<array.length;i++){

    console.log(array[i]);
}
*/


//৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা
// while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

/*

var array = ["iPhone","Sumsung ultra pro","Huwai","Nokia","Infinis"];

i=0;
while(i<array.length){

console.log(array[i]);
i++;
}

*/



//৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

/*
for(i=30;i<=86;i++){

    if(i==44){
        break;
    }

    console.log(i);
}

*/
// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট
// হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 






//১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 



// function multification(){


//     var mul = 13;

//     for(i=1;i<=10;i++){

//        var result =  mul * i;

//        console.log(mul + " x " + i + " = " + result);
//     }

// } 

//multification()







//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার 
//কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।



// function regular (){

//     var name = "RAHED HOSSEN";

//     var result = name.toLowerCase();

//     console.log(result);

// }

// regular()


/*
function convert(name) {
    if (name === name.toUpperCase()) {
        return name.toLowerCase();
    } else {
        return name.toUpperCase();
    }
}

var name = "Rahed Hossen";

console.log(convert(name));
*/



//(3) fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto 
//ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 



/*

function fullname(na,nam){

    
   var na = "Rahed";
   var nam = "Hossen";

   var result = na + nam;

    return result
}

console.log(fullname());


*/


//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে
// সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// let square = (number)=> Math.sqrt(number);
// console.log(square(9));



//১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year 
//হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
/*
function leapyear(){


     var year = 2016;
    if(year % 400 == 0, year % 100==0, year % 4==0 ){

        console.log('True')
    }

    else{

        console.log("false")
    }
}


leapyear()

*/



//২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, 
//সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
/*

function evenOdd(number){

    return number%2==0;

}

   var number = 21;
   var result = evenOdd(number)

   if(result){

    console.log('true');
   }

   else{
    console.log("false");
   }

   */




   //২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
/*
   for(i=1;i<=100;i++){

    console.log(i);
   }

   */


   //৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

/*
   i = 50;
   for(i=50;i<80;i++){

    if(i % 2!==0){

        console.log(i);
    }
      
   }

*/

//৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

/*
function sumnumber (){

    var a = 10;
    var b = 20;
    var c = 30;

    var result = a+b+c;

    console.log(result);
}

sumnumber()

*/


//১২. (এডভান্সড) একটু কোড লিখে অবজেক্ট এর
// সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 

/*
var object = {
    Name: "Rahed Hossen",
    Age: 21,
    Dp: "6th",
    Tec: "Computer",
}

for (let x in object) {
    console.log(x + ": " + object[x]);
}
*/


//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে।
// তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 


/*
function cel(celcius){


    var fahrenheight = (celcius * 9/5) + 32;

    return fahrenheight;
}

 var celcius = 10;

 var result = cel(celcius)

console.log(result);

*/


//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে 
//তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

/*
function fah (fahrenheight){


    
    var celcius = (fahrenheight * 9/5) + 32;

    return celcius

}


var fahrenheight = 10;

var result = fah(fahrenheight)

console.log(result);
*/


//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। 
//তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

/*
function resultManegment(){
     var Marks = "12";
    if(Marks>=80 && Marks<=100){
        console.log("A+");
    }
    else if(Marks<=80 && Marks > 70){
        console.log("A");
    }
    else if(Marks<=70 && Marks > 60){
        console.log("A-");
    }
    else if(Marks<=60 && Marks > 50){
      console.log("B");
    }
    else if(Marks<=50 && Marks > 40){
        console.log("C");
    }
    else if(Marks<=40 && Marks > 33){
        console.log("D");
    }
    else if(Marks<=32 && Marks > 0){
        console.log("F");
    }
    else{
        console.log("Wrong Type ! Please Try Again");
    }
}

resultManegment()

*/


//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

/*
var a = 70;
var b = 99;
var c = 90;

if(a<b && a<c){

    console.log("A is Small");
}

else if(b<a && b<c){

    console.log("B is Small")
}

else if (c<a && c<b){

    console.log("C is Small");
}

else{

    console.log("Wrong type ! Please Try Again");
}

*/




//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে
// একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর 
//area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

/*

function areacalculate(Ground,Height){

   var area =  1/2 * Ground*Height;

   return area
}

var Ground = 10;
var Height = 15;

var result = areacalculate(Ground,Height);

console.log(result);

*/


//২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।


/*
function primeNumber(){



    var number = 31;

    if(number%2!==0){

        console.log("prime Number");
    }

    else{
        console.log("Not Prime Number");
    }
}


primeNumber()

*/



//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় 
//সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
/*
var i = 7;
while (i <= 19) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

*/

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
// সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। 
// array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে।
//  তুমি কি সেটা করতে পারবে। 

/*
var array = [10,20,30,40,50,60];

var arraylength = array.length;
console.log("arraylentgh :",+arraylength);

array[3]=80;

console.log("addaray: " ,array);

array.push(70);

console.log("pusharray : ", array);

array.pop();

console.log("poparray:",array);

*/


//৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর 
//সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই 
//স্টাইলে একটা কোড লিখে ফেলো। 

//var array = ["Sazzad","Fayez","Rahed","Shi Hab","Rifat","Monira"];

//for(var item of array){

//    console.log(item);
//}

//for(array=array;array<=array;array++){

   // console.log(array);
//}




//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা
// থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি 
//সেই কোড করে ফেলো 

/*

var array = [10,20,30,40,50,60,70,80,90,100,110,120];

for( i=0; i< array.length;i++){

   if (array[i] > 80){
   
   console.log(array[i]);

   }
}

*/

//১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। 
//তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

/*
function threenumber(a,b,c){

   return a*b*c;
}
var a = 10;
var b = 20;
var c = 30;

var result = threenumber(a,b,c)
console.log(result);

*/


//১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

/*
var object = {

    Name:"Rahed Hossen",
    age : 21,
    Tc  : "Computer",
}

object.age=22;


console.log(object);

*/


/*
function centimeterToMeter (c){

    return c/100
}

var c = 10;

var result = centimeterToMeter(c);

console.log(result.toFixed(3));

*/


//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে
// ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের 
// নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম 
 //রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

 /*

function bestFriend (friend){

 let best = friend[0];

 for(i=1;i<friend.length;i++){

    if(friend[i].length>best.length){

        best=friend[i]
    }
 }

 return best
    
}

var friendlist = ["Sazzad Hossain Emon","Saiful Fayez","Rahed Hossen","Shi Hab","Rifat"];

var result = bestFriend(friendlist);

console.log(result);

*/

