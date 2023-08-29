
/*

//1) javascript For in loop


function printObjectProperties(object){


   if(Object.keys(object).length==0){

      console.log("object is empty");

   }

   else{

      for(var key in object){

         console.log(`${key}: ${object[key]}`);
      }
   }
}

var person = {

   Name : "Rahed Hossen",
   Age  : 21,
   Dp : "Six",
   Technology : "Computer",
}

printObjectProperties(person)

*/





/*

//2) javascript function returns



function findMaxNumber(numbers){

   if(numbers.length==0){

      return null
   }


   else{

      let max = numbers[0]

      for(let i = 1; i<numbers.length; i++){

         (numbers[i] > max);{

            max  = numbers[i];
         }
      }

      return max
   }
}


const numbers1 = [10, 20, 5, 30, 25];


console.log(findMaxNumber(numbers1)); 

 
const emptyArray = [];


console.log(findMaxNumber(emptyArray));


*/





/*
//3) javascript Spread Operator

function mergeArrays (){

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    var result = [...arr1,...arr2] ;

 console.log(result);

}

mergeArrays()
*/





/*
//4) javascript arrow function

const calculateSquare = (number) => number * number;

console.log(calculateSquare(5)); 

*/




/*

//5) javascript es6 map

function doubleNumbers(numbers){


   const doubleAraay = numbers.map(number =>number*2);

   return doubleAraay
}

const numbers = [1,2,3,4,5];

console.log(doubleNumbers(numbers));

*/




/*

//6) javascript es6 static keyword

class MathUtility {

   static multiply(x,y){

      return x*y
   }
}

console.log(MathUtility.multiply(5, 3));

*/















