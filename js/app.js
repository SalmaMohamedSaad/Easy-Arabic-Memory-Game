/*-------------------------------- Constants --------------------------------*/
const card = document.querySelector('.card')
const message = document.querySelector('#message')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
//console.log(message.innerHTML)
/*---------------------------- Variables (state) ----------------------------*/
let cardText
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const hideBtnById = (id) => {
  const btn = document.querySelector(`#${id}`)
  // console.log(id)
  btn.style.display = 'none'
}
const showBtnById = (id) => {
  const btn = document.querySelector(`#${id}`)
  console.log(btn.style)
  btn.style.display = 'block'
}
/*
* Function flipCard will be called by either Start button or onClick event of the card
* When Called by start button it will do the following:
1. preserve the card text in the variable cardText
2. remove the text from the card as if it was flipped on its back
3. change the backGround color of the card
4. hide the start button by calling the function hideBtnById
5. show the reset button by calling the function showBtnById
* When called by clicking the card it will set the card inner text value back to the cardText variable, and set the card background property back to the front color

*/
const flipCard = (event) => {
  //console.log(event.target.id)

  if (event.target.id === 'start' || card.innerHTML) {
    cardText = card.innerHTML
    card.innerHTML = ''
    card.classList.remove('flipped')
    card.style.background = 'red'
    hideBtnById('start')
    showBtnById('reset')
    message.innerHTML = 'Game On!'
  } else {
    for (let i = 0; i < cardText.length; i++) {
      card.innerHTML = cardText
    }

    card.style.background = '#40e0d0'
  }

  //console.log(cardText)
}
const startGame = () => {}
const resetCard = () => {
  card.innerHTML = cardText
  card.style.background = '#40e0d0'

  hideBtnById('reset')
  showBtnById('start')
  message.innerHTML = `Let's Start!`
}
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', flipCard)
resetBtn.addEventListener('click', resetCard)

card.addEventListener('click', flipCard)
