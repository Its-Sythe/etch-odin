function createGrid(size) {
    let space = document.querySelector(".grid-space");

    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.id = "column";
        
        for (let j = 0; j < size; j++){
            let row = document.createElement("div");
            row.id = "row";
            row.style.border = "2px solid black";
            column.appendChild(row);
        }
        space.appendChild(column);
    }
}

createGrid(16);