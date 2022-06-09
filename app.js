

document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'bird',
            img: 'img/bird.png',
        },
        {
            name: 'cat',
            img: 'img/cat.png',
        },
        {
            name: 'cow',
            img: 'img/cow.png',
        },
        {
            name: 'elephant',
            img: 'img/elephant.png',
        },
        {
            name: 'hippo',
            img: 'img/hippo.png',
        },
        {
            name: 'snake',
            img: 'img/snake.png',
        },
        {
            name: 'bird',
            img: 'img/bird.png',
        },
        {
            name: 'cat',
            img: 'img/cat.png',
        },
        {
            name: 'cow',
            img: 'img/cow.png',
        },
        {
            name: 'elephant',
            img: 'img/elephant.png',
        },
        {
            name: 'hippo',
            img: 'img/hippo.png',
        },
        {
            name: 'snake',
            img: 'img/snake.png',
        },
       
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    let cardsPicked = []
    let cardsPickedId = []
    let cardsMatched = []
  
    
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/background.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsPickedId[0]
      const optionTwoId = cardsPickedId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/background.png')
        cards[optionTwoId].setAttribute('src', 'img/background.png')
        
      }
      else if (cardsPicked[0] === cardsPicked[1]) {
        alert('Matched')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsMatched.push(cardsPicked)
      } else {
        cards[optionOneId].setAttribute('src', 'img/background.png')
        cards[optionTwoId].setAttribute('src', 'img/background.png')
        
      }
      cardsPicked = []
      cardsPickedId = []
      resultDisplay.textContent = cardsMatched.length
      if  (cardsMatched.length === cardArray.length/2) {
        resultDisplay.textContent = 'Bravo!'
        let btn = document.createElement("button");
        btn.innerHTML = "Play again";
        btn.type = "reset";
        btn.name = "resetBtn";
        btn.onclick = function () {
          location.reload();
        };
        document.body.appendChild(btn);

       
      }
    }
  
    
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsPicked.push(cardArray[cardId].name)
      cardsPickedId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsPicked.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })