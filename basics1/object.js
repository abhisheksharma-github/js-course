// for declaring object in js 
const mysum=Symbol("key1")
const Student = {
    name: "abhishek sharma",
    age: 18,
    email:"abhishek@google.com",
    [mysum]: "mykey1"
}
// thats how we access the object most of time
console.log(Student.email);
// we use sqr bracket for sometimes 
console.log(Student[mysum]);

// TO CHANGE ANYTHING IN OBJECY WE USE THIS METHOD 
 // if you want nobody change anything we use .freeze method
Student.email="abhisheksharma@balele.com"
console.log(Student);
  // if you want nobody change anything we use .freeze method
    // Object.freeze(Student)
Student.email="abhishek@gmail.com"

// we can create Function in the Object like this

Student.wish = function(){
    console.log("Hello Students, How Are You?")
}
console.log(Student.wish) // if we use this it show it is a FUNCTION 
console.log(Student.wish())// its shows the content of Function in It

Student.wishTwo = function(){
    console.log(`Hello,${this.name} ,Your Age is ${this.age}`)
}
console.log(Student.wishTwo());