function myName() {
    // console.log("ABHISHEK SHARMA");
}

function addNumber(number1, number2) {
    return ` Addition of ${number1} + ${number2} is = ${number1 + number2}`;   // return ke baad kuch bhi print nahi hoga 
}

const result = addNumber(3, 4);
// console.log(result);


function Cart(...name){
    return name;
}
console.log(Cart('soap,cream,tube,doll'))

const user = {
    username:"abhi",
    price:99
}

function handleUser(anyobject){
    // console.log(`Username ${anyobject.username} price is ${anyobject.price}`)
}
handleUser(user);



function Father(){
   const FatherName="mukesh"
   function Son(){
    const sonName="abhishek"
    console.log(FatherName)
   }
   Son()
}
Father()

// thats how we do it 