let container = document.querySelector('#container');
let countAll;

function calculate(gridCalc) {

    countAll = gridCalc * gridCalc;
    let heightWidth = 500/gridCalc-2;

    //draw grid
    for(let i = 0; i < countAll; i++) {
        let paint = document.createElement('div');
        container.appendChild(paint);
        paint.classList.add("paint", "number" + i);
    }

    //add event listeners and change background
    let paintHover = document.querySelectorAll(".paint");

    for(let i = 0; i < paintHover.length; i++) {
        paintHover[i].style.cssText = "height:"+heightWidth + "px;width:" + heightWidth + "px;";
        //event listener for specific square number ("nummer" mit i übergeben)
        paintHover[i].addEventListener("mouseover", () => changeBackground(i));
    }
}

calculate(10);

function changeBackground(nummer) {
    let square = document.querySelector(".number" + nummer);
    square.classList.add("background");
}

//changeGrid
const gridBtn = document.querySelector("#gridBtn");
gridBtn.addEventListener("click", changeGrid);

function changeGrid() {
    const numberGrid = prompt("Please choose grid number");
    //remove grid
    for(let i = 0; i < countAll; i++) {
        let paint = document.querySelector('.paint');
        container.removeChild(paint);
    };
    //make new grid
    calculate(numberGrid);
}

//the erase button
const btn = document.querySelector("#btn");
btn.addEventListener("click", erase);

function erase() {
    console.log("erased");
    let allSquares = document.querySelectorAll(".paint");

    for(einElement of allSquares) {
        einElement.classList.remove("background");
    }
}




