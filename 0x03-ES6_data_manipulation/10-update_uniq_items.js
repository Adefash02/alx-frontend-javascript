export default function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update quantities
  groceriesMap.forEach((value, key) => {
    if (value === 1) {
      groceriesMap.set(key, 100);
    }
  });
}
