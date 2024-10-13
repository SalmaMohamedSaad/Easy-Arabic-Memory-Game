/*-------------------------------- Constants --------------------------------*/
//const cards = document.querySelectorAll('.card')
const container = document.querySelector('#container')
const message = document.querySelector('#message')
const matchMessage = document.querySelector('#matchMessage')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const fullArabicAlphabit = [
  {
    letter: 'أ',
    letterName: 'أَلِفُُ',
    imageUrl:
      'https://t4.ftcdn.net/jpg/07/30/83/53/360_F_730835385_J0IvGqtEhswekk3FTZm01O6oBQsPLnDB.jpg'
  },
  {
    letter: 'أ',
    letterName: 'أَلِفُُ',
    imageUrl:
      'https://t4.ftcdn.net/jpg/07/30/83/53/360_F_730835385_J0IvGqtEhswekk3FTZm01O6oBQsPLnDB.jpg'
  },
  {
    letter: 'ب',
    letterName: 'بَاءُُ',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8N0xoJYaCE2UaUwOVDVQ2D9os_wRKMR_uw&s'
  },
  {
    letter: 'ب',
    letterName: 'بَاءُُ',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8N0xoJYaCE2UaUwOVDVQ2D9os_wRKMR_uw&s'
  },
  {
    letter: 'ت',
    letterName: 'تَاءُُ',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-crocodile-cartoon-clip-art-green-animal-png-image_6683951.png'
  },
  {
    letter: 'ت',
    letterName: 'تَاءُُ',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-crocodile-cartoon-clip-art-green-animal-png-image_6683951.png'
  },
  {
    letter: 'ث',
    letterName: 'ثَاءُُ',
    imageUrl:
      'https://png.pngtree.com/png-vector/20230430/ourmid/pngtree-cute-cartoon-orange-fox-vector-png-image_6686810.png'
  },
  {
    letter: 'ث',
    letterName: 'ثَاءُُ',
    imageUrl:
      'https://png.pngtree.com/png-vector/20230430/ourmid/pngtree-cute-cartoon-orange-fox-vector-png-image_6686810.png'
  },
  {
    letter: 'ج',
    letterName: 'جيم',
    imageUrl:
      'https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-a-bell-vector-or-color-illustration-png-image_2020038.jpg'
  },
  {
    letter: 'ج',
    letterName: 'جيم',
    imageUrl:
      'https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-a-bell-vector-or-color-illustration-png-image_2020038.jpg'
  },
  {
    letter: 'ح',
    letterName: 'حاء',
    imageUrl:
      'https://img.freepik.com/free-vector/brown-horse-cartoon-isolated_1308-140956.jpg'
  },
  {
    letter: 'ح',
    letterName: 'حاء',
    imageUrl:
      'https://img.freepik.com/free-vector/brown-horse-cartoon-isolated_1308-140956.jpg'
  },
  {
    letter: 'خ',
    letterName: 'خاء',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20190520/original/pngtree-yellow-tent-beautiful-tent-tent-illustration-cartoon-tent-png-image_3866862.jpg'
  },
  {
    letter: 'خ',
    letterName: 'خاء',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20190520/original/pngtree-yellow-tent-beautiful-tent-tent-illustration-cartoon-tent-png-image_3866862.jpg'
  },
  {
    letter: 'د',
    letterName: 'دال',
    imageUrl:
      'https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-cute-chicken-cartoon-illustration-png-image_2184671.jpg'
  },
  {
    letter: 'د',
    letterName: 'دال',
    imageUrl:
      'https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-cute-chicken-cartoon-illustration-png-image_2184671.jpg'
  }
]

//console.log(message.innerHTML)
/*---------------------------- Variables (state) ----------------------------*/
let cardsText = []
let firstCardClicked
let gameLetters = []
let level = 2
let numberOfCards = 0
let cards = []
let arabicAlphabit = []
//let secondCardValue
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const checkLevel = () => {
  switch (level) {
    case 1:
      numberOfCards = 4

      break
    case 2:
      numberOfCards = 8
      break
    case 3:
      numberOfCards = 12
      break
    case 4:
      numberOfCards = 16
      break
    case 5:
      numberOfCards = 20
      break
    case 6:
      numberOfCards = 24
      break
    case 7:
      numberOfCards = 28
      break
  }
  arabicAlphabit = fullArabicAlphabit.slice(0, numberOfCards)
  //console.log('===================>>>', fullArabicAlphabit)
  //console.log('===================>>>', arabicAlphabit)
}
/*
Shuffling function using  Fisher-Yates shuffle algorithm from the following link
https://javascript.info/task/shuffle#:~:text=sort%20(%20(%20)%20%3D%3E%20Math,sorting%20function%20reorders%20elements%20randomly.
*/
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
const shuffleLetters = () => {
  arabicAlphabit.forEach((lettersDataObj) => {
    gameLetters.push(lettersDataObj.letter)
    if (gameLetters) shuffle(gameLetters)
  })

  //console.log(gameLetters)
}
const drawCards = () => {
  //console.log('------------------', gameLetters)

  for (let i = 0; i < numberOfCards; i++) {
    gameLetters.forEach((letter, index) => {
      // console.log(i)
      if (i === index) {
        let letterDiv = document.createElement('div')
        letterDiv.innerHTML = letter
        letterDiv.id = i
        letterDiv.classList.add('card', 'flipped')
        container.appendChild(letterDiv)
        cards.push(letterDiv)
      }

      //`<div class="card flipped" id="${i + 1}">${letter}</div>`
    })
  }
}
const initiate = () => {
  checkLevel()
  shuffleLetters()
  drawCards()
  //console.log(numberOfCards, '===========')
}
initiate()
/*

*/
const hideBtnById = (id) => {
  const btn = document.querySelector(`#${id}`)
  // console.log(id)
  btn.style.display = 'none'
}
const showBtnById = (id) => {
  const btn = document.querySelector(`#${id}`)
  //console.log(btn.style)
  btn.style.display = 'block'
}
/*
* Function flipCardsOnFront will be called by the onClick event of the card to do the following :
1. loop over the cards array 
2. Select the clicked card from the Cards array by matching its id 
3. Check if the clicked card text already displayed, if it is the function will return 
4. loop over the cardsText global array to return the card text by matching its id
5. change the displayed card background to yellow
6. call the checkMatch function
7. If the checkMatch function changed the matchMessage to "Try Again!" it will call the flipCardOnBack function
  

*/
const flipCardsOnFront = (event) => {
  //console.log(cards[0])
  cards.forEach((card) => {
    if (event.target.id === card.id) {
      if (card.innerHTML) return
      //console.log(cardText)
      for (let i = 0; i < cardsText.length; i++) {
        if (cardsText[i].cardId === event.target.id) {
          card.innerHTML = cardsText[i].cardText
          card.style.background = 'yellow'
          checkMatch(card)
        }
      }
    }
    //if (matchMessage.innerHTML === 'Try Again!') flipCardOnBack(card)
  })
}
/*
Function checkMatch takes the card clicked and do as follows:
1. Check if there is another card open already, if not it stores the card clicked in the firstCardClicked global variable 
2. If there is another card open it compares the innerHTML of both cards 
3. If the cards match it set the matchMessage to "Its a Match!" change both cards background to green and set the global variable firstCardClicked to null value
4. If the cards do not match it set the matchMessage to "Try Again!"
*/
const checkMatch = (card) => {
  if (!firstCardClicked) {
    firstCardClicked = card
  } else {
    if (firstCardClicked.innerHTML === card.innerHTML) {
      matchMessage.innerHTML = 'Its a Match!'
      card.style.background = 'green'
      firstCardClicked.style.background = 'green'
      firstCardClicked = ''
    } else {
      matchMessage.innerHTML = 'Try Again!'
      flipCardOnBack(card)
    }
  }
}
/*
* flipCardOnBack function will be called by the checkMatch function in case the two cards do not match to flip them back
* It will setTimeout to 2 seconds before it do the following:
1. Remove the text from both cards
2. Change their background back to blue
3. Remove the matchMessage content
4. Set the firstCardClicked global variable to null value
*/
const flipCardOnBack = (secondCard) => {
  //console.log(cardsText)
  setTimeout(() => {
    if (secondCard && firstCardClicked) {
      secondCard.innerHTML = ''
      secondCard.style.background = 'blue'
      firstCardClicked.innerHTML = ''
      firstCardClicked.style.background = 'blue'
      matchMessage.innerHTML = ''
      firstCardClicked = ''
    }
  }, 2000)
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
    console.log('hi')
    cardsText.push({ cardId: card.id, cardText: card.innerHTML })
    card.innerHTML = ''
    card.classList.remove('flipped')
    card.style.background = 'blue'
    hideBtnById('start')
    showBtnById('reset')
    message.innerHTML = 'Game On!'
  })
}
/*
resetCard function will be called by the Reset button to do as follows:
1. Loop over the cards array and the cardsText array and match their elements by id
2. Display cards text 
3. Change all cards background to green
4. Reset matchMessage to null
5. hide the Reset Button
6. Show the Start Button
7. Reset the matchMessage to null
8. Reset the message content to "Let's Start!"
9. Reset the cardsText to null value
10. Reset the firstCardClicked to null value 
*/
const resetCard = () => {
  cards.forEach((card) => {
    for (let i = 0; i < cardsText.length; i++) {
      if (cardsText[i].cardId === card.id) {
        card.innerHTML = cardsText[i].cardText
        card.style.background = 'green'
        matchMessage.innerHTML = ''
      }
    }
  })
  hideBtnById('reset')
  showBtnById('start')
  matchMessage.innerHTML = ''
  message.innerHTML = `Let's Start!`
  cardsText = []
  firstCardClicked = ''
}

/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetCard)
cards.forEach((card) => {
  card.addEventListener('click', flipCardsOnFront)
})
