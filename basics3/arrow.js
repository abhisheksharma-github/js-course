const student={
    StudentName:"Abhishek Sharma",
    Rollno : 14,
    Course:"btech",

    welcomMessage:function(){
        console.log(`${this.StudentName} ,Welcome to Our institution,join the course in ,${this.Course}`)
        // THIS function is used to show the current events in the scope

        console.log(this);

    }
}
// student.welcomMessage()
// student.StudentName="rishab pant"
// student.Rollno=17
// student.welcomMessage()

console.log(this) 
// -> this shows {} because ye global scope mein ha or iske andr kuch nahi ha kyuki ye Node par run kar raha ha, lekin jab hum browser open karenge to iske andr WINDOW hoga


// Basic way to declared the ARROW function

const twoNumber= (num1,num2)=>{
    return num1+num2;
}
console.log(twoNumber(3,5));