document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer

    const winningArrays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]

            //check those squares to see if they all have the class of player-one
            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one')
            ) {
                result.innerHTML = 'Player One Wins!'
            }
            //check those squares to see if they all have the class of player-two
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two')
            ) {
                result.innerHTML = 'Player Two Wins!'
            }
        }
    }

    Button2.onclick = function () {
        currentPlayer = "X";
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = () => {
                if (!squares[i].classList.contains('taken')) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer = "AI"
                    displayCurrentPlayer.innerHTML = currentPlayer
                    for (let j = 0; j < squares.length; j++) {
                        if (!squares[j].classList.contains('taken') && currentPlayer == "AI") {
                            squares[j].classList.add('taken')
                            squares[j].classList.add('player-one')
                            currentPlayer = "X"
                            displayCurrentPlayer.innerHTML = currentPlayer
                        }
                    }
                } else alert('cant go here')
                checkBoard()
            }
        }
    }

    Button1.onclick = function () {
        currentPlayer = "O";
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = () => {
                if (!squares[i].classList.contains('taken')) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = "AI"
                    displayCurrentPlayer.innerHTML = currentPlayer
                    for (let j = 0; j < squares.length; j++) {
                        if (!squares[j].classList.contains('taken') && currentPlayer == "AI") {
                            squares[j].classList.add('taken')
                            squares[j].classList.add('player-two')
                            currentPlayer = "O"
                            displayCurrentPlayer.innerHTML = currentPlayer
                        }
                    }
                } else alert('cant go here')
                checkBoard()
            }
        }
    }

})