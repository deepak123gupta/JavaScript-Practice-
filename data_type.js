//Operation 
// console.log("1" + 2); 
// console.log(2 +"1"); 
// console.log("1" +2 +3);
// console.log(1 +2 + "3");

// console.log("2">1); //true
// console.log("02">1)
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

//In case of triple ===

// console.log("2"===2) //It will check data type also 

//Data Type is two type 
//i primitive (call by value)(string,number,null,undefined,symbol,bigInt,boolean)
//ii non primitive (call by refernce)(arrays,function,object)

//symbol data type 

const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id);
console.log(id==anotherID);

//Non primitive (reference )
//Array,Object,function

const hero=["Nagarjun","Sushant","Shaktiman"]

let student={
    name:"Deepak",
    age:22
}

let sum=function(){
    console.log("This is my Function");
}

// console.log(hero)
// console.log(student)
// console.log(sum)

console.log(typeof sum)
console.log(typeof student)
console.log(typeof hero)

//typeof for

// null   object






