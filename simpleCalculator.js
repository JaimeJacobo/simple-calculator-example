

// const button = document.querySelector('#calculate')
const button = document.getElementById('calculate')
const result = document.getElementById('result')
const clear = document.getElementById('clear')



button.addEventListener('click', function(){
  const firstValue = parseInt(document.getElementById('firstNumber').value)
  const operator = document.getElementById('operators').value
  const secondValue = parseInt(document.getElementById('secondNumber').value)

  if(operator === '+'){
    result.innerText = firstValue + secondValue
  } else if(operator === '-'){
    result.innerText = firstValue - secondValue
  } else if(operator === '*'){
    result.innerText = firstValue * secondValue
  } else if(operator === '/'){
    if(secondValue === 0){
      result.innerText = 'ERROR!'
    } else {
      result.innerText = firstValue / secondValue
    }
  }
})


clear.addEventListener('click', function(){

  document.getElementById('firstNumber').value = ''
  document.getElementById('secondNumber').value = ''
  
  result.innerText = ''

})


