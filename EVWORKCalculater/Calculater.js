var firstDigit;
var operator;
var waitingForLastDigit = false;

function insertDigit(digit) {
    var screen = document.querySelector('input')
    screen.value = digit
    if (!waitingForLastDigit) {
        if (firstDigit) {
            console.log("asdas", firstDigit)
            firstDigit += digit;
            screen.value = firstDigit
        }
        else {
            firstDigit = digit;
            screen.value = firstDigit

        }
    }
    else {
        screen.value += digit

    }
}

function setOperator(params) {
    var screen = document.querySelector('input')
    if (!waitingForLastDigit) {
        operator = params;
        waitingForLastDigit = true;
        screen.value = operator;
    }
    else {
        screen.value = calculate(firstDigit, operator, screen.value)
    }
}

function calculate(first, opert, last) {
    console.log("sad", operator)
    switch (opert) {
        case '+':
            return Number(first) + Number(last)
        case '-':
            return Number(first) - Number(last)
        case '*':
            return Number(first) * Number(last)
        case '/':
            return Number(first) / Number(last)
        default:
            break;
    }
}

var AC = document.querySelector('#AC')
function setAC(){
add.screen.value.innerHTML = '0';
}

var Beraberlik = document.getElementsByClassName("KNOPKALAR is-beraberlik")
function beraberlik() {

}
