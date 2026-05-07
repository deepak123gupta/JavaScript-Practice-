const name = "Deepak"
const repo= 10

//This is a older way for concanating string
console.log(name + repo + "value" );

//Use moder way
//Backtis
console.log(`My name is ${name} and I have a ${repo}`)


//When String create in this way so It will be store in key value pair
let gameName=new String("PUBG Lover");

//Methods of String
// console.log(gameName.length);
console.log(gameName.charAt(2));
 let newString=gameName.substring(0,4)
//  console.log(newString)

 //here we can give the negative value and when we give the negative value so It will start from end
 newString=gameName.slice(-8,-9);
 console.log(newString);

 let newStringOne="  De epak  "
console.log(newStringOne)
console.log(newStringOne.trim());

let url="http://www.deepak@20gupta"
console.log(url.replaceAll("@20","-"))

console.log(url.includes("deepak"))

let demoString="deepak-vineet-gourav"
console.log(demoString.split("-"));

//This method return unicode ascii value
console.log(demoString.charCodeAt(3));

console.log(demoString.concat("-Abhi"))
//Finf charcter, Find word, Find Regex
console.log(demoString.match('d'))

//Used to provide given regex match
let result = demoString.matchAll('/d/e/');
console.log(result)


