
/*
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage
  let num1 = 5;
  let num2 = 10;
  
  console.log(num1 + " is " + checkEvenOdd(num1));
  console.log(num2 + " is " + checkEvenOdd(num2));
  
  
  */





  

  /*
  function calculate(amount) {
    let discount = 0
    if (amount >= 50 && amount <= 100) {
        discount = 0.05;
    } else if (amount > 100 && amount <= 200) {
        discount = 0.1;
    } else if (amount > 200) {
        discount = 0.15;
    };
    const discountAmount = amount * discount;
    const discountedAmount = amount - discountAmount;

    console.log('Total purchase amount: $ ' + amount);
    console.log('Discounted amount: $ ' + discountedAmount);
    console.log('Discount amount: $ ' + discountAmount.toFixed(2));

}

calculate(50)


*/




/*
const hello = () => {
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
  }
  
  
  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  
  const sum = (p, q) => {
    return p + q
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  let v = hello();
  console.log(v)
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  console.log(sum(9, 7))

*/




/*

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(1234)));


*/



/*

const readline = require('readline');

// Function to check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for a number
rl.question("Enter a number: ", (userInput) => {
  // Convert the user input to a number
  const numberToCheck = parseInt(userInput);

  // Check if the user input is a valid number
  if (!isNaN(numberToCheck)) {
    // Call the checkEvenOdd function with the user input number
    const result = checkEvenOdd(numberToCheck);

    // Output the result to the user
    console.log(`${numberToCheck} is ${result}`);
  } else {
    // Invalid input
    console.log("Invalid input. Please enter a valid number.");
  }

  // Close the readline interface
  rl.close();
});
  */




///asyncrouns



/*

function res(){

  return new Promise((resolve) => {

      setTimeout(() =>{
          resolve('reso');
      },1000);
  });
}



async function asynccall(){

  console.log("calling");
  const result = await res ();
  console.log(result);
}

asynccall()

*/


function lower() {
  
  var name = 'Rahed Hossen';
  var result = name.length();
  console.log(result)
}

lower();
