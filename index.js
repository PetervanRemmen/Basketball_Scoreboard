//Home

let score = document.getElementById("score")

let value = 0

function increment1() {
    value += 1
    score.textContent = value
}

function increment2()   {
    value += 2
    score.textContent = value
}

function increment3() {
    value += 3
    score.textContent = value
}

//Guest

let score2 = document.getElementById("score2")

let value2 = 0

function increment1G() {
    value2 += 1
    score2.textContent = value2
}

function increment2G() {
    value2 += 2
    score2.textContent = value2
}

function increment3G() {
    value2 += 3
    score2.textContent = value2
}

//Reset

function reset() {
    score.textContent = 0
    value = 0
    score2.textContent = 0
    value2 = 0
}