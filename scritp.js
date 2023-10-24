let boxs = document.querySelectorAll('.box')
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let newGame = document.querySelector('.newGame')

let x1 = document.querySelector('.box1')
let x2 = document.querySelector('.box2')
let x3 = document.querySelector('.box3')
let x4 = document.querySelector('.box4')
let x5 = document.querySelector('.box5')
let x6 = document.querySelector('.box6')
let x7 = document.querySelector('.box7')
let x8 = document.querySelector('.box8')
let x9 = document.querySelector('.box9')

boxs.forEach(function (box) {
    box.addEventListener('click', function (e) {
        if (e.target.classList.contains('box')) {
            box.textContent = 'x'
            box.classList.remove('box')

            let boxs1 = document.querySelectorAll('.box')
            let boxs1Count = document.querySelectorAll('.box').length


            let od = boxs1[Math.floor(Math.random() * boxs1Count)]
            od.textContent = 'o'

            for (let j = 0; j < boxs1.length; j++) {
                if (boxs1[j].textContent == 'o') {
                    boxs1[j].classList.remove('box')
                }
            }


            if (x1.textContent == 'x' && x2.textContent == 'x' && x3.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x4.textContent == 'x' && x5.textContent == 'x' && x6.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x7.textContent == 'x' && x8.textContent == 'x' && x9.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x1.textContent == 'x' && x4.textContent == 'x' && x7.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x2.textContent == 'x' && x5.textContent == 'x' && x8.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x3.textContent == 'x' && x6.textContent == 'x' && x9.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x1.textContent == 'x' && x5.textContent == 'x' && x9.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x3.textContent == 'x' && x5.textContent == 'x' && x7.textContent == 'x') {
                win.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }

            if (x1.textContent == 'o' && x2.textContent == 'o' && x3.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x4.textContent == 'o' && x5.textContent == 'o' && x6.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x7.textContent == 'o' && x8.textContent == 'o' && x9.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x1.textContent == 'o' && x4.textContent == 'o' && x7.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x2.textContent == 'o' && x5.textContent == 'o' && x8.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x3.textContent == 'o' && x6.textContent == 'o' && x9.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x1.textContent == 'o' && x5.textContent == 'o' && x9.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }
            if (x3.textContent == 'o' && x5.textContent == 'o' && x7.textContent == 'o') {
                lose.style.display = 'block'
                newGame.style.display = 'block'
                close()
            }


        }

    })

})



function close() {
    for (let j = 0; j < 9; j++) {
        if (win.style.display = 'block' || lose.style.display == 'block') {
            boxs[j].classList.remove('box')
        }
    }
}


newGame.addEventListener('click', function () {
    location.reload()
})




