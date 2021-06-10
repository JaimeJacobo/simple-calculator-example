  // const firstValue = parseInt(prompt('Introduce first value'))
  // const operator = prompt('Introduce the operator')
  // const secondValue = parseInt(prompt('Introduce second value'))

  // if(operator === '+'){
  //   console.log(firstValue + secondValue)
  // } else {
  //   console.log(firstValue - secondValue)
  // }


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

