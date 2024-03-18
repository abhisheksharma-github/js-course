// for declaring object in js 
const mysum=Symbol("key1")
const Student = {
    name: "abhishek sharma",
    age: 18,
    email:"abhishek@google.com",
    [mysum]: "mykey1"
}
// thats how we declare the object
console.log(Student[mysum]);