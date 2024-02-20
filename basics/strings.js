let Name = "Abhishek"

// we can also decalred the strings like this
let userName = new String ("sharma")
console.log(userName) // aise karenge toh ye object ki trah treat hoga 

// we can add strings like this by using this   (` `)
console.log(`my name is ${Name} and my surname is ${userName}`)     



// for changing the strings into upperCase and lowerCase we use to.Uppercase() and to.Lowercase()
console.log(Name.toUpperCase())
console.log(userName.toLowerCase())

// agar humko dekhna ha ki ye postion par kon sa character aa raha toh hum ye use karenge .charAt()
console.log(userName.charAt(2))


// agar humko dekhna ha ki issa index par konse character ha toh hum ye use karenge .indexof()
console.log(userName.indexOf("a"))

// sub strings me convert karne ke liye humko
const newstring= Name.substring(0,4) // issa mein 4 index ko include NAHI karega  substr(startIndex, length)
console.log(newstring)


// to remove the whitspace we use .trim
let anotherString = "   Abhishek   "
console.log(anotherString.trim()); 


 // ek string ke sath or bhi strings add kar skte ha like this
let User= " 1805"
let Userid="Abhi"
let result = Name.concat(User,Userid)
console.log(result)

 
// to replace the value from the string  .replace("search value ", "replace value")
let email= "abhisheksharma1805@gmail.com"
console.log(email.replace("sharma","Sharma"))




