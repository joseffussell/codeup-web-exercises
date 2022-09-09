var a = 1;
// I am predicting that var a is = 1
var b = a++;
// var b will be = to 2 after post increment, after examining in chrome console, the result was 1
var c = ++a;
// var c with = 2 due to pre-incrementation, upon further examination in the chrome console, the result was 3
var d = "hello";
// var d will return with a simple hello
var e = "false";
// var e will return false
d++;
// d++ will return NaN | I'm not sure if this is the correct answer, it was just the one i could come up with.
e++;
// e++ will return NaN | I'm not sure if this is the correct answer, it's just the one that i managed to come up with

var perplexed; //perplexed is undefined (no value is assigned)
perplexed + 2;
// my prediction is that the variable will return undefined
// perplexed + 2 returned NaN however, perplexed by itself returned undefined because of having not been assigned a value.

var price = 2.7;
price.toFixed(2);
// price will return with the value of 2.70

var prices = "2.7"; //* variable was initially named price, but as to not interfere with previous variable names, it was renamed was renamed to prices

// I foresee the same result of price except as a string, the console ran the command but would not return a value, as to fixed doesn't associate with strings

isNaN(0);
// false
isNaN(1);
// false
isNaN("");
//false
isNaN("string");
//true
isNaN("0");
//false
isNaN("1");
//false
isNaN("3.145");
//false
isNaN(Number.MAX_VALUE);
//false
isNaN(Infinity);
//false
isNaN("true");
//true
isNaN(true);
//true
isNaN("false");
//true
isNaN(false);
//
// to illustrate why the isNaN() function is needed:
NaN == NaN


!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true

var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toLowerCase());

console.log(sample.toUpperCase());

var sample = "Hello Codeup" + " Students";

console.log(sample);

sample.replace("Students", "Class");

sample = sample.replace("Students", "Class")

console.log(sample.indexOf("c"));
// the value returned from indexOf c returned as -1
console.log(sample.indexOf("C"));
// the value returned was 6

var brotherBear = 5;
var theLittleMermaid = 3;
var hercules = 1;
var x = 3;
var total = (brotherBear + theLittleMermaid + hercules) * x;

console.log(total);

var google = 400 * 6;
var amazon = 380 * 4;
var facebook = 350 * 10;
var totalmonies = (google + amazon + facebook);

console.log(totalmonies);

// unable to figure out how to translate student enrollment question into JS as well as premium offer question

var username = 'codeup';
var password = 'notastrongpassword';








