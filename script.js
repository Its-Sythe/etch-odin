function getSize() {
    let btn = document.getElementById("size-submit");
    btn.addEventListener("click", () => {
        let size = document.getElementById("size").value;
        if (size <= 100 && size > 0) {
            createGrid(size);
            hoverGrid();
        } else {
            alert("Please enter a grid size between 1 and 100.");
        }
    })
}

function createGrid(size) {
    let space = document.querySelector(".grid-space");
    space.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.className = "row";
            row.style.border = "1px solid black";
            column.appendChild(row);
        }
        space.appendChild(column);
    }
}

function hoverGrid() {
    document.querySelectorAll(".row").forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "black";
        });
    })
}

function resetGrid() {
    document.getElementById("reset-btn").addEventListener("click", () => {
        location.reload();
    })
}

getSize();
resetGrid();
