// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Get the current count of queries from weakMap for the endpoint
  const currentCount = weakMap.get(endpoint) || 0;

  // Increment the count by 1
  const newCount = currentCount + 1;

  // Update the weakMap with the new count for the endpoint
  weakMap.set(endpoint, newCount);

  // If the count reaches or exceeds 5, throw an error
  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
