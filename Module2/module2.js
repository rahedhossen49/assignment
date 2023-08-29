
/*
   
function myfunction(a,b){

console.log("hello");
 //return a * b;

}


let x = myfunction(4, 3);   
console.log(x);

*/

/*
var carName = "bmw";
function myfunction(){

    let carName = "volvo";
    console.log(carName);

}

myfunction();

console.log(carName);
*/


/*

let name = prompt("Whats Your Name");
function objAlert() {
    

    alert("Hello" + name + "! Nice to meet you.")
   
      
   }

   objAlert();
    */





//1) Create a function that takes an array containing only numbers and return the first element.
   
  function firstvalue(item){
    return item[0];
   }

   let result = firstvalue([1,2,3]);
   console.log(result);





 //2) Create a function that accepts an array and returns the last item in the array.
 
 function lastitem(item){

    return item[item.length-1];
 }

 let result = lastitem([1,2,3]);
 console.log(result);

 


 
 //3) Create a function that returns true if a string is empty and false otherwise.
 
 
 function isempty(item){

    if(item.length == 0){
        return true;
    }

    else{

        return false
    }
 }

 let result = isempty("");
 console.log(result);

 

 

 //4) There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

 function remainder(a,b){

    return a % b;

 }

 let result = remainder(5,5);
 console.log(result);

 


 

 
 //5) Create a function that finds the index of a given item.


 function Search(numbers, item){

    return numbers.indexOf(item);

 }

 let result = Search([1,5,3],5);
 console.log(result);
 


 

 //6) Create a function that takes the age in years and returns the age in days.

 function calcage(age){

    return age*365;
 }

 let result = calcage(65);
 console.log(result);




//7) Create a function that takes an array of numbers and returns the smallest number in the set.

function findsmallestNum(numbers){

    return Math.min(...numbers);

}


let result = findsmallestNum([34,15,88,2]);
console.log(result);




//
8) Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(num){


    return num * -1;
}

let result = returnNegative(4);
console.log(result);



