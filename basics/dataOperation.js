let str = "33"
console.log(typeof str);


let valueInNumber = Number(str)
// string ke datatype ko  hum number mein change kar skte ha ,, same hum bkki datatype ke sath bhi kar skte ha
console.log( valueInNumber);
console.log(typeof valueInNumber);

let number= "Abhishek"
console.log(typeof number);

let valueInString = String(number)
console.log(typeof valueInString )
console.log(valueInString) 


//*********************************************************************OPERATIONS******************************************************************************************************************************** */

let Value= 3
let negValue= -Value

console.log(negValue)

let Str1= "Hello"
let Str2= "World"

let Str= Str1+Str2
// we can add strings like this also
console.log(Str)

console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
// Phele jo dataype hoga vahi type ka result , string hoga first toh string result hoga or number hoga toh result number hoga

console.log(1+2+"3")

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */