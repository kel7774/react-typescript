// Primitives

let age: number
age = 12

let userName: string
userName='Max'

let isInstructor: boolean
isInstructor = true

// Arrays & objects 

let hobbies: string[]
hobbies = ['bball', 'dance', 'stuff']
// array of strings

let person: {
  name: string,
  age: number
}
// define structure
person = {
  name: 'max',
  age: 21
}

let people: {
  name: string,
  age: number
}[]
// array of objects


// union types - allows more than one kind of types
// use pipe | 
let course: string | number 
course = 12345

// type aliases
// define your own base type - and use alias instead of repeating type definitions
type Person = {
  name: string,
  age: number
}
let Person = []


// functions & function types

function add (a: number, b:number): number{
  return a + b
  // infers that a number is returned
}

function printSomething (value: any) {
  // void means function never returns
  console.log(value)
}

// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array]
  return newArray
}