//—------------------------------------------------Topic 01—------------------------------------------------------------

function calculation(amount){
    if(amount < 50){
        console.log("Discounted amount: $" + 0);
    }
    else if(amount >= 50 && amount <=100){
        let discount_amount = (amount/100)*5;
        console.log("Discounted amount: $" + discount_amount.toFixed(1));
    }
    else if(amount >= 100 && amount <= 200){
        let discount_amount = (amount/100)*10;
        console.log("Discounted amount: $" + discount_amount.toFixed(1));
    }
    else if(amount>200){
        let discount_amount = (amount/100)*15;
        console.log("Discounted amount: $" + discount_amount.toFixed(1));
    }
}
calculation(100);


//—------------------------------------------------Topic 02—------------------------------------------------------------

function filterEvenNumbers(numbers) {
    let evenNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

const numbers = [12, 34, 45, 23, 6, 78, 54, 90];
const result = filterEvenNumbers(numbers);
console.log(result);


//—------------------------------------------------Topic 03—------------------------------------------------------------

function multiplication(num){
    for(let i = 1; i <= 10; i++){
        let new_num = num * i;
        console.log(num +" * " + i + " = " + new_num); 
    }

}
multiplication(11);


//—------------------------------------------------Topic 04—------------------------------------------------------------

function calculateGrade(num){
    switch(true){
        case(num >= 90 && num <=100):
            console.log("A");
            break;
        case(num >= 80 && num <90):
            console.log("B");
            break;
        case(num >= 70 && num < 80):
            console.log("C");
            break;
        case(num >= 60 && num < 70):
            console.log("D");
            break;  
        case(num < 60):
            console.log("F");
            break;  
        default:
            console.log("Invalid Input. Enter integer only");
    }
}


calculateGrade(70);




