let number = 0
let getId = document.getElementById("count-el")

function count() {
    number = number + 1
    getId.innerText = number
}
function count0() {
    number = number - 1
    getId.innerText = number
}



