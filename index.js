//a package created to check if a number is prime 
//return true if the number is prime else false
//here number is represented as 'n'
function isPrime(n){
    //check if numb is less than 0 or (n is even and is not 2)
    if(n < 0 || (n % 2 === 0 && n !== 2)){
        //n is not prime
        return false;
    };

    //iterate from 3 to square root of n, incrementing by 2
    for(let i = 3; i < Math.sqrt(n); i += 2){
        //check if n is divisible by values of i
        if(n % i === 0){
            //n is not prime as it is completely divisible
            return false;
        }
    }

    //if n is not completely divisible by values of i till the iteration is complete
    //then n is prime
    return true;
}


//export isPrime function
module.exports = isPrime;