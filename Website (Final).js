var i = 0;
var text = "jeanie ng";
var speed = 150;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        ++i;
        setTimeout(typeWriter, speed);
    }
}

var mobileRhythmGameModal = document.getElementById("mobile-rhythm-game-modal");
var mobileRhythmGamebtn = document.getElementById("mobile-rhythm-game");
var span = document.getElementsByClassName("close")[0];

mobileRhythmGamebtn.onclick = function() {
    mobileRhythmGameModal.style.display = "block";
}

span.onclick = function() {
    mobileRhythmGameModal.style.display = "none";
}