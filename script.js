
var currentColorIndex = 0;

function changeColor() {
    var container = document.querySelector('.container');
    
    var colors = ["pink", "blue", "purple"];
    
    container.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}


        