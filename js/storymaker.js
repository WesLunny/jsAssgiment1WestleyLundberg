// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const noun2Button = document.getElementById("noun2");
const adjectiveButton = document.getElementById("adjective");
const verbButton = document.getElementById("verb");
const settingButton = document.getElementById("setting");


// Constants for p tag to display query selectors
const displaySelectedNoun1 = document.getElementById("choosenNoun1");

const displaySelectedNoun2 = document.getElementById("choosenNoun2");

const displaySelectedVerb = document.getElementById("choosenVerb");

const displaySelectedAdjective = document.getElementById("choosenAdjective");

const displaySelectedSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const randomStoryButton = document.getElementById("random");

const displayStoryButton = document.getElementById("playback");

const displayStory = document.getElementById("story");


// Variables for pre-defined arrays
let nounArr = ["Turkey","Mom","Dad","The Dog","My Teacher", "The Elephant","The Cat","goat", "monkey","fish","cow", "frog","bug","worm"];
let adjectiveArr = ["a funny"," a scary","","a goofy","a slimy","a barking", "a fat"];
let verbArr = ["sat on","ate", "danced with","saw","doesn't like", "kissed"];
let settingArr = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];
// Variables for count to grab array elements
let indexer = 0;

/* Functions
-------------------------------------------------- */


function noun1_on_click() {
    // variable to get array element and displaying it
    displaySelectedNoun1.textContent = nounArr[indexer];
    // if-else to change count setting
    if(indexer > nounArr.length){
            indexer = 0;
        }
        else{
            indexer++;
        }
}

function noun2_on_click() {
    displaySelectedNoun2.textContent = nounArr[indexer];
    // if-else to change count setting
    if(indexer > nounArr.length){
            indexer = 0;
        }
        else{
            indexer++;
        }
}

function verb_on_click() {
    
    displaySelectedVerb.textContent = verbArr[indexer];
    // if-else to change count setting
    if(indexer > verbArr.length){
            indexer = 0;
        }
        else{
            indexer++;
        }
}

function adjective_on_click() {
    
    displaySelectedAdjective.textContent = adjectiveArr[indexer];
    // if-else to change count setting
    if(indexer > adjectiveArr.length){
            indexer = 0;
        }
        else{
            indexer++;
        }
}



function setting_on_click() {

    displaySelectedSetting.textContent = settingArr[indexer];
    // if-else to change count setting
    if(indexer > settingArr.length){
            indexer = 0;
        }
        else{
            indexer++;
        }
}

// concatenate the user story and display
function playback_on_click() {
    displayStory.textContent = displaySelectedNoun1.textContent + " " + displaySelectedVerb.textContent  + " " + displaySelectedAdjective.textContent + " " + displaySelectedNoun2.textContent + " " + displaySelectedSetting.textContent;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    displaySelectedNoun1.textContent = randomValueFromArray(nounArr);
    displaySelectedNoun2.textContent = randomValueFromArray(nounArr);
    displaySelectedVerb.textContent = randomValueFromArray(verbArr);
    displaySelectedAdjective.textContent = randomValueFromArray(adjectiveArr);
    displaySelectedSetting.textContent = randomValueFromArray(settingArr);
}

//taken from lab 1, gets a random index from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click",noun1_on_click);
noun2Button.addEventListener("click",noun2_on_click);
verbButton.addEventListener("click",verb_on_click);
adjectiveButton.addEventListener("click",adjective_on_click);
settingButton.addEventListener("click", setting_on_click);
randomStoryButton.addEventListener("click",random_on_click);
displayStoryButton.addEventListener("click",playback_on_click);