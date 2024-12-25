const input = document.getElementById('passwordInput');
const btnExit = document.getElementById('exit');

var img = document.getElementById('terminal');
var terminal = new Audio('sfx/terminal.wav');
var kaching = new Audio('sfx/kaching.wav');

terminal.loop = true;
terminal.play();



input.addEventListener('keypress', function(event) { 
    if (input.value == "samisgay") {
        img.src = 'img/terminal_accepted.png'
        kaching.play();
    }
});

btnExit.addEventListener('click', function(event) { 
    location.href = "https://google.co.uk";
});