export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Use const since employeeNames is never reassigned
  // Iterate through each employee using the iterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  // Join the employee names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}
