// variable declarations
var numSquares = 6;
var colors=generateRandomColors(numSquares);
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var pickedColor=pickColor();
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var levelEasy = document.querySelector("#levelEasy");
var levelHard = document.querySelector("#levelHard");
// variable declaration ends here
colorDisplay.textContent = pickedColor;

levelEasy.addEventListener("click", function(){
    levelEasy.classList.add("selected");
    levelHard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

levelHard.addEventListener("click", function(){
    levelHard.classList.add("selected");
    levelEasy.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        
    }
});

reset.addEventListener("click", function(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    reset.textContent="New Colors";
    h1.style.background="steelblue";
});

for(var i=0;i<squares.length;i++){
    // setting colors to squares
    squares[i].style.background=colors[i];

    // add event listener to squares
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent="CORRECT!";
            changeColor(pickedColor);
            h1.style.background=clickedColor;
            reset.textContent="Play Agian?";
        } 
        else{
            messageDisplay.textContent="TRY AGAIN";
            this.style.background="#232323";
        }
    });
}



// functions
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // for red 0 to 255
    var r = Math.floor(Math.random()*256);
    // for green 0 to 255
    var g = Math.floor(Math.random()*256);
    // for blue 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}
