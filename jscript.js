const container = document.querySelector("#container");

container.classList.add("grid-con");

const scaleBtn = document.querySelector("#scaleBtn");

scaleBtn.classList.add("scaleBtn");

for(i=0; i<256; i++){
    var tile = document.createElement("div");
    tile.className = "blah";
    tile.addEventListener("mouseover", (e) =>  e.target.style.backgroundColor = "red");
    container.appendChild(tile);
}

var gridSize = 256

scaleBtn.addEventListener("click", (e) => {
    /*A do...while loop was used to repeat the prompt to the user if they input
    something that didn't meet the requirements. This works, but causes the cancel
    button to repeat the prompt instead of exiting. This should be revised later.*/
    do { 
        var scale = prompt("Enter the number of tiles per side. Please enter a number between 16-100.")
    } while (scale < 16 || scale > 100 || isNaN(scale) == true)
        if (scale > 15 && scale <101 && isNaN(scale) == false){
            let oldTiles = document.querySelectorAll(".blah")
            oldTiles.forEach(tile => {
                tile.remove()
            });
        gridSize = scale * scale;
        container.setAttribute("style", `grid-template-columns: repeat(${scale}, 1fr); 
            grid-template-rows: repeat(${scale}, 1fr);`);
        for(i=0; i<gridSize; i++){
            var tile = document.createElement("div");
            tile.className = "blah";
            tile.addEventListener("mouseover", (e) =>  e.target.style.backgroundColor = "red");
            container.appendChild(tile);
      }
    } else {}
});

