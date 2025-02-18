// dynamically typed language

let userName = "Tony";
let num = 33.33;
let num1 = 44;
let isFollower = false;
let x = undefined; //dont know wht  is inside this variable
let y = null; // know what is inside this variable but it is empty (it is a obj,absence of a object)
console.log(typeof userName)
console.log(typeof num)
console.log(typeof num1)
console.log(typeof x)
console.log(typeof y)
console.log(typeof isFollower)

// variable rules 
// variable names are case sensitive
// only letters, digits, underscores and dollars are allowed
// space(_) is not allowed
// 1st letter should be a letter or underscore or $ (numbers in start are not allowed)
// reserved words are not allowed

// datatypes in js
// 7 primitive data types(fixed)
// string,number,boolean,null,BigInt,Symbol,Undefined

// non primitive data types
// objects (arrays, functions)

const student = {
  fullName: "rahul",
  age: 20,
  cgpa: 8.2,
  isPass: true,
}
console.log("student type --> ", typeof student)
console.log(student.fullName)

//u can chng the keys in the obj 
student.age = student.age + 1

console.log("student --> ", student)
console.log(student["fullName"])

// practice
const product = {
  id: 1,
  name: "apple",
  price: 10,
  quantity: 5,
  rating: 5,
  offer: 5,
  deal: 5,
  productImage: ""
}

const profile = {
  id: 1,
  userName: "apple",
  followersCount: 10,
  isFollow: true,
  followingCount: 5,
}