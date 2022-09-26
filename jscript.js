const container = document.querySelector("#container");

container.classList.add("grid-con");

const scaleBtn = document.querySelector("#scaleBtn");

scaleBtn.classList.add("scaleBtn");

/*for(i=0; i<256; i++){
    var tile = document.createElement("div");
    tile.className = "blah";
    container.appendChild(tile);
}*/

container.addEventListener("mouseover", (e) =>  e.target.style.backgroundColor = "red");

scaleBtn.addEventListener("click", (e) => {
    let scale = prompt("How many squares per side of the new grid?")});






