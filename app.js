console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let numbers = 0; numbers <= 100; numbers++)
{
    if (numbers % 2 == 0)
    {

    }
    else 
    {
        console.log(`${numbers}`);
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let numbers = 0; numbers <= 100; numbers++)
{
    if (numbers % 3 == 0 && numbers % 5 == 0)
    {
        console.log('FIZZBUZZ');
    }
    else if (numbers % 5 == 0)
    {
        console.log('BUZZ');
    }
    else if (numbers % 3 == 0)
    {
        console.log('FIZZ');
    }
    else 
    {

    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//Exercise 1 Conversions:

console.log("Exercise 1: While Loop");

let numWhile = 0;

while (numWhile <= 100)
{
    if (numWhile % 2 == 0)
    {
        numWhile++
    }
    else 
    {
        console.log(`${numWhile}`);
        numWhile++;
    }
}

console.log("Exercise 1: Do/While Loop");

let numDoWhile = 0;

do {
    if (numDoWhile % 2 == 0)
    {
        numDoWhile++
    }
    else 
    {
        console.log(`${numDoWhile}`);
        numDoWhile++;
    }
} while (numDoWhile <= 100)

console.log("\n===============\n");

//Exercise 2 Conversions:

console.log("Exercise 2: While Loop");

let whileFizzBuzz = 0;

while (whileFizzBuzz <= 100)
{
    if (whileFizzBuzz % 3 == 0 && whileFizzBuzz % 5 == 0)
    {
        console.log('FIZZBUZZ');
        whileFizzBuzz++;
    }
    else if (whileFizzBuzz % 5 == 0)
    {
        console.log('BUZZ');
        whileFizzBuzz++;
    }
    else if (whileFizzBuzz % 3 == 0)
    {
        console.log('FIZZ');
        whileFizzBuzz++
    }
    else 
    {
        whileFizzBuzz++
    }
}

console.log("Exercise 2: Do/While Loop");

let doWhileFizzBuzz = 0;

do {
    if (doWhileFizzBuzz % 3 == 0 && doWhileFizzBuzz % 5 == 0)
    {
        console.log('FIZZBUZZ');
        doWhileFizzBuzz++;
    }
    else if (doWhileFizzBuzz % 5 == 0)
    {
        console.log('BUZZ');
        doWhileFizzBuzz++;
    }
    else if (doWhileFizzBuzz % 3 == 0)
    {
        console.log('FIZZ');
        doWhileFizzBuzz++
    }
    else 
    {
        doWhileFizzBuzz++
    }
} while (doWhileFizzBuzz <= 100)

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let foundNumber = false;



for (let position = 0; position <= n; position++)
{
    if (position == value)
    {
        console.log(`Found value ${value}!`);
        foundNumber = true;
        break;
    }
   
    
}

if (foundNumber == false)
{
    console.log(`Value ${value} not found.`);
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let stopPoint = Math.round(Math.random() * (1000 - 1) + 1);  // have to rename since n was already defined in line 140. 'Can not redfine blocked scoped varables'
let start = Math.round(Math.random() * (10 - 1) + 1);

for (; start <= stopPoint; start++)
{
    if (start % fizzDivisor == 0 && buzzDivisor % 5 == 0)
    {
        console.log('FIZZBUZZ');
    }
    else if (start % buzzDivisor == 0)
    {
        console.log('BUZZ');
    }
    else if (start % fizzDivisor == 0)
    {
        console.log('FIZZ');
    }
    else 
    {

    }
}