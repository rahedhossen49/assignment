//Write a function that will take hour as the input parameter and will
//convert it into minutes and will return the result in minutes

/*
function convert(Hour){

    var input = Hour*60;

    return input
}

var Hour = 2;

var result = convert(Hour);

console.log("Minutes",result);
*/


//Write a function findLeapYear() that will take the array
//[2023,2024,2025,2028,2030] as the input parameter and will check if
//each year is a leap year. If a year is a leap year insert that year in a
//new array, return the new array and print the resul

/*
function findLeapYear(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        var year = array[i];

        if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
            result[result.length] = year;
        }
    }

    return result;
}

var array = [2023, 2024, 2025, 2028, 2030];
var leapYears = findLeapYear(array);
console.log(leapYears);



*/


//Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
//as the input parameter and will return the sum of the odd numbers

/*
function findOddSum(array){
  
    var sum = 0;
    for(i=0;i<array.length;i++){

        if(array[i] % 2!==0){

            sum+=array[i]
        }
}

   return sum;
    
}

var array = [5, 7, 8, 10, 45, 30];

var result = findOddSum(array);
console.log(result)

*/


// দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয়
 //সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। 
 //তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার 
 //মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ,
 // গুন, ভাগ এবং ভাগশেষ বের করো। 


/*
var num1 = 10;
var num2 = 5;

var sum = num1 + num2;
console.log(sum);


var results1 = num1 - num2;
console.log( results1);

var results2 = num1 * num2;
console.log(results2);


var results3 = num1 / num2;
console.log(results3);


var results4 = num1 % num2;
console.log(results4);

*/


//তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। 
//তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন 
//একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি 
//পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো

/*
var a = 10;
var b = 20;



if (a < b || b < a) {
  console.log("or : true")
} else {
  console.log("or :  false.");
}



if (a < b && b < a) {
  console.log("and : true");
} else {
  console.log("and : false");
}

*/

//সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই 
//ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে 
//কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
/*

function feetToinch(feet) {
    var inch = feet * 12; 
    return inch;
  }
  
  
  var feetValue = 5;
  var inchValue = feetToinch(feetValue);
  console.log(inchValue);
  

*/


/*
var fruits = ['Apple', 'Banana', 'Orange'];

fruits[1]= "Mango";

console.log("Banana Remove & add :",fruits);

fruits.pop();

console.log("Remove Item:",fruits);

fruits[2]="Watemelon";

console.log("Add Item : ",fruits);

*/


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


//You are given three numbers 13, 79, and 45. Write a program that will print the 
//largest number using if-else

/*
var a =  13;
var b = 79;
var c = 45;

if(a>b && a>c){

    console.log("Largest A");

}

else if (b>a && b>c){

    console.log("Largest B");
}

else{

    console.log("Largest C");
}

*/

//একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের
//তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে  ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে 
  //সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

  /*
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  
  var A = 5;
  var B = 6;
  var C = 7;
  var triangleArea = calculateTriangleArea(A, B, C);
  console.log( triangleArea);
  
*/





//You are given a triangle with sides 9, 8, 9. Write a program to check whether a
//Triangles are isosceles or do not use if-else.

/*
function triangle(a,b,c){

    const isIsosceles = a===b || b === c|| c === a;

    return isIsosceles
}

var result = triangle(9,8,9);
console.log(result);
*/

/*

  function triangle(a,b,c){
    
    switch(true){

        case(a===b || b===c || c===a):{
            
           return true
        }
        
    }
    return false
  }


    var result = triangle(8,10,10);
    console.log(result);
*/


/*
var Mymoney = 1000;

var OrangeApple = 300;

var result = Mymoney-OrangeApple;

console.log(result);

*/


//Write a program to calculate the average marks of Mathematics, Biology, Chemistry, 
//Physics, and Bangla of a student.


/*

var marks = [75.25, 65, 80, 35.45, 99.50];

var sum = 0;

for(i=0;i<marks.length;i++){

    sum+=marks[i];
}

var average = sum / marks.length;


console.log(average.toFixed(2))


*/



//John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to 
//combine these two strings and print them in one line. Help John write the program.


/*
var string1 = "I am going to be";
var string2 = " an awesome web developer";


var result  = string1+string2;

console.log(result);
*/



//Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the 
//remainder would be if she divided the number by 5. Help Sarah write the program.

/*
var nummber = 119;

var result = nummber%5;

console.log(result);
*/
















//তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 
//এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট 
//দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & 

/*
function  
calledevenOdd(name){

  var result = name.length
    
if(result %2 ==0){

    return 'even'
   }
  else{

    return 'odd'
  }
}

   var evenOdd = "Phero";

   var results = calledevenOdd(evenOdd);

   console.log(results);


   
   var evenOdd2 = "Batch7";

   var results2 = calledevenOdd(evenOdd2);

   console.log(results2);

*/




//Problem 4: Finding Bad data
//তোমাকে একটা function দেওয়া হবে called findingBadData(). 
//এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number
// থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার 
// positive number (greater than or equal to zero) ও হতে পারে। কোনও number
////  যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive
//   হয় সেটাকে আমরা বলব “Good Data”. 
//এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে
// এবং সেই নাম্বার টা return করতে হবে।

//Sample Input & Output: -
//Input: [1,2, 5]
//Output: 0
/*


function findingbaddata(array){

 
    var data = 0;


    for(i=0;i<array.length;i++){

        if(array[i] < 0){

            data++;
        }
    }


  return data;


}


var arrdata = [10,-5,4,-8];

var result = findingbaddata(arrdata);

console.log(result);

*/




//Problem 1: Let’s play a mind game
//তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা
    // positive number নিবে।")
//এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে,
 //তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
//Sample Input & Output
//Input: 5
//Output: 7.5


/*
function mindgame(number) {
    
    
    var result = number * 3;

    result =  result + 10;

    result = result / 2;

    result = result - 5;

    return result;
}


var input = 50;

var results = mindgame(input);

console.log("input",+input);
console.log("output",+results);

*/



/*

//Problem 3: Is Less or Greater than seven
//তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
//এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই 
//পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। 
//নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট 
//হিসেবে নিয়েছো সেটির দ্বিগুণ।
//Input: 6
//Output: -1



function isLGSeven(number) {
    if (number < 7) {
        return number - 7;
    } else {
        return number * 2;
    }
}

var input = 15;
var output = isLGSeven(input);
console.log(output);


*/



/*

function gemsToDiamond(gems1,gems2,gems3){


    var friends1 = 21;
    var friends2 = 32;
    var friends3 = 43;

    var result = gems1 * friends1;
    var result2 = gems2 * friends2;
    var result3 = gems3 * friends3;

    var total = result + result2 + result3;


    if(total>1000){

        var gemsToDiamonds = total -  2000;
        return gemsToDiamonds;
    }

    return total;
}

var number1 = 20;
var number2 = 200;
var number3 = 50;

var results = gemsToDiamond(number1,number2,number3);

console.log(results);

*/






//৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো।
// যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে 
// আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে 
 //পারো কিনা। 


 /*
 
function booksprice(){
 var array = {"pcb":100, "cmt":150, "java":200, "acount":250,"data":300};

  var result = [];
    
  for(var book in array){

    if(array[book]>200){

        continue;
    }

    result.push(book)
  }

  return result
      
}

var results = booksprice();

console.log(results);

*/