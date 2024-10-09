export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return ''; // Return an empty string if startString is not valid
  }

  const result = [];

  // Iterate over the set and check if each string starts with the given startString
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-'); // Join all the valid parts with a hyphen
}
