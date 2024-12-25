// Author: Jagjeet Reehal
const mainImage = document.getElementById('image');

const btnFirstDoor = document.getElementById('btnFirstDoor');
const btnSecondDoor = document.getElementById('btnSecondDoor');

const buttons = document.querySelectorAll('button');

var amb = new Audio('sfx/ambience.wav');
var walk = new Audio('sfx/walking.wav');

function switchRoom(id) {
    console.log(id);
    walk.play();

    switch (id) {
        case 'btnFirstDoor': 
            mainImage.src = "img/first_door.png";
            hideAllButtons();
            btnFinalDoor2.hidden = false;
            amb.loop = true;
            amb.play();
            break;
        case 'btnSecondDoor':
            mainImage.src = "img/second_door.png";
            btnFirstDoor.hidden = true;
            btnSecondDoor.hidden = true;
            btnThirdDoor.hidden = false;
            amb.loop = true;
            amb.play();
            break;
        case 'btnThirdDoor':
            mainImage.src = "img/third_door.png";
            btnThirdDoor.hidden = true;
            btnFourthDoor.hidden = false;
            break;
        case 'btnFourthDoor':
            mainImage.src = "img/fourth_door.png";
            btnFourthDoor.hidden = true;
            btnFifthDoor.hidden = false;
            break;
        case 'btnFifthDoor':
            mainImage.src = "img/fifth_door.png";
            btnFifthDoor.hidden = true;
            btnSixthDoor.hidden = false;
            break;
        case 'btnSixthDoor':
            mainImage.src = 'img/sixth_door.png';
            btnSixthDoor.hidden = true;
            btnSeventhDoor.hidden = false;
            break;
        case 'btnSeventhDoor':
            mainImage.src = 'img/seventh_door.png'
            btnSeventhDoor.hidden = true;
            btnFinalDoor.hidden = false;
            break;
        case 'btnFinalDoor':
            mainImage.src = 'img/final_door.png'
            btnFinalDoor.hidden = true;
            btnFinalDoor2.hidden = true;
            btnTerminal.hidden = false;
            break;
        case 'btnFinalDoor2':
            mainImage.src = 'img/final_door.png'
            btnFinalDoor.hidden = true;
            btnFinalDoor2.hidden = true;
            btnTerminal.hidden = false;
            break;
        case 'btnTerminal':
            const newUrl = 'index2.html'
            document.location.href = newUrl;
            break;
        default:
            break;
    }
    console.log("room switched");    
}

function hideAllButtons() {
    Array.from(buttons).forEach(button => {button.hidden = true})
}

// create array from buttons NodeList and for each button element, execute the following function.
Array.from(buttons).forEach(button => {button.addEventListener("click", function(event) {switchRoom(button.id)})})
hideAllButtons();

btnFirstDoor.hidden = false;
btnSecondDoor.hidden = false;
// btnThirdDoor.hidden = false;
// btnFourthDoor.hidden = false;
// btnFifthDoor.hidden = false;
// btnSixthDoor.hidden = false;
// btnSeventhDoor.hidden = false;
// btnFinalDoor.hidden = false;
// btnFinalDoor2.hidden = false;
// btnTerminal.hidden = false;

// console.log(buttons)
// btnFirstDoor.addEventListener('click', function() { switchRoom(btnFirstDoor.id)});
// btnSecondDoor.addEventListener('click', function() { switchRoom(btnSecondDoor.id)});
