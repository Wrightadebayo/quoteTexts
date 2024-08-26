            //  Math object
    // floor method 
    // ceil method
// const number  = 25
// const result = Math.sqrt(number)
// console.log(result)
// const number = Math.random()
// console.log(number)
// const number =4.66666
// const result = Math.floor(number)
// console.log(result)

// const person = ()=> console.log('hello world')
// person()
// const hello = value => value * 2
// const hey = hello(3)
// console.log(hey)

// const people = (num1,num2)=>{
//   const result = num1 + num2
//   return result
// }
// const rate = people(2,9)
// console.log(rate)


// function holy(para,para2){
//  console.log(`${para},${para2}`)
// }
// holy('')

//  const object = () => ({name:'goke',age:89})
//  const bees = object()
//  console.log(bees)

// arrow functions as callback functions
// const numbers = [1,2,3,4,5,6]
// const num = numbers.filter(num => num > 2)
// console.log(num)

// call,apply,bind,closure,arrow function
//  calls runs instantly,argument list of items
//  apply runs instantly argumemt array of items
    

  // const john = {
  //   name : 'dre',
  //   age : 24,

  //   }

  // const paul = {
  //   name: 'vicky',
  //   age:25
  // }

  // function greet(city,country){
  //     console.log(this)
  //     console.log(`this is ${this.name}, is ${this.age} lives in ${city},${country} years old`)
  //   }

  //   greet.call(john,'san diego','usa')
  //   greet.apply(paul,['london','uk'])


  //  call and apply in object

//  const john = {
//   name: 'stella',
//   age:20,
  
//  }

//    const isreal = {
//     name : 'susan',
//     age:30
//    }


//    function greet(city,country){
//     console.log(this)
//     console.log(`this is ${this.name} she is ${this.age} lives in ${city} ${country}`)
//   }
  

//   greet.call(john,'san diego','usa')
//   greet.apply(isreal,['lagos','nigeria'])
//   const season = greet.bind(john,'san diego','usa')
//   season()


// for loops
// let i;
// for(let i = 10;i > 5;i--){
// console.log('hello world')
// }




                    //  closure
// function outer(){
//   let value ='hello world'
// function inner(){
//   console.log(`this is a real life : ${value} `)
// }
// return inner 
// inner()
// }
// outer()()
// // console.log(value)

// const variable = outer() 
// variable()


// console.log(`i'm first`)
// console.log(`i'm second`)
// console.log(`i'm third`)

// console.log(`i'm first`)
// boilingWater()
// console.log(`i'm third`)

// function boilingWater(){
//  console.log(' boiling')
//   for(i = 0; i < 100000; i++){
// console.log("i'm almost done...")
// }
//  console.log("i'm done")
// }
// boilWater(10000)
// console.log('chop carrot');
// for(let i = 0;i < 500;i++){
//   console.log('still busy')
// }
// function boilWater(time){
// console.log('boiling...')
// setTimeout(()=>{
// console.log('done')
// },time)
// }


//  call runs instantly,arguments list of items
//  Apply runs instantly,arguments array of items

// const john = {
//   name:'vic',
//   age:20,
  // greet:function(){
  //   console.log(this)
  //   console.log(`my name is ${this.name} and am ${this.age} years old`)
  // }
// }
// john.greet()

// const susan = {
//   name:'maguire',
//   age:20
// }

// const isreal = {
//   name:'harry',
//   age:20
// }

// function greet(city,country){
//   console.log(this)
//     console.log(`my name is ${this.name} and am ${this.age} years old ${city} ${country}`)
// }

// greet.call(john,'san diego','us')
// greet.call(susan)
// greet.call(isreal)

// greet.apply(john, ['sandie','ghana'])
// greet.apply(susan)
// greet.apply(isreal)

// // for(let i = 5;i < 3;i++)
// for (let i = 2; i > 5; i++) {
//     console.log(i);
// }


// const object = {
//   name:'ope',
//   age:37,
//  first : 'oops'
// }
// console.log(object.name)
// // const {name,age,first}=object
// function printPerson({name,age,first}){
//   // const {name,age,first} = person
// console.log(name,age,first)
// }
// printPerson(object)


// const boys = ['bab','mama','dodo']
// const girl = ['lie','lamp','mark']
// const boyle = 'body'
// const friends= [...boys,...boyle,...girl]
// console.log(friends)

// const fruits = ["apple", "banana", "cherry"];
// const [apple,banana,cherry]=fruits
// console.log(apple,banana,cherry)
// const [firstFruit, secondFruit] = fruits;

// console.log(firstFruit); // "apple"
// console.log(secondFruit); // "banana"


// const prof = new Promise((resolve,reject)=>{
  
// })
// console.log(prof)

// x = findMax (1,123,500,115,44,88);

// function findMax(){
//   let max = - infinity
//   for (let i = 0; i < arguments.length; i++){
//     if (arguments[i] > max){
// max = arguments[i]
//   }
// }
// return max
// }

// const array = [1,123,500,115,44,86]
// console.log(array.length)

// const array = [1,123,500,115,44,86]
// const highestNumber = Math.sqrt(...array)
// console.log(highestNumber)
// find the maximum number 
// const array = [1,123,500,115,44,86]
// const highestNumber= Math.max(...array)
// console.log(highestNumber)
// function findMax(array){
// return Math.max(...array)
// }
// const array = [1,123,500,115,44,86]
// const highestNumber =findMax(numbers)
// console.log(highestNumber)

// closure
//  function outer(){
//   const variable = 'money'
// function inner(){
//   console.log(`this is a living ${variable}`)
// }
// return inner
// inner()
//  }
//  outer()()
//  const value = outer()
//  console.log(value)
// value()

// arrow function or fat function
// function read(){
//   console.log('white')
  
// }
// read()

// const number = () => console.log('hello world')
// const arrowFunction = value => value * 3
// const multiply = arrowFunction(3) 
// console.log(multiply)


// const fruits = 'udemy'
// const people = [...fruits]
// console.log(people)

// const fruits = ['apple','banana','mango','pawpaw']
// const cashew = [...fruits]
// console.log(cashew)


// function people(){
//   console.log('hello world')

// }
// people('')

// const google = (para1,para2) => {
// //  const people = ''
// }
// const array = google('hello',)

// const arrow = () => console.log('hello')
// arrow
// const people = person(4)
// console.log(people)

// spread allow an iterable to spread/expand individually inside receiver
            //  spread operator

// const convocation = 'udemy'
// const micro = [...convocation]
// console.log(micro)


          // rest operator
          // collect/gathers the items
// const people = ['apple','growth','tomato','pawpaw']
// const [first, ...rest] = people
// console.log(first,rest)

// const objects = {
//   name:'Gbenga',
//   age :20,
//   status :'married'
// }
// const obj = {...objects}
// console.log(obj)
// // const {name,...latest} = objects
// //  console.log(name,latest)

// const peoples = ['apple','growth','tomato','pawpaw']
// const [apple,growth,tomato,pawpaw] = peoples
// console.log(apple,growth)

// const number = [2,5,77,7,40]
// const numbers = Math.max(...number)
// console.log(numbers)
          //  asynchronous
          // arrow functions or fat function
  // no name,always expression,assign to variable
         // no function keyword
        //  this
// const hello = function(name){
// console.log(`${name}`)
// }
// hello('mope')

// const objective = () => ({name:'hope',age:20})
// // console.log(objective)
// const pex = objective()
// console.log(pex)

//for of loops = new way how to iterate on iterable object
// unlike forEach - we can break,continue
// const fruits = [1,2,3,4,5,6,7,8,10]
// for(const number of fruits){
//   if(number === 8){
//     continue
//   }
//   console.log(number)
// }



// asynchronous means things is happening in the background

// boilWater(1000)
// console.log('chop carrot')
// for(let i = 0;i < 10000;i++){
//   console.log('still busy')
// }

// function boilWater(time){
//   console.log('boiling...')
//   setTimeout(()=>{
//  console.log('done')
//   },time)
  
// }

// / function peoplePerson(para){
//   console.log(`hello world ${para}`)
// }

// peoplePerson('greatest')

// function peopleWorld(){
//   console.log('good people')
// }
// peopleWorld()


// const bigWorld = () => console.log('hello people')
// bigWorld()

// // function object(parameter){
// // console.log(`${parameter}`)
// // }
// // object('matter')

// // const ugarte = value => value 
// // const returnee = ugarte('water')
// // console.log(returnee)

// function objectx(parameter1,parameter2){
// console.log(`${parameter1} ${parameter2}`)
// }
// objectx('matter','occupy space')

// const chelsea = (num1,num2) => {
// const result =  num1 * num2
// return result
// }

// const multiply = chelsea(4,7)
// console.log(multiply)


// const pi = 23343
// pi = 33322
// let value = false
// if(value){
//   console.log('hello world')

// }else {
//   console.log('wrong')
// }
// console.log('im first')
// console.log('im second')
// console.log('im third')

// console.log('im first')
// synchronous()
// console.log("i'm done")

// function synchronous(){
//   console.log('boiling')
//   for(let i = 0;i < 10000;i++){
//     console.log('still boiling')
//   }
// }

              // callbacks,promises,async/await
              // must have async
              // await waits till promise is settled
              // error handling - try/catch
      // in order to use async and await we placed it in front of function 
//       const heading1 = document.querySelector('.first')
//        const heading2 = document.querySelector('.second')
//         const heading3 = document.querySelector('.third')
      
//        const btn = document.querySelector('.btn')
//  btn.addEventListener('click',async()=>{
//   displayColor().then(data=>console.log(data))
//  })

//     async function displayColor(){
//   try {
//     await addColor(200,heading1,'orange')
//      await addColor(400,heading2,'blue')
//       await addColor(300,heading3,'yellow')
//   } catch (error) {
    
//   }
//     }

    //   function addColor(time,element,color){
    //     return new Promise((resolved,reject)=>{
    //   if(element){
    //     setTimeout(()=>{
    // resolved('')
    //     },time)
    //     }{
    //     reject(new Error(`there was an error ${element}`))
    //   }
    //     })
    //   }
    //   try {
        
    //   } catch (error) {
        
    //   }

    // return new Promise((resolve,reject)=>{

    // console.log(Promise)
    // })
    
const btn = document.querySelector('.btn')

btn,addEventListener('click',()=>{
getText()
})

function getText(){
const xhr = new XMLHttpRequest()
    xhr.open('GET','./api/quote.text');
    xhr.onreadystatechange = function (){
      console.log(xhr)
      if(xhr.readyState === 4 && xhr.status === 200){
        const text = document.createElement('p')
        text.textContent = xhr.responseText
        document.body.appendChild(text)
      } else{
        console.log({
          status: xhr.status,
          text:xhr.statusText,
        })
      }
    }
    xhr.send()
}

    