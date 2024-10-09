export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the string after startString
    }
  });

  return result.join('-'); // Join the elements with a hyphen
}
