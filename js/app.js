/*-------------------------------- Constants --------------------------------*/
//const cards = document.querySelectorAll('.card')
const container = document.querySelector('#container')
const message = document.querySelector('#message')
const matchMessage = document.querySelector('#matchMessage')
const levelMessage = document.querySelector('#levelMessage')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const nextBtn = document.querySelector('#next')
const gameMode = document.querySelector('#gameMode')
const modeLabel = document.querySelector('#modeLabel')
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
  },
  {
    letter: 'ذ',
    letterName: 'ذال',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20230125/original/pngtree-vector-clip-art-of-fly-png-image_8930063.png'
  },
  {
    letter: 'ذ',
    letterName: 'ذال',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20230125/original/pngtree-vector-clip-art-of-fly-png-image_8930063.png'
  },
  {
    letter: 'ر',
    letterName: 'راء',
    imageUrl:
      'https://e7.pngegg.com/pngimages/619/720/png-clipart-pomegranate-pomegranate-natural-foods-frutti-di-bosco.png'
  },
  {
    letter: 'ر',
    letterName: 'راء',
    imageUrl:
      'https://e7.pngegg.com/pngimages/619/720/png-clipart-pomegranate-pomegranate-natural-foods-frutti-di-bosco.png'
  },
  {
    letter: 'ز',
    letterName: 'زاي',
    imageUrl:
      'https://img.freepik.com/free-vector/floral-background-design_1262-2549.jpg?semt=ais_hybrid'
  },
  {
    letter: 'ز',
    letterName: 'زاي',
    imageUrl:
      'https://img.freepik.com/free-vector/floral-background-design_1262-2549.jpg?semt=ais_hybrid'
  },
  {
    letter: 'س',
    letterName: 'سين',
    imageUrl:
      'https://img.freepik.com/free-vector/cute-fish-sea-animal-cartoon-sticker_1308-61457.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728000000&semt=ais_hybrid'
  },
  {
    letter: 'س',
    letterName: 'سين',
    imageUrl:
      'https://img.freepik.com/free-vector/cute-fish-sea-animal-cartoon-sticker_1308-61457.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728000000&semt=ais_hybrid'
  },
  {
    letter: 'ش',
    letterName: 'شين',
    imageUrl: 'https://e7.pngegg.com/pngimages/195/1020/png-clipart-sun-sun.png'
  },
  {
    letter: 'ش',
    letterName: 'شين',
    imageUrl: 'https://e7.pngegg.com/pngimages/195/1020/png-clipart-sun-sun.png'
  },
  {
    letter: 'ص',
    letterName: 'صاد',
    imageUrl:
      'https://img.freepik.com/premium-vector/drawing-cactus-with-white-background-with-drawing-cactus-it_1310786-1199.jpg'
  },
  {
    letter: 'ص',
    letterName: 'صاد',
    imageUrl:
      'https://img.freepik.com/premium-vector/drawing-cactus-with-white-background-with-drawing-cactus-it_1310786-1199.jpg'
  },
  {
    letter: 'ض',
    letterName: 'ضاد',
    imageUrl:
      'https://img.freepik.com/free-vector/green-frog-white-background_1308-110146.jpg'
  },
  {
    letter: 'ض',
    letterName: 'ضاد',
    imageUrl:
      'https://img.freepik.com/free-vector/green-frog-white-background_1308-110146.jpg'
  },
  {
    letter: 'ط',
    letterName: 'طاء',
    imageUrl:
      'https://img.lovepik.com/free-png/20220109/lovepik-drum-png-image_401360512_wh860.png'
  },
  {
    letter: 'ط',
    letterName: 'طاء',
    imageUrl:
      'https://img.lovepik.com/free-png/20220109/lovepik-drum-png-image_401360512_wh860.png'
  },
  {
    letter: 'ظ',
    letterName: 'ظاء',
    imageUrl:
      'https://img.freepik.com/premium-vector/envelopes-clipart-vector-art-illustration_761413-28790.jpg'
  },
  {
    letter: 'ظ',
    letterName: 'ظاء',
    imageUrl:
      'https://img.freepik.com/premium-vector/envelopes-clipart-vector-art-illustration_761413-28790.jpg'
  },
  {
    letter: 'ع',
    letterName: 'عين',
    imageUrl:
      'https://img.lovepik.com/free-png/20210928/lovepik-hand-drawn-eyes-png-image_401673829_wh1200.png'
  },
  {
    letter: 'ع',
    letterName: 'عين',
    imageUrl:
      'https://img.lovepik.com/free-png/20210928/lovepik-hand-drawn-eyes-png-image_401673829_wh1200.png'
  },
  {
    letter: 'غ',
    letterName: 'غين',
    imageUrl:
      'https://img.lovepik.com/png/20231111/crow-clipart-black-crow-is-standing-in-water-on-a_556617_wh860.png'
  },
  {
    letter: 'غ',
    letterName: 'غين',
    imageUrl:
      'https://img.lovepik.com/png/20231111/crow-clipart-black-crow-is-standing-in-water-on-a_556617_wh860.png'
  }
]

//console.log(message.innerHTML)
/*---------------------------- Variables (state) ----------------------------*/
let cardsText = []
let firstCardClicked
let gameLetters = []
let gameImages = []
let level = parseInt(sessionStorage.getItem('level'), 10)
if (!level) level = 1
let numberOfCards = 0
let cards = []
let arabicAlphabit = []
let noClick = false
let numberOfMatches = 0
let mode = sessionStorage.getItem('mode')
if (!mode) mode = 1
console.log('+++++++++++++++', mode)

//let secondCardValue
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const checkLevel = () => {
  //console.log(level)

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
  levelMessage.innerHTML = 'Level: ' + level
  arabicAlphabit = []
  arabicAlphabit = fullArabicAlphabit.slice(0, numberOfCards)
  //console.log('===================>>>', fullArabicAlphabit)
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
  console.log('shuffleLetters Mode: ', mode)

  gameLetters = []
  gameImages = []
  arabicAlphabit.forEach((lettersDataObj) => {
    switch (mode) {
      case '1':
        console.log('Switch Case Mode: ', mode)
        gameLetters.push(lettersDataObj.letter)
        if (gameLetters) shuffle(gameLetters)
        break
      case '2':
        gameImages.push(lettersDataObj.imageUrl)
        if (gameImages) shuffle(gameImages)
        break
      case '3':
        gameImages.push({
          imgUrl: lettersDataObj.imageUrl,
          letter: lettersDataObj.letter
        })
        if (gameImages) shuffle(gameImages)
        break
    }
  })

  console.log(gameImages)
}
const drawCards = () => {
  if (cards) cards = []
  for (let i = 0; i < numberOfCards; i++) {
    if (mode === '1') {
      console.log('------------------', gameImages)
      gameLetters.forEach((letter, index) => {
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
    } else if (mode === '2') {
      // console.log('img array')

      gameImages.forEach((imageUrl, index) => {
        if (i === index) {
          let letterDiv = document.createElement('div')
          let letterImg = document.createElement('img')
          letterImg.setAttribute('src', imageUrl)
          letterImg.setAttribute('class', 'cardImage')
          letterDiv.appendChild(letterImg)
          letterDiv.id = i
          letterDiv.classList.add('card', 'flipped')
          letterDiv.style.background = '#ffffff'
          container.appendChild(letterDiv)
          cards.push(letterDiv)
        }

        //`<div class="card flipped" id="${i + 1}">${letter}</div>`
      })
    } else if (mode === '3') {
      // console.log('img array')

      gameImages.forEach((obj, index) => {
        if (i === index) {
          let letterDiv = document.createElement('div')
          let letterImg = document.createElement('img')
          let letterLabel = document.createElement('label')
          letterLabel.innerHTML = obj.letter
          letterLabel.setAttribute('class', 'smallLetter')
          letterImg.setAttribute('src', obj.imgUrl)
          letterImg.setAttribute('class', 'cardImage')
          letterDiv.appendChild(letterImg)
          letterDiv.appendChild(letterLabel)
          letterDiv.id = i
          letterDiv.classList.add('card', 'flipped')
          container.appendChild(letterDiv)
          cards.push(letterDiv)
        }

        //`<div class="card flipped" id="${i + 1}">${letter}</div>`
      })
    }
  }
  addCardClick()
}
const initiate = () => {
  numberOfCards = 0
  numberOfMatches = 0

  modeLabel.innerText = 'Mode: ' + mode
  //console.log(modeLabel)
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
function flipCardsOnFront(event) {
  //console.log(cards[0])
  cards.forEach((card) => {
    if (event.target.id === card.id) {
      if (card.innerHTML || noClick) return
      //console.log(cardText)
      for (let i = 0; i < cardsText.length; i++) {
        if (cardsText[i].cardId === event.target.id) {
          card.innerHTML = cardsText[i].cardText
          card.style.background = 'yellow'
          noClick = true
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
    noClick = false
    firstCardClicked = card
  } else {
    noClick = true
    if (firstCardClicked.innerHTML === card.innerHTML) {
      //console.log('firstCardClicked: ', firstCardClicked.innerHTML)
      // console.log('Second Card Clicked: ', card.innerHTML)
      matchMessage.innerHTML = 'Its a Match!'
      numberOfMatches++
      card.style.background = 'green'
      firstCardClicked.style.background = 'green'
      firstCardClicked = ''
      noClick = false
    } else {
      matchMessage.innerHTML = 'Try Again!'
      flipCardOnBack(card)
    }
    //noClick = false
  }
  console.log('numberOfMatches: ', numberOfMatches)
  console.log('numberOfCards: ', numberOfCards)
  if (numberOfCards / numberOfMatches === 2) {
    matchMessage.innerHTML = 'Yaaaay.... Level Completed!'
    level++
    numberOfMatches = 0
    hideBtnById('reset')
    showBtnById('next')
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
      noClick = false
    }
  }, 2000)
  //noClick = true
}
//noClick = false
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
    //console.log('hi')
    cardsText.push({ cardId: card.id, cardText: card.innerHTML })
    card.innerHTML = ''
    card.classList.remove('flipped')
    card.style.background = 'blue'
    hideBtnById('start')
    showBtnById('reset')
    noClick = false
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
        card.style.background = '#40e0d0'
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
  noClick = false
}
/*

*/
const nextLevel = () => {
  const newCards = document.querySelectorAll('.card')
  newCards.forEach((card) => {
    container.removeChild(card)
  })
  hideBtnById('next')
  matchMessage.innerHTML = ''
  message.innerHTML = `Let's Start!`
  cardsText = []
  firstCardClicked = ''
  noClick = false

  gameLetters = []
  // level = 1
  numberOfCards = 0

  arabicAlphabit = []

  numberOfMatches = 0
  initiate()
  showBtnById('start')
}

function addCardClick() {
  //console.log('Clicked')
  cards.forEach((card) => {
    //

    card.addEventListener('click', flipCardsOnFront)
  })
}
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetCard)
addCardClick()
nextBtn.addEventListener('click', nextLevel)
gameMode.addEventListener('change', () => {
  mode = gameMode.value
  sessionStorage.setItem('mode', mode)
  sessionStorage.setItem('level', level)
  location.reload()
})
