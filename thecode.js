// the real code goes here

const container = document.querySelector("#container")
let horizontalSize = 16;
let verticalSize = 16;

// start function

function start(horizontalSize, verticalSize)
{
    displayButton();
    displayGrid(horizontalSize, verticalSize);
}

// hopefully this function will display the button for changing the size of the grid
function displayButton()
{
    const gridSizeBtn = document.createElement("button");
    gridSizeBtn.textContent = "Change the grid size!";
    container.appendChild(gridSizeBtn);
    gridSizeBtn.addEventListener("click", function()
    {
        let newHorizontalSize = prompt("How many squares do you want horizonatally?");
        let newVerticalSize = prompt("How many squares do you want vertically?");

        if(newHorizontalSize ==- null || newVerticalSize === null)
        {
            return;
        }
        if(newHorizontalSize > 100 || newVerticalSize > 100)
        {
            const errorMsg = document.createElement("p");
            errorMsg.textContent = "Error: size must be under 100";
            container.appendChild(errorMsg);
            return;
        }
        container.innerHTML = "";
        start(newHorizontalSize, newVerticalSize);    
    });
}


// hopefully this loop will create the 16x16 grid
function displayGrid(horizontalSize, verticalSize)
{
    for (let i = 0; i < horizontalSize; i++) 
    {
        const divRow = document.createElement("div");
        divRow.style.display = "flex";
        divRow.style.flexGrow = "1";
        divRow.style.border = "1px red solid"
        divRow.classList.add("divRow");
        divRow.style.minHeight = "50px";
        container.appendChild(divRow);
        // column for loop
        for (let i = 0; i < verticalSize; i++) 
        {
            const divColumn = document.createElement("div");
            divColumn.style.display = "flex";
            divColumn.style.flexDirection = "column";
            divColumn.style.flexGrow = "1";
            divColumn.style.border = "1px blue solid"
            divColumn.classList.add("divColumn");
            divColumn.addEventListener("mouseover", function ()
            {
                divColumn.style.backgroundColor = "blue";
            });
            divRow.appendChild(divColumn);
        }
    
    }   

}

start(horizontalSize, verticalSize);