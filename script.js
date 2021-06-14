

  // document. --> Almost all of commands to modify the DOM of our web page start with document.

//---------Examples of DOM Manipulation properties and methods-------

// document.body.innerHTML = '<h1>I am the new h1 put with DOM</h1>'

// document.body.style.backgroundColor = 'coral'

// document.body.style.color = 'white'
// document.body.style.fontSize = '100px'


//TARGET ANY ELEMENT BY ITS ID

// const firstPharagraph = document.getElementById('1')
// console.log(firstPharagraph)

// firstPharagraph.innerHTML = 'Primero'

// document.getElementById('3').style.fontSize = '10px'


// const examplesArray = document.getElementsByClassName('example')
// // const examplesArray = document.querySelector(".example");

// examplesArray[0].style.color = 'red'
// examplesArray[1].style.color = 'red'

// for(let i = 0; i < examplesArray.length; i++){
//   examplesArray[i].style.color = 'red'
//   examplesArray[i].innerText = 'Wild Code School'
// }


// const animals = ['elephant', 'dog']

// //elephant
// //dog
// //cat
// //bird


// for(let i = 0; i < animals.length; i++){
//   console.log(animals[i])
// }

let counterForClicks = 0

const myButton = document.getElementById('myButton')

const counterParagraph = document.getElementById('counter')
counterParagraph.style.fontSize = '80px'

myButton.addEventListener('click', function(){
  counterForClicks++
  counterParagraph.innerText = counterForClicks
})

counterParagraph.innerText = counterForClicks



// console.log(document.querySelectorAll('.listElement'))



const div2 = document.getElementsByTagName('div')[1]

let allNewParagraphs = ''

document.getElementById("secondButton").addEventListener('click', function(){
  allNewParagraphs += '<p>Whatever you want</p>'
  div2.innerHTML = allNewParagraphs
})
 



// const firstFunction = function(){
//   const hello = 'hello22'
//   console.log(hello)
//   return hello
// }

// const secondFunction = function(){
//   const hello = 'hello33'
//   console.log(hello)
//   return hello
// }



// const animals = ['bat', 'cat', 'dog', 'snake']

// function animal(arr){
//   let arrString = ''
//   for (let i = 0; i < arr.length; i++){
//     // arrString = arrString.concat(arr[i])
//     // arrString = arrString + arr[i]
//     arrString += arr[i]
//   }
//   return arrString
// }

// console.log(animal(animals))
//Create a function that receives an array and return a string with all of the arrays items concatenated

//Example: 'batcatdogsnake'



// console.log(document.getElementById('title').innerText)

const myInput = document.getElementById('myInput')
// console.log(myInput)

myInput.addEventListener('input', function(event){
  console.log(event)
  // console.log(myInput.value)
})

document.getElementById('submitButton').addEventListener('click', function(event){
  console.log(event)
  console.log(event.target.innerText)
  // console.log(myInput.value)
})