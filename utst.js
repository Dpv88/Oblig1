// JavaScript source code
function nyperson(pers) {

    if (antpers >= 0 && antpers <= 6) {
        antpers += pers
    }
    if (antpers == 6) {
        Show()
        return fullt = 'Butikken er nå full!'
    }
    Show()
}

function minus(pers) {
    if (antpers == 0) antpers = 0
    else
        antpers -= pers
    fullt = ''
    Show()
}

function reset() {
    antpers = 0
    fullt = ''
    Show()
}