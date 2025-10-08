const  container = document.getElementById("container");
container.classList.add("container");

const settingButton = document.getElementById("settingButton");
settingButton.classList.add("settingButton");

const pastelsButton = document.getElementById("pastels");
const redsButton = document.getElementById("reds");

let colorPicker;

pastelsButton.addEventListener("click", event => {
    colorPicker = "pastels";
})

redsButton.addEventListener("click", event => {
    colorPicker = "reds";
})

function colorRandomizer(string) {
    if (string === undefined) {
        return "black";
    } else if (string === "pastels") {
    let colorNumber = Math.floor(Math.random() * 5);
    let pastelColor;
    switch(colorNumber) {
        case 0: return pastelColor = "#DABBE0";
        case 1: return pastelColor = "#EEBFD1";
        case 2: return pastelColor = "#ECAAC2";
        case 3: return pastelColor = "#BED1E3";
        case 4: return pastelColor = "#93AECA";
    };
    } else if (string === "reds") {
    let colorNumber = Math.floor(Math.random() * 5);
    let pastelColor;
    switch(colorNumber) {
        case 0: return pastelColor = "#4D0213";
        case 1: return pastelColor = "#ce4170ff";
        case 2: return pastelColor = "#810100";
        case 3: return pastelColor = "#f38e9fff";
        case 4: return pastelColor = "#AC1634";
    };
    }
};

let resolution = 16;

const createRow = function (number) {
    for (let i = 0; i < number; i++)
    {
let div = document.createElement("div");
div.classList.add("div")
div.style.display = "flex";
div.style.width = (960/resolution) - 2 + "px";
div.style.height = (960/resolution) - 2 + "px";
div.style.backgroundColor = "white";
div.style.borderStyle = "solid";
div.style.borderColor = "black";
div.style.borderWidth = "1px";

div.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = colorRandomizer(colorPicker);
})
container.appendChild(div);
    }
}

const createGrid = function (number) {
    container.replaceChildren();
    for (let i = 0; i < number; i++)
    {
        createRow(resolution);
    }
}

createGrid(resolution);

function askUser() {
    resolution = parseInt(prompt("How many squares per width?"), 10);
    while (resolution > 100) {
        resolution = parseInt(prompt("How many squares per width?"), 10);
    };
    console.log(resolution);
    createGrid(resolution);
}

settingButton.addEventListener("click", askUser);
