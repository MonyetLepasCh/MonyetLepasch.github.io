var img = document.getElementById("ame1");
var count = document.getElementById("score");
var score = 0;
var audio1 = new Audio('ame.mp3');
var audio2 = new Audio('oh.mp3');

document.addEventListener('contextmenu', event => event.preventDefault());

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'ame2.png';
    const randoms = Math.floor(Math.random() * 2) + 1
    if(randoms == 1){
        audio1.play();
    }else{
        audio2.play();
    }
});
    
img.addEventListener("mouseup", function(){
    img.src = 'ame1.png';
    const randoms = Math.floor(Math.random() * 2) + 1
    if(randoms == 1){
        audio1.play();
    }else{
        audio2.play();
    }
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'ame2.png';
    const randoms = Math.floor(Math.random() * 2) + 1
    if(randoms == 1){
        audio1.play();
    }else{
        audio2.play();
    }
});

img.addEventListener("touchmove", function(){
    img.src = 'ame1.png';
    const randoms = Math.floor(Math.random() * 2) + 1
    if(randoms == 1){
        audio1.play();
    }else{
        audio2.play();
    }
});

function increaseScore(){
    score++;
    count.innerHTML = score;
}
