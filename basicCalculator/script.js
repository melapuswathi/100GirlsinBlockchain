// The display button should have everything we have clicked. Initially the expression is empty.
let expression = "";

// Getting the display box
let display = document.getElementById("display");

// Getting all buttons using class name which returns an array of elements with same class name.
let btns = document.getElementsByClassName("btn");

// Adding event listener to each of the buttons
for(let i =0;i<btns.length-2;i++){

    btns[i].addEventListener('click',()=>{

        // Updating expression as we click on buttons
        expression = expression.concat(btns[i].value);
        display.innerHTML = expression;
        
    })
}

// The expression should be evaluated when "=" is clicked and display result.
btns[15].addEventListener('click',() => {

    // If the given expression is in a proper format, then the result would be displayed else "Enter proper expression" is displayed.

        display.innerHTML = eval(expression);
     
})

// The display will be wiped clean when the clear display button is pressed.
btns[btns.length-1].addEventListener('click',()=>{

    expression = "";
    display.innerHTML = ""; 

})