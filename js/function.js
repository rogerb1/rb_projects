"use strict";

let firstButton = document.querySelector("button");

firstButton.addEventListener("click", displayText);

const textArray = [
    "I hit the cymbals on the drums, it was symbolic.",
    "That bug was bugging me",
    "I'm glad I know sign language, it's pretty handy.",
    "Police have arrested the World tongue-twister Champion. I imagine he'll be given a tough sentence.",
    "That bug was bugging me",
    "My math teacher called me average. How mean!",
    "I just found out I'm colorblind. The diagnosis came completely out of the purple.",
    "The bike didn't go on because it was two tired",
    "I can't believe I got fired from the calendar factory. All I did was take a day off.",
    "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
    "A dinosaur's favorite drink is tea rex",
];

function displayText() {
    let randText = Math.floor(Math.random() * textArray.length);
    document.querySelector(".about-2-title").textContent = textArray[randText];
}

