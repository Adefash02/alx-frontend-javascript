export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0
  if (denominator === 0) {
    throw new Error('cannot divide by 0'); // Throw an error
  }

  // Return the result of the division
  return numerator / denominator;
}
