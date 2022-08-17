// divisible by 3 => Fizz;
// divisible by 5 => buzz;
// 3 & 5 => FizzBuzz;
// number
// not a number

function FizzBuzz(number) {
    if (typeof number != "number")
        return "not a number";

    if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz";

    if (number % 3 == 0) return "Fizz";
    if (number % 5 == 0) return "Buzz";

    return number;
}

console.log(FizzBuzz(15));


