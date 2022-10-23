// itens que iremos usar.
let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer;

// contador de jogadas.
let player1= 0;
let player2= 0;

//adicionando events do click nos boxes.
for(let i=0; i<boxes.length; i++){
boxes[i].addEventListener("click", function(){
 let el = checkEl(player1,player2)

// limita o número de jogadas no box
if(this.childNodes.length == 0){
 let cloneEl = el.cloneNode(true);
 this.appendChild(cloneEl)

// computar jogadas.
contTurn(player1,player2)
}
})
}

function checkEl(player1,player2){
  if(player1==player2){
    el=x;
   }else{
    el=o;
   }
  return el;
}

function contTurn(){
  if(player1==player2){
    player1++
   }else{
    player2++
   }
  //  checkWinCondition();
}


console.log(boxes)
console.log(boxes[0])
// function checkWinCondition(){
//   for(let i = 0; i<8; i++){
//     if(boxes[i] == x && box)
//   }
// }