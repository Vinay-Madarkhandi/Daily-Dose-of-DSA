function findPrimesInRange(R) {
  if (R < 3) {
    throw new Error("R should be a natural number greater than or equal to 3.");
  }

  const primes = [2]; // Start with 2 in the primes array

  for (let X = 3; X <= R; X++) {
    let isPrime = true;

    for (let i = 2; i < X; i++) {
      if (X % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(X);
    }
  }

  return primes;
}

// Example usage:
const R = 10000000; // Example value for R
const primesInRange = findPrimesInRange(R);
console.log(`Prime numbers from 2 to ${R}:`, primesInRange);
