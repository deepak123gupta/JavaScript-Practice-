//memory managemnet in js

// Stack(Primitive) Heap(Non Primitive)

let myRealName="Deepak"
let myHomeName=myRealName
myHomeName="Deep"

console.log(myRealName)
console.log(myHomeName);

let employee1={
    name:"Deepak",
    email:"deepak@123"
}

let employee2=employee1

employee2.email="deepak@gupta@gmail.com"

console.log(employee1.email)
console.log(employee2.email)

//In case primitive type if store value one varibale to another so give the copy of variable value 

//In case of Non primitive give the original value