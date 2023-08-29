
//(1) Topic: Online Store Discount Calculator (If-Else Statement)



function calculateDiscount(amount) {
    if (50 > amount) {
      return "No Discount";
    } else if (50 <= amount && 100 >= amount) {
      let discount = (amount * 5) / 100;
      let discountedAmount = amount - discount;
      return `Discount 5%. \nTotal amount ${amount}. \nDiscounted total amount: ${discountedAmount}.`;
    } else if (100 <= amount && 200 >= amount) {
      let discount = (amount * 10) / 100;
      let discountedAmount = amount - discount;
      return `Discount 10%. \nTotal amount ${amount}. \nDiscounted total amount: ${discountedAmount}.`;
    } else if (200 <= amount) {
      let discount = (amount * 15) / 100;
      let discountedAmount = amount - discount;
      return `Discount 15%. \nTotal amount ${amount}. \nDiscounted total amount: ${discountedAmount}.`;
    }
  };
  
  console.log(calculateDiscount(200));








  //(2) Topic: Filter Even Numbers


  
function filteredEvenNumbers(arr){

    return arr.filter(num => num % 2 == 0);
}

const OriginalArray = [12, 34, 45, 23, 6, 78, 54, 90];
const filterEvenNumbers = filteredEvenNumbers (OriginalArray);

console.log("Original Array:", OriginalArray);
console.log("Filtered Even Nnumber:",filterEvenNumbers);




// (3) Topic: Multiplication Table Generator


function Multiplication (number){


    for(i=1;i<10;i++){


        console.log(number + "*" + i + "=" + (number*i));

    }
}

Multiplication(5);





// (4) Topic: Grade Calculator (JavaScript Switch Case)




function calculateGrade (Marks){
 
  switch(true){

   case(Marks<=100 && Marks >=90):{

    console.log("A");
    break;
   }


   case(Marks>=80 && Marks<=89):{

    console.log("B");
    break;
   }


   case(Marks>=70 && Marks<=79):{

    console.log("C");
    break;
   }


  case(Marks>=60 && Marks<=69):{

    console.log("D");
    break;
   }

   case(Marks < 60):{
   console.log("F");
   break;
   
   }

   default:
   console.log("Invalid Input. Enter integer only");
}

  }


calculateGrade(50)


