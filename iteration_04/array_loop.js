//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(`Array value is ${num}`);
}


let greeting="hello World"
for (const greet of greeting) {
    //console.log(`Each Char is:${greet}`)
}

//  MAP
const map=new Map() 
{ 
    map.set("1","india")
    map.set("2","usa")
    map.set(0 ,"france")
}
console.log(map);

for (const [name,value] of map) {
    console.log(name,":-",value);
}