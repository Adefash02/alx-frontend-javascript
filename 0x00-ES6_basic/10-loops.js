export default function appendToEachArrayValue(array, appendString) {
  const result = []; // Create a new array to store the modified values
  for (const value of array) {
    result.push(appendString + value); // Append the modified value to the new array
  }
  return result; // Return the new array
}
