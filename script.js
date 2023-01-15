const clear = document.getElementById("clearBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

const btnColor = document.getElementById("colorBtn");
const btnGrid = document.getElementById("gridBtn");

const gridItems = document.getElementsByClassName("grid-item");

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Rainbow function, random number RGB values
let r = Math.ceil(Math.random() * 257);
let g = Math.ceil(Math.random() * 257);
let b = Math.ceil(Math.random() * 257);

// Clear function
function clearF() {
  cell.style.backgroundColor = "white";
}

makeGrid(16);

function makeGrid(size) {
  let container = document.getElementById("container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "white";
    container.appendChild(cell);

    // Draw effect
    cell.addEventListener("mouseover", (e) => {
      cell.style.backgroundColor = "black";
    });
    // Clear
    clear.addEventListener("click", (e) => {
      cell.style.backgroundColor = "white";
    });

    // Btn Color

    btnColor.addEventListener("click", () => {
      
      cell.style.backroundColor = "white";
      cell.addEventListener("mouseover", () => {
        for (k = 0; k < size; k++) {
          cell.style.backroundColor = "black";
        }
      });
    });

    // Random Rainbow Color

    rainbowBtn.addEventListener("click", () => {
      cell.style.backgroundColor = "white";

      cell.addEventListener("mouseover", function () {
        for (c = 0; c < size; c++) {
          cell.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        }
      });
    });
  }
}

btnGrid.addEventListener("click", (e) => {
  let gridSize = prompt("How big a grid?");
  makeGrid(gridSize);
});

/* 
btnColor.addEventListener("click", () => {
  console.log("clicked");
});

btnGrid.addEventListener("click", () => {
  console.log("clicked");
});

rainbowBtn.addEventListener("click", () => {
  console.log("clicked");
});
*/

/* answer
function makeGrid(columns, rows) {
    let container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  
    for (i = 0; i < (columns * rows); i++) {
      let cell = document.createElement('div');
  
      cell.style.backgroundColor = "white"
  container.appendChild(cell);
  
  cell.addEventListener('mouseover', e=> {
      cell.style.backgroundColor = "black"
  })
  }
  
  }
  
  
  makeGrid(3, 3);



  */
// Create Grid
/* 
function makeGrid(size) {
    let row = size;
    let col = size;
    for (i = 0; i < row * col; i ++) {
        let cell = document.createElement('div');
        container.append(cell).className = "grid-item"

    }
    makeGrid()
}


makeGrid(5)
*/

// function makeGrid(size) {
//   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

//   for (let i = 0; i < size * size; i++) {
//     let cell = document.createElement("div");
//     cell.style.backgroundColor = "white";
//     container.appendChild(cell);

//     cell.addEventListener("mouseover", (e) => {
//       cell.style.backgroundColor = "black";
//     });
//     let choice = window.prompt("Choose a number below 257");

//     function clearGrid() {
//       clearBtn.addEventListener("click", (e) => {
//         cell.style.backgroundColor = "white";
//       });
//     }
//     clearGrid();
//   }

// makeGrid(choice);
// }

/* 
//function to create a 16x16 grid
function createGrid(size){
    function resetSize(){
        clear.addEventListener('click', ()=>{
            let number = prompt("What size would you like the grid to be? (1-257)");
            container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        })
        
        
    }
    resetSize();

    let container = document.querySelector(".container");
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "black";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = "white";
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "black"
           })
        }
        

        clearGrid();    
    }
}

createGrid(16);


*/

/* 

function makeFive() {
  makeGrid(5);
}

// document.btnFive.addEventListener('click', makeFive())
// makeFive();

// Change Grid Size (1) 
document.querySelector('#btnOne').addEventListener('click', function() {
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.backgroundColor = "white";
    }
    return makeGrid(1);
   
})

// Change Grid Size (5) 
document.querySelector('#btnFive').addEventListener('click', function() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "white";
      }
    return makeGrid(5);
   
})

// Change Grid Size (10 x 10) 
document.querySelector('#btnTen').addEventListener('click', function() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "white";
      }
    return makeGrid(10);

    
    
   
})




// Change color on hover

function changeBackgroundColor(cell) {
  cell.style.backgroundColor = "black";
}

let cell = document.getElementsByClassName("grid-item");
for (i = 0; i < cell.length; i++) {
  cell[i].addEventListener("mouseover", function () {
    changeBackgroundColor(this);
  });
}






// Reset Background Color

function resetBackgroundColor() {
  clearBtn.addEventListener("click", () => {
    
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.backgroundColor = "white";
    }
  });
}
resetBackgroundColor();


// Make random number function 
function randomNum () {
   return  Math.floor(Math.random() * 257);
}
Math.ceil(Math.random() * 257)


// Random Rainbow Color

function randomRainbow() {
    rainbowBtn.addEventListener("click", () => {
      const gridItems = document.getElementsByClassName("grid-item");
      let r = Math.ceil(Math.random() * 257)
      let g = Math.ceil(Math.random() * 257)
      let b = Math.ceil(Math.random() * 257)
      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mouseover", function() {
            
        }) 
      }
    });
  }
  randomRainbow();


  
// Test button hover

// document.getElementById("btn").addEventListener("mouseover", function() {
//     document.getElementById("btn").style.backgroundColor = "white"
// })

// document.getElementsByClassName("grid-item").addEventListener("mouseover", function() {
//     document.getElementsByClassName("grid-item").style.backgroundColor = "white"
// })

*/
