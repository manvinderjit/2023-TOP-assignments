let userNumber;

getUserInput();

// Gets the user input and checks validity
function getUserInput(){
    userNumber = prompt("Enter a valid number!");
    
    // Checks validity of the user input
    if(userNumber === null){
        console.log("User cancelled operation!");
    }
    else if(userNumber !== null && isNaN(parseInt(userNumber))){
        getUserInput();
    } else{
        fizzBuzz(userNumber);
    }
}


function fizzBuzz(number){

    for (let i=1; i<=number; i++){    
        if(i % 3 == 0){
            if(i % 5 == 0){
                console.log("fizzbuzz")
            }else{
                console.log("fizz");
            }
                    
        } else if(i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
        
    }
}