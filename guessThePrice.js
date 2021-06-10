const playerName = prompt('What\'s your name?')
const randomNumber = Math.floor(Math.random() * 100) + 1
let chosenNumber = parseInt(prompt('Choose a number from 1 to 100'))
let countForTries = 0

for(let i = 0; i < 1; i++){
  if(randomNumber !== chosenNumber){
    countForTries++
    if(randomNumber > chosenNumber){
      console.log('It is more')
    } else if(randomNumber < chosenNumber){
      console.log('It is less')
    }
    chosenNumber = parseInt(prompt('Choose a number from 1 to 100'))
    i--
  }
}
console.log(`${playerName} wins! You needed ${countForTries} tries`)

// while(randomNumber !== chosenNumber){
//   countForTries++
//   if(randomNumber > chosenNumber){
//     console.log('It is more')
//   } else if(randomNumber < chosenNumber){
//     console.log('It is less')
//   }
//   chosenNumber = parseInt(prompt('Choose a number from 1 to 100'))
// }
