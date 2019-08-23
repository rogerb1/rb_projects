"use strict";

const equation = (state) => ({
    multiply() {
        let equation = state.number * state.numberTwo;
        document.getElementById('numbers').textContent = (state.number + ' x ' + state.numberTwo);
        return equation;
    }
});

function numbers(number, numberTwo) {
    let state = {
        number,
        numberTwo
    }

    return Object.assign(
        equation(state)
    )
}

let test = numbers(Math.floor(Math.random() * 12), Math.floor(Math.random() * 12));
const answer = test.multiply(0, 0);

const wholeArray = (state) => ({
    createArray() {
        let numberArray = [];
        for (let i = 0; i < 1; i++) {
            numberArray.push(state);
            numberArray.push(state - 2);
            numberArray.push(state + 10);
            numberArray.push(state * 3 - 1);
        }
        return numberArray;
    }
});

// Takes the returned answer alues as a parameter
function array() {
    return Object.assign(
        wholeArray(state)
    )
}

let storeValue = wholeArray(answer);
let producedArray = storeValue.createArray();
let newArray = [...producedArray];

const shuffleArray = (state) => ({
    shuffledArray() {
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * newArray.length)
            let temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        const zero = document.getElementById('zero').textContent = (newArray[0]);
        const one = document.getElementById('one').textContent = (newArray[1]);
        const two = document.getElementById('two').textContent = (newArray[2]);
        const three = document.getElementById('three').textContent = (newArray[3]);
    }
});

function sArray(newArray) {
    let state = {
        newArray
    }

    return Object.assign(
        shuffleArray(state)
    )
}

let hey = sArray(newArray);
hey.shuffledArray();

let cards = Array.from(document.getElementsByClassName('button'));
cards.forEach(card => {
    card.addEventListener('click', () => {
        let cardNumber = parseInt(card.innerHTML);
        if (cardNumber === answer) {
            alert('Correct, the answer is ' + cardNumber);
        } else {
            alert('Wrong, you chose ' + cardNumber + " the answer is " + answer)
        }
        location.reload();
    });
});