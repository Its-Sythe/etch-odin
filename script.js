let numberOfDivs = 256;

function createGrid() {
    for (let i = 1; i <= numberOfDivs; i++) {
        let divs = document.createElement("div");
        divs.id = "grid-div";
        document.querySelector('.grid-space').appendChild(divs)
    }
}

createGrid();