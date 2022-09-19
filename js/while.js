console.log('sanity check');


// create a, while loop
// console log to show doubled result

// let i = 0
//
// do {
//     console.log(Math.pow(2, i++));
//
// } while (i <= 16);




//write code that generates a random number between 50-100 ✅
//above code will be used to represent the amount of cones to sell before
//starting the loop ✅
//inside of the loop code another rng for 1-5, this simulates the amount of
//cones being bought by clients. ✅
//use a do-while loop
//log the amount of cones sold to each person

let allCones = Number(Math.floor(Math.random() * 50) + 50);
    console.log(allCones);

let i = allCones

do {
    let howManyCones = Number(Math.floor(Math.random() * 5) + 1);
    console.log(allCones - (howManyCones + ' cones sold'))
} while (i <= allCones);



