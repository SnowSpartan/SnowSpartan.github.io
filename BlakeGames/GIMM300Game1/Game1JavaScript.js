document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/Athena.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/Medusa.jpeg'
        },
        {
            name: 'ice-cream',
            img: 'images/Nike.jpg'
        },
        {
            name: 'pizza',
            img: 'images/Myron.jpg'
        },
        {
            name: 'milkshake',
            img: 'images/Warrior.jpg'
        },
        {
            name: 'hotdog',
            img: 'images/Poseidon.jpg'
        },
        {
            name: 'fries',
            img: 'images/Athena.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/Medusa.jpeg'
        },
        {
            name: 'ice-cream',
            img: 'images/Nike.jpg'
        },
        {
            name: 'pizza',
            img: 'images/Myron.jpg'
        },
        {
            name: 'milkshake',
            img: 'images/Warrior.jpg'
        },
        {
            name: 'hotdog',
            img: 'images/Poseidon.jpg'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/CoatOfArms.jpg')
            card.setAttribute('data-id', i)
            card.setAttribute('width', 100)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/CoatOfArms.jpg')
            cards[optionTwoId].setAttribute('src', 'images/CoatOfArms.jpg')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/CoatOfArms.jpg')
            cards[optionTwoId].setAttribute('src', 'images/CoatOfArms.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})