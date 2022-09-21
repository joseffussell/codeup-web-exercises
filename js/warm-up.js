console.log('sanity check');


function areaOfATriangle() {
    let height = prompt('What is the Height of your triangle?');
    let base = prompt('What is the Length of the base of your triangle?');
    return console.log('The area of your triangle is: ' + (.5 * base) * height);
}

// areaOfATriangle();


function reverseString() {
    let intakeString = prompt('Please type a word you\'d like reversed ');
    let reversedString = intakeString.reverse
    return console.log('Your reversed word is: ' + reversedString);
}

// reverseString();


let randomNumber = Math.floor(Math.random() * 100) + 1
function fizzBuzzFunction(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        return console.log('FizzBuzz');
    } else if (input % 3 === 0) {
        return console.log('Fizz')
    } else if (input % 5 === 0) {
        return console.log('Buzz')
    }

}

fizzBuzzFunction(randomNumber);