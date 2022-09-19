//prompt a user for a number between 1 and 50
//use a loop and break to prompt the user if they enter an invalid input


// creating a function named is odd with no parameter
function isOdd() {
    //initiating a variable with a prompt who's input is then made a number

    let userNumber = Number(prompt('What\'s your odd number?'));
    // is userNumber even, if it is not odd recheck
    if (userNumber % 2 === 0) {
        console.log(userNumber + ' is not an odd number');
        isOdd();
    } else {
        //once it is an odd number print the number to be skipped
        console.log('Number to be skipped ' + userNumber);
        for (let i = 1; i < 50; i+= 2) {
            // console.log(i)
            // if i, is strictly equal to user's number print that it's skipping that number
            if (i === userNumber) {
                console.log('Yikes, skipping number ' + userNumber);
                continue;
            } else {
                //print every i number saying here's the odd number
                console.log('Here is the odd number '
                + i)
            }
        }
    }
}

isOdd();

//create a loop
//use a continue statement
//use continue to output all odd numbers between 1-50
//skip user's number

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (userNumber === i) {
//
//     }
// }





