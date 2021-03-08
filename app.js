var isMobile;
var unSortedArray = [];
let color = ["#6F98A8", "#6F98A8", "#2B8EAD", "#2F454E", "#2B8EAD", "#2F454E", "#BFBFBF", "#BFBFBF", "#6F98A8", "#2F454E"];

screen.width > 375 ? isMobile = false : isMobile = true;


var headerDiv = document.createElement('div'); //header-div-desktop
headerDiv.id = "headerDivId"
isMobile ? headerDiv.classList.add('header-div-mob') : headerDiv.classList.add('header-div-desktop');
headerDiv.innerHTML = "Shuffle and Sort"
document.getElementsByTagName('body')[0].appendChild(headerDiv);

// Created first div for buttons in mobile only
if (isMobile) {
    var firstRowDiv = document.createElement('div');
    firstRowDiv.id = "firstRowDivId"
    firstRowDiv.classList.add('first-row-div-mobile');
    document.getElementsByTagName('body')[0].appendChild(firstRowDiv);
}

// First div for desktop
var parentDiv = document.createElement('div');
parentDiv.id = 'parentDivId';
screen.width < 375 ? parentDiv.className = 'grid-container-mobile' : parentDiv.className = 'grid-container';
document.getElementsByTagName('body')[0].appendChild(parentDiv);

//Create inner div for desktop
for (let i = 1; i < 10; i++) {
    var innerDiv = document.createElement('div');
    innerDiv.id = `item${i}`
    isMobile ? innerDiv.style.backgroundColor = "#EFEFEF" : innerDiv.style.backgroundColor = color[i];
    isMobile ? innerDiv.classList.add('inner-div-mob', 'grid-child') : innerDiv.classList.add('inner-div-desktop', 'grid-child');
    isMobile ? innerDiv.style.borderLeft = "10px solid " + color[i] : "";
    parentDiv.appendChild(innerDiv);
    innerDiv.innerHTML = i;
}

//Div containing buttons , first button -desktop, second button -desktop
if (!isMobile) {
    var buttonDiv = addDivStyle();
    var buttonChildDivEven = addDivStyle();
    var buttonChildDivOdd = addDivStyle();
    parentDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(buttonChildDivOdd);
    buttonDiv.appendChild(buttonChildDivEven);

    //Last Row for Desktop
    let lastRowDiv = document.createElement('div');
    lastRowDiv.className = 'grid-child div-containing-last-row ';
    lastRowDiv.id = "lastRowDivId"
    parentDiv.appendChild(lastRowDiv);
    lastRowDiv.style.backgroundColor = "#EFEFEF";
    lastRowDiv.style.fontStyle = "italic"
    lastRowDiv.innerHTML = "Shuffle and Sort by Keshav";
}

function addDivStyle() {
    let newDiv = document.createElement('div');
    newDiv.id = "buttonDiv"
    newDiv.className = 'grid-child div-containing-buttons'
    newDiv.style.backgroundColor = "#EFEFEF";
    return newDiv;
}

var getButtonDivId = document.getElementById("buttonDiv");

//Shuffle
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    unSortedArray = a;
    return a;
}

//Sort
function sortNumbers(ar) {
    return ar.sort();
}

function createAndStyleButton(buttonName) {
    let newButton = document.createElement("BUTTON");
    newButton.innerHTML = buttonName;
    newButton.style.backgroundColor = "#72C3DC";
    newButton.style.borderColor = "#72C3DC";
    newButton.style.boxShadow = "#72C3DC";
    newButton.style.color = "white";
    isMobile ?  newButton.style.width = "75px" : newButton.style.width = "120px"
    isMobile ?  newButton.style.height = "45px" : newButton.style.height = "30px"
    newButton.style.fontSize = "9px"
    newButton.classList.add('button-corner');
    return newButton;
}

//create shuffle Button
var shuffleButton = createAndStyleButton("SHUFFLE")
isMobile ? shuffleButton.style.marginRight = "10px" : "";
isMobile ? "" : buttonChildDivOdd.appendChild(shuffleButton);

//Shuffle on Button Click
shuffleButton.addEventListener('click', function () {
    let getArr = [];
    const aar = [9, 8, 7, 5, 6, 4, 3, 2, 1]
    getArr = shuffle(aar);
    for (let k = 0; k < getArr.length; k++) {
        document.getElementById(`item${k + 1}`).innerHTML = getArr[k];
    }
});

//create sort Button
let sortButton = createAndStyleButton("SORT")
isMobile ? "" : buttonChildDivEven.appendChild(sortButton);

//Sort on Button Click
sortButton.addEventListener('click', function () {
    let GetSortedArray = sortNumbers(unSortedArray);
    for (let k = 0; k < GetSortedArray.length; k++) {
        document.getElementById(`item${k + 1}`).innerHTML = GetSortedArray[k];
    }
});

if (isMobile) {
    let lastRowDivForMobile = document.createElement('div');
    firstRowDiv.appendChild(shuffleButton);
    firstRowDiv.appendChild(sortButton);
    lastRowDivForMobile.id = "lastRowDivForMobileId"
    parentDiv.appendChild(lastRowDivForMobile);
    lastRowDivForMobile.style.textAlign = "center";
    lastRowDivForMobile.style.fontStyle = "italic"
    lastRowDivForMobile.innerHTML = "Shuffle and Sort by Keshav";
    document.getElementsByTagName("body")[0].style.border = "10px solid #333333";
}

