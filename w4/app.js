//<-- Plan  -->//
// Get the form from index.html, add an event listener, make sure it getst he input, respond to the input or lack there of, reset on reload.
document.addEventListener("DOMContentLoaded", function() {             
    const formElement = document.getElementById("generatorForm");   
    const nameInput = document.getElementById("inputName"); //Had to correct incorrect capitalized I in input
    const messageElement = document.getElementById("greeting");

    formElement.addEventListener("submit", function(event) {           
        event.preventDefault();                                        
        const name = nameInput.value;                                  

        if (name) {                                                     
            messageElement.textContent = `Hello ${name}, I hope your day is going well!`;   
        } else {
            messageElement.textContent = "Please enter your name above.";

            formElement.reset();                                           
        }
    });
}); 

