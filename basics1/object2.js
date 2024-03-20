 // its singleton object
//const facebooKUser= new Object()

const facebooKUser = {}
facebooKUser.email= "abhisheksharma@gmail.com"
facebooKUser.name="Abhishek Sharma"
//console.log(facebooKUser);

const regularUser = {
    email: "abhishek@gmail.com",
    fullName: {
        userFullname: {
            First:"Abhishek",
            Last:"Sharma",       // object ke andar object put kar sakte ha 
        }

    }
}
console.log(regularUser.fullName.userFullname.First); // we can access the value like this

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
const obj4 = {...obj1, ...obj2, ...obj3} // thats how we merge the object in object

console.log(obj4);

const user=[
    {
        id:1,
        name:"abhishek",
    },

    {
        id:2,
        name:"sharma",
    },
]
// console.log(user[1].name)

// thats how we retrive the object keys,values
console.log(Object.keys(facebooKUser))
console.log(Object.values(facebooKUser))