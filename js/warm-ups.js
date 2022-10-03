for (let i = 20; i >= 0; i--) {
    console.log(i);
}

let fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
console.log(fruits);

fruits.push('strawberry');
console.log(fruits)

fruits.unshift('strawberry');
console.log(fruits);

fruits.splice(3, 0, 'strawberry');
console.log(fruits);