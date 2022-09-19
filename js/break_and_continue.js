let userNumber = prompt('What\'s your favorite odd number?');

function isOdd(input){
    while (userNumber === "" || userNumber % 2 === 0) {
        return userNumber
    }
}