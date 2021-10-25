const squareCont = document.getElementById('containerSquare');

for(let i = 1; i <= 100; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareCont.appendChild(square);
}