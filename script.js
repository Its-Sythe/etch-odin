const arrayOfColors = []

function createGrid(size) {
    let space = document.querySelector(".grid-space");
    if (size <= 100) {
        for (let i = 0; i < size; i++) {
            let column = document.createElement("div");
            column.id = "column";
            
            for (let j = 0; j < size; j++){
                let row = document.createElement("div");
                row.className = "row";
                row.style.border = "2px solid black";
                column.appendChild(row);
            }
            space.appendChild(column);
        }
    }
    else {
        alert ("No More than 100!")
    }
}

function hoverGrid() {
    document.querySelectorAll(".row").forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.style = "background-color: red;"
        })
    })
}



createGrid(16);
hoverGrid()
