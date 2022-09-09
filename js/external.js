console.log("Hello from external JavaScript");

// use alert to show a message that says "Welcome to my Website"
alert("Welcome to my Website");

// use a prompt to ask for user's favorite color
let favorite = prompt("What's your favorite color?");

// use the user's response to alert a message that says that color is your favorite too
prompt(favorite + " Is my favorite color too!");

//use prompt to ask use for a number
//renting TLM (3 days) BB (5 days) hercules (1 day) each day costs $3

prompt("What movies will you be renting today?");

//future proofing idea, consider storing previous prompt into a variable and asking if there are any other moves they'd
//like to add more movies to their cart then store their names as variables

let theLittleMermaid = Number(prompt("How many days will you be renting The Little Mermaid for?"));
let brotherBear = Number(prompt("How many days will you be renting Brother Bear for?"));
let hercules = Number(prompt("How many days will you be renting Hercules for?"));
let x = 3

alert("Your total is:" + ( ( theLittleMermaid + brotherBear + hercules) * x));

//google plays 400, worked for 6 hours | amazon pays 380 worked for 4 hours | facebook pays 350 worked for 10 hours

let google = Number(prompt("How many hours did you work with google this week?"));
let googlePay = 400
let amazon = Number(prompt("How many hours did you work with amazon this week?"));
let amazonPay = 380
let facebook = Number(prompt("How many hours did you work with facebook this week?"));
let facebookPay = 350

alert("Your paycheck comes out to:" + ((google * googlePay) + (amazon * amazonPay) + (facebook * facebookPay)));
//consider for the future an semi-autonomous payroll system

//student can only enroll in class if it is not full and doesn't conflict with schedule

var isThereSpace = confirm('Is there space in this class?');
var canItSchedule = confirm('Do you have space for this in your schedule?');
var canYouEnroll = isThereSpace && canItSchedule;
alert('Are you eligible for enrollment? ' + canYouEnroll);

//a product offer can only be applied if a person buys 2 or more items and offer isn't expired
//premium member's don't need to buy a specified amount