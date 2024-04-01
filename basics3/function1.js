function myName() {
    console.log("ABHISHEK SHARMA");
}

function addNumber(number1, number2) {
    return ` Addition of ${number1} + ${number2} is = ${number1 + number2}`;   // return ke baad kuch bhi print nahi hoga 
}

const result = addNumber(3, 4);
console.log(result);
