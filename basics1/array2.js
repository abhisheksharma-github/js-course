//ARRAY mein array bhi ho skta 
// for example:-
const heroes=["ironman","Thor","Loki","Spiderman"]
const dc_heroes=["Flash","Batman","Superman"]
//heroes.push(dc_heroes)
//console.log(heroes);


// to add two array we use CONCAT()
// FOR EXAMPLE:-
// const allheroes = heroes.concat(dc_heroes)
// console.log(allheroes)


// we can also use more simple ways to add array in js
const allheroes=[...heroes,...dc_heroes]
//console.log(allheroes)


// agar ek array ke andr ek or array ha or usko ek hi array mein karna ha toh hum .flat()use krte ha iske bracket ke andr hum no of array present ek array ke andr wo likhenge
const number=[1,2,[3,4,5,[6,7,8]]]
const array_number= number.flat(Infinity)

//to find array in wesite or search weather this name of array is present or not

console.log(Array.isArray("ironman"))

// to convert string or object in array we use .from

console.log(Array.from("Abhishek"))
console.log(Array.from({name:"Abhishek"})) // gives null value

// to convert string ,number and object we use .of()

let name1="abhishek"
let name2="sharma"
let name3="abhi"

console.log(Array.of(name1,name2,name3))
