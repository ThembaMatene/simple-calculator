
let input = document.getElementById('inputBox'); //declaring the variable to display info on the screen
let buttons = document.querySelectorAll('button'); //declaring button to display on the screen when its pressed by the user

let string = "";
let arr = Array.from(buttons); 
arr.forEach(button => {
    button.addEventListener('click', (e) => { //listens to when a button is pressed on the calculator
        if(e.target.innerHTML == '='){ //Sums up the values pressed on the Calc.
            string = eval(string);
            input.value = string;
        }


        else if(e.target.innerHTML == 'AC'){ //Cancels/removes the values on the calc screen
            string = ""; 
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){ //Deletes a single value
            string = string.substring(0, string.length-1)
            input.value = string;
        }
        else{ //Calculates
            string += e.target.innerHTML;
            input.value = string;
        }
       
    })
})