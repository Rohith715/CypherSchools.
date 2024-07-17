const a=5;
{
    let b=4;
    console.log(b*a)
}
//the below are how to write functions 
var sum= (a,b)=>a+b;
console.log(sum(8,7))
//turns out we can also do the same by using another syntax

//this code is to expand any array 
const q1=["hi there","my name","is rohith"]
console.log(...q1)
//this below code is to get the max value in the provided array
const num=[1,2,3,4,5]
var gg=Math.max(...num)
console.log(gg)
//using for loop
const i=[1,2,3,4,5,6,7,8,9,10];
let gum=0;
for(let f of i){
    gum=gum+f;
}
console.log(gum);
//below is how to use for loop for text traversal
const text=["hi there"];
lol="";
for(let d of text){
    lol=lol+d;
}
lol=lol+" rohith";
console.log(lol);
//the below is the usage of maps in javascript
const cars=new Map([
    ["honda",10],
    ["pagani",5],
    ["kia",30]
]);
console.log(cars);
console.log(cars.get("kia"));
//this the useage of sets in js
const unq=new Set();
unq.add("a");
unq.add("b");
unq.add("c");
unq.add("a");
console.log(unq);
const fun= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("In side promise");
            resolve();
        },2000);
    });
}

fun().then(()=>{
    console.log("Resolve");
}).catch(()=>{
    console.log("Reject");
})


const person={
    fname:"Satyam",
    lname:"Singh",
    age:20,
    eyeColor:"Blue"
};

const id = Symbol("id");

person[id] = 14011;

console.log(person);


const add=(a,b=10)=>a+b;

console.log(add(10));

/* when we have to give array of parameter */

const add1=(...args)=>{
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    return sum;
}

console.log(add1(10,20,30));