<!-- Replace with your package name and description -->
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 800 100">
  <rect width="100%" height="100" rx="8" ry="8" fill="#0366d6" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="24">
    Prime
  </text>
  <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="18">
    Simple Prime Number Checker
  </text>
</svg>

# Prime - 🚀 Simple Prime Number Checker

A lightweight npm package to check if a number is prime or not.

[![GitHub issues](https://img.shields.io/github/issues/AnirudhaPatil-1/prime-check-package)](https://github.com/AnirudhaPatil-1/prime-check-package/issues)
[![GitHub stars](https://img.shields.io/github/stars/AnirudhaPatil-1/prime-check-package)](https://github.com/AnirudhaPatil-1/prime-check-package/stargazers)
[![GitHub license](https://img.shields.io/github/license/AnirudhaPatil-1/prime-check-package)](https://github.com/AnirudhaPatil-1/prime-check-package/blob/main/MIT)


---

## Installation

To use the `prime` package in your JavaScript project, you can install it via npm:

```bash
npm install prime
```

## Usage

Import the `isPrime` function from the `prime` package into your JavaScript code.

```javascript
const isPrime = require('prime');

// Check if a number is prime
const result = isPrime(7); // Example usage
```

The `result` variable will be ✅ `true` if the input number is prime, and ❌ `false` otherwise.

## Function

### `isPrime(n)`

- `n` (Number): The number you want to check for primality.

Returns ✅ `true` if the input number is prime, and ❌ `false` otherwise.

## Examples

### Prime Numbers

```javascript
const isPrime = require('prime');

console.log(isPrime(2)); // ✅ true
console.log(isPrime(3)); // ✅ true
console.log(isPrime(5)); // ✅ true
```

### Non-Prime Numbers

```javascript
const isPrime = require('prime');

console.log(isPrime(1)); // ❌ false
console.log(isPrime(4)); // ❌ false
console.log(isPrime(9)); // ❌ false
```

### Non-Integer Input

```javascript
const isPrime = require('prime');

console.log(isPrime(4.15)); // ❌ false
console.log(isPrime('2'));   // ❌ false
```

## Contributing

Contributions, bug reports, and feedback are welcome! If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/AnirudhaPatil-1/prime-check-package/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<footer align="center">
  <p>Made with ❤️ by Anirudha Patil</p>
</footer>

