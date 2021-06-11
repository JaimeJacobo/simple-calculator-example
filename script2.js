// //Without touching the HTML

// //Alex: Change the color of the title's font to green
// let element = document.getElementById("title")
// const color = "green"
// element.style.color = color;
// // document.getElementById("title").style.color = "green"

// //Victor: Change the font size of all the li to 30px
// let listItems = document.getElementsByTagName('li')
// for (let i=0;i<listItems.length;i++){
//     listItems[i].style.fontSize = '30px'
// }

// //Peter: Change the color of "Stuff to buy" to red

// const changeStuffToBuy = document.querySelector('p');
// const color = 'red'
// changeStuffToBuy.style.color = color

// //Lorianne:
// //Change the first element of the list and make it say: "Cereals"

// let theList = document.getElementsByClassName('listElement');
// console.log(theList);
// theList[0].innerHTML = "Cereals"

// //Pilar

// //Change the text of the title. It should now say: "This is the new title"

// document.getElementById("title").innerText="This is the new title"

// //Pallavi
// //Delete everything that is inside the ul and put a paragraph with some text inside instead
// let item = document.querySelectorAll('ul')

// item.innerHTML = '<p>This is a paragraph</p>'




 
// //G
// // Change all font sizes of the list elements to 20px

// let listElement = document.querySelectorAll(".listElements");
// for( let i = 0; i <listElement.length; i++) {
//     listItems[i].style.fontSize = "20px"
// }



// //Sasmitha
// // Delete everything from our page
// document.body.innerHTML='';

// //Salvo:
// // Change all the contents of the list for: Candy, Water and Apples
// const newElements= ['Candy','Water','Apples'];
// const listElements = document.querySelectorAll(".listElement")
// for(let i=0; i< listElement.length; i++){
//     listElements[i].innerHTML= newElements[i]
// }


// //Natalie:
// // Change the font size of "Stuff to buy" to 40px
// document.getElementsById('buy').style.fontSize = '40px';

document.getElementsByTagName('p')[1].innerText = 'Changed with dom'
document.querySelector('p')

