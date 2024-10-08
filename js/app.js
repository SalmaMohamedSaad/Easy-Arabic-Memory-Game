/*-------------------------------- Constants --------------------------------*/
const cards = document.querySelectorAll('.card')
const message = document.querySelector('#message')
const matchMessage = document.querySelector('#matchMessage')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
//console.log(message.innerHTML)
/*---------------------------- Variables (state) ----------------------------*/
let cardText = []
let firstCardValue
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
* Function flipCardsOnFront will be called by the onClick event of the card to do the following :
1. Check if there is another card text displayed or not
2. If another card is displayed then it will capture its text in a temp value
3. Show the clicked card text and compare it to the temp value
4. if the two values matches it will show a green message saying success and leave the cards text displayed as it is.
5. if the two values do not match it will flip them back and store their text in the cardText array

*/
const flipCardsOnFront = (event) => {
  //console.log(cards[0])

  cards.forEach((card) => {
    if (card.innerHTML) return
    if (event.target.id === card.id) {
      //console.log(cardText)
      for (let i = 0; i < cardText.length; i++) {
        if (cardText[i].cardId === event.target.id) {
          card.innerHTML = cardText[i].cardText
          card.style.background = 'yellow'
          if (!firstCardValue) {
            firstCardValue = cardText[i].cardText
          } else {
            if (firstCardValue === card.innerHTML) {
              matchMessage.innerHTML = 'Its a Match!'
              //card.style.background = 'green'
            } else {
            }
          }
        }
      }
    }
    // if (card.innerHTML) {
    //   cardText = card.innerHTML
    //   card.innerHTML = ''
    //   card.classList.remove('flipped')
    //   card.style.background = 'red'
    //   hideBtnById('start')
    //   showBtnById('reset')
    //   message.innerHTML = 'Game On!'
    // } else {
    //   for (let i = 0; i < cardText.length; i++) {
    //     card.innerHTML = cardText
    //   }
    //   card.style.background = '#40e0d0'
    // }
  })

  //console.log(cardText)
}
/*
* Function startGame will be called by start button to do the following:
1. preserve the card text in the variable cardText
2. remove the text from the card as if it was flipped on its back
3. change the backGround color of the card
4. hide the start button by calling the function hideBtnById
5. show the reset button by calling the function showBtnById
*/
const startGame = (event) => {
  cards.forEach((card) => {
    cardText.push({ cardId: card.id, cardText: card.innerHTML })
    card.innerHTML = ''
    card.classList.remove('flipped')
    card.style.background = 'red'
    hideBtnById('start')
    showBtnById('reset')
    message.innerHTML = 'Game On!'
  })
}
const resetCard = () => {
  cards.forEach((card) => {
    for (let i = 0; i < cardText.length; i++) {
      if (cardText[i].cardId === card.id) {
        card.innerHTML = cardText[i].cardText
        card.style.background = 'green'
        matchMessage.innerHTML = ''
      }
    }
    hideBtnById('start')
    showBtnById('reset')
    message.innerHTML = `Let's Start!`
  })

  hideBtnById('reset')
  showBtnById('start')
  message.innerHTML = `Let's Start!`
}
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetCard)
cards.forEach((card) => {
  card.addEventListener('click', flipCardsOnFront)
})
