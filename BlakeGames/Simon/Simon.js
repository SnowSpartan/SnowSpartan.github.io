document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentScore = document.querySelector('#current-score')
    let currentScore = 0
    let randomNum = (Math.random() * 4)
    let randomArray = new Array()
    let randomLength = 0
    let flag = 0
    console.log(randomNum)


    ButtonPlay.onclick = function () {
        randomArray = new Array();
        randomArray[0] = randomNum;
        randomLength = randomArray.length;
        result.innerHTML = "";

        /*if (randomNum > 0 && randomNum <= 1) {
            randomLength = randomArray.length;
            randomArray[randomLength] = randomNum;

            for (i = 0; i < randomLength; i++) {
                result.innerHTML += randomNum + ", "
            }

            Button1.classList.add('darkR')

            setTimeout(function () {
                console.log('1');
                Button1.classList.remove('darkR')
            }, 1000);

            //randomNum = (Math.random() * 4);
        }

        if (randomNum > 1 && randomNum <= 2) {
            randomLength = randomArray.length;
            randomArray[randomLength] = randomNum;

            for (i = 0; i < randomLength; i++) {
                result.innerHTML += randomNum + ", "
            }

            Button2.classList.add('darkB')

            setTimeout(function () {
                console.log('2');
                Button2.classList.remove('darkB')
            }, 1000);

            //randomNum = (Math.random() * 4);
        }

        if (randomNum > 2 && randomNum <= 3) {
            randomLength = randomArray.length;
            randomArray[randomLength] = randomNum;

            for (i = 0; i < randomLength; i++) {
                result.innerHTML += randomNum + ", "
            }

            Button3.classList.add('darkG')
            setTimeout(function () {
                console.log('3');
                Button3.classList.remove('darkG')
            }, 1000);

            //randomNum = (Math.random() * 4);
        }

        if (randomNum > 3 && randomNum <= 4) {
            randomLength = randomArray.length;
            randomArray[randomLength] = randomNum;

            for (i = 0; i < randomLength; i++) {
                result.innerHTML += randomNum + ", "
            }

            Button4.classList.add('darkY')
            setTimeout(function () {
                console.log('4');
                Button4.classList.remove('darkY')
            }, 1000);

            //randomNum = (Math.random() * 4);
        }*/
        for (i = 0; i < randomLength; i++) {
            randomNum = (Math.random() * 4);
            randomArray[randomLength] = randomNum;
            result.innerHTML += randomNum + ", ";

            if (randomArray[i] > 0 && randomArray[i] <= 1) {
                Button1.classList.add('darkR')

                setTimeout(function () {
                    console.log('1');
                    Button1.classList.remove('darkR')
                }, 1000);

                flag = 1;
                //randomNum = (Math.random() * 4);
            }

            if (randomArray[i] > 1 && randomArray[i] <= 2) {
                Button2.classList.add('darkB')

                setTimeout(function () {
                    console.log('2');
                    Button2.classList.remove('darkB')
                }, 1000);
                flag = 2;
                //randomNum = (Math.random() * 4);
            }

            if (randomArray[i] > 2 && randomArray[i] <= 3) {
                Button3.classList.add('darkG')
                setTimeout(function () {
                    console.log('3');
                    Button3.classList.remove('darkG')
                }, 1000);
                flag = 3;
                //randomNum = (Math.random() * 4);
            }

            if (randomArray[i] > 3 && randomArray[i] <= 4) {
                Button4.classList.add('darkY')
                setTimeout(function () {
                    console.log('4');
                    Button4.classList.remove('darkY')
                }, 1000);
                flag = 4;
                //randomNum = (Math.random() * 4);
            }
        }
        randomLength = randomArray.length;
    }

    Button1.onclick = function () {
        //randomArray = new Array();
        randomArray[0] = randomNum;
        randomLength = randomArray.length;
        if (flag == 1) {
            for (i = 0; i < randomLength; i++) {
                randomNum = (Math.random() * 4);
                randomArray[randomLength] = randomNum;
                result.innerHTML += randomNum + ", ";

                if (randomArray[i] > 0 && randomArray[i] <= 1) {
                    Button1.classList.add('darkR')

                    setTimeout(function () {
                        console.log('1');
                        Button1.classList.remove('darkR')
                    }, 1000);
                    flag = 1;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 1 && randomArray[i] <= 2) {
                    Button2.classList.add('darkB')

                    setTimeout(function () {
                        console.log('2');
                        Button2.classList.remove('darkB')
                    }, 1000);
                    flag = 2;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 2 && randomArray[i] <= 3) {
                    Button3.classList.add('darkG')
                    setTimeout(function () {
                        console.log('3');
                        Button3.classList.remove('darkG')
                    }, 1000);
                    flag = 3;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 3 && randomArray[i] <= 4) {
                    Button4.classList.add('darkY')
                    setTimeout(function () {
                        console.log('4');
                        Button4.classList.remove('darkY')
                    }, 1000);
                    flag = 4;
                    break
                    //randomNum = (Math.random() * 4);
                }
            }
            randomLength = randomArray.length;
        } else {
            result.innerHTML = "You lose";
            randomArray = new Array();
            flag = 0;
        }
    }

    Button2.onclick = function () {
        //randomArray = new Array();
        randomArray[0] = randomNum;
        randomLength = randomArray.length;
        if (flag == 2) {
            for (i = 0; i < randomLength; i++) {
                randomNum = (Math.random() * 4);
                randomArray[randomLength] = randomNum;
                result.innerHTML += randomNum + ", ";

                if (randomArray[i] > 0 && randomArray[i] <= 1) {
                    Button1.classList.add('darkR')

                    setTimeout(function () {
                        console.log('1');
                        Button1.classList.remove('darkR')
                    }, 1000);
                    flag = 1;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 1 && randomArray[i] <= 2) {
                    Button2.classList.add('darkB')

                    setTimeout(function () {
                        console.log('2');
                        Button2.classList.remove('darkB')
                    }, 1000);
                    flag = 2;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 2 && randomArray[i] <= 3) {
                    Button3.classList.add('darkG')
                    setTimeout(function () {
                        console.log('3');
                        Button3.classList.remove('darkG')
                    }, 1000);
                    flag = 3;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 3 && randomArray[i] <= 4) {
                    Button4.classList.add('darkY')
                    setTimeout(function () {
                        console.log('4');
                        Button4.classList.remove('darkY')
                    }, 1000);
                    flag = 4;
                    break
                    //randomNum = (Math.random() * 4);
                }
            }
            randomLength = randomArray.length;
        } else {
            result.innerHTML = "You lose";
            randomArray = new Array();
            flag = 0;
        }
    }

    Button3.onclick = function () {
        //randomArray = new Array();
        randomArray[0] = randomNum;
        randomLength = randomArray.length;
        if (flag == 3) {
            for (i = 0; i < randomLength; i++) {
                randomNum = (Math.random() * 4);
                randomArray[randomLength] = randomNum;
                result.innerHTML += randomNum + ", ";

                if (randomArray[i] > 0 && randomArray[i] <= 1) {
                    Button1.classList.add('darkR')

                    setTimeout(function () {
                        console.log('1');
                        Button1.classList.remove('darkR')
                    }, 1000);
                    flag = 1;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 1 && randomArray[i] <= 2) {
                    Button2.classList.add('darkB')

                    setTimeout(function () {
                        console.log('2');
                        Button2.classList.remove('darkB')
                    }, 1000);
                    flag = 2;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 2 && randomArray[i] <= 3) {
                    Button3.classList.add('darkG')
                    setTimeout(function () {
                        console.log('3');
                        Button3.classList.remove('darkG')
                    }, 1000);
                    flag = 3;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 3 && randomArray[i] <= 4) {
                    Button4.classList.add('darkY')
                    setTimeout(function () {
                        console.log('4');
                        Button4.classList.remove('darkY')
                    }, 1000);
                    flag = 4;
                    break
                    //randomNum = (Math.random() * 4);
                }
            }
            randomLength = randomArray.length;
        } else {
            result.innerHTML = "You lose";
            randomArray = new Array();
            flag = 0;
        }
    }

    Button4.onclick = function () {
        //randomArray = new Array();
        randomArray[0] = randomNum;
        randomLength = randomArray.length;
        if (flag == 4) {
            for (i = 0; i < randomLength; i++) {
                randomNum = (Math.random() * 4);
                randomArray[randomLength] = randomNum;
                result.innerHTML += randomNum + ", ";

                if (randomArray[i] > 0 && randomArray[i] <= 1) {
                    Button1.classList.add('darkR')

                    setTimeout(function () {
                        console.log('1');
                        Button1.classList.remove('darkR')
                    }, 1000);
                    flag = 1;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 1 && randomArray[i] <= 2) {
                    Button2.classList.add('darkB')

                    setTimeout(function () {
                        console.log('2');
                        Button2.classList.remove('darkB')
                    }, 1000);
                    flag = 2;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 2 && randomArray[i] <= 3) {
                    Button3.classList.add('darkG')
                    setTimeout(function () {
                        console.log('3');
                        Button3.classList.remove('darkG')
                    }, 1000);
                    flag = 3;
                    break
                    //randomNum = (Math.random() * 4);
                }

                if (randomArray[i] > 3 && randomArray[i] <= 4) {
                    Button4.classList.add('darkY')
                    setTimeout(function () {
                        console.log('4');
                        Button4.classList.remove('darkY')
                    }, 1000);
                    flag = 4;
                    break
                    //randomNum = (Math.random() * 4);
                }
            }
            randomLength = randomArray.length;
        } else {
            result.innerHTML = "You lose";
            randomArray = new Array();
            flag = 0;
        }
    }
    /*

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
    }*/

})