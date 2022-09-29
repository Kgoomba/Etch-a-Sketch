const container = document.querySelector("#container");
const scaleBtn = document.querySelector("#scaleBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const gradientBtn = document.querySelector("#gradientBtn");
const clearBtn = document.querySelector("#clearBtn");

container.classList.add("grid-con");
scaleBtn.classList.add("Btn");
rainbowBtn.classList.add("Btn")
gradientBtn.classList.add("Btn")
clearBtn.classList.add("Btn")

for(i=0; i<256; i++){
    var tile = document.createElement("div");
    tile.className = "blah";
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
            container.appendChild(tile);
      }
    } else {}
});

var btnValue = "black"

rainbowBtn.addEventListener("click", (e) => {
    btnValue = "rainbow"
    colorChg()
})

clearBtn.addEventListener("click", (e) => {
    let oldTiles = document.querySelectorAll(".blah")
        oldTiles.forEach(tile => {
        tile.style.backgroundColor = "white"})
            btnValue = "black"
            colorChg()
})

function randCol(){
    randRGB = Math.floor(Math.random() * 256)
    return randRGB
}

colorChg(btnValue)

function colorChg(){
    if (btnValue == "rainbow"){
        container.addEventListener("mouseover", (e) => 
        e.target.style.backgroundColor = `rgb(${randCol()}, ${randCol()}, ${randCol()}`)
    } else if (btnValue == "black"){
        container.addEventListener("mouseover", (e) =>
        e.target.style.backgroundColor = "black")
    }
/*In here will be the opacity increase clause for the gradientBtn when I've cleared my head enough
to come back and figure it out.*/
}
